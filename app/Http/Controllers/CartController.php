<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cartItems = Cart::with('product')
            ->where('user_id', Auth::id())
            ->get();
            
        $total = $cartItems->sum(function ($item) {
            return $item->quantity * $item->product->price;
        });
        
        return Inertia::render('Cart/Index', [
            'cartItems' => $cartItems,
            'total' => $total
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Product $product)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1|max:' . $product->stock
        ]);
        
        $cartItem = Cart::where('user_id', Auth::id())
            ->where('product_id', $product->id)
            ->first();
            
        if ($cartItem) {
            $newQuantity = $cartItem->quantity + $request->quantity;
            
            if ($newQuantity > $product->stock) {
                return redirect()->back()->with('error', 'Stok produk tidak mencukupi');
            }
            
            $cartItem->update([
                'quantity' => $newQuantity
            ]);
        } else {
            Cart::create([
                'user_id' => Auth::id(),
                'product_id' => $product->id,
                'quantity' => $request->quantity
            ]);
        }
        
        return redirect()->back()->with('success', 'Produk berhasil ditambahkan ke keranjang');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1|max:' . $cart->product->stock
        ]);
        
        $cart->update([
            'quantity' => $request->quantity
        ]);
        
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $cart->delete();
        
        return redirect()->back();
    }
} 