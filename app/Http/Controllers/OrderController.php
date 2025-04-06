<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['items.product'])
            ->where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->paginate(10);
            
        return Inertia::render('Orders/Index', [
            'orders' => $orders
        ]);
    }
    
    public function show(Order $order)
    {
        $order->load(['items.product']);
        
        return Inertia::render('Orders/Show', [
            'order' => $order
        ]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'shipping_address' => 'required|array',
            'billing_address' => 'required|array',
            'payment_method' => 'required|string'
        ]);
        
        $cartItems = Cart::with('product')
            ->where('user_id', Auth::id())
            ->get();
            
        if ($cartItems->isEmpty()) {
            return redirect()->back()->with('error', 'Keranjang belanja kosong');
        }
        
        // Check stock
        foreach ($cartItems as $item) {
            if ($item->product->stock < $item->quantity) {
                return redirect()->back()->with('error', 'Stok produk ' . $item->product->name . ' tidak mencukupi');
            }
        }
        
        DB::beginTransaction();
        
        try {
            // Create order
            $order = Order::create([
                'user_id' => Auth::id(),
                'order_number' => 'ORD-' . strtoupper(Str::random(10)),
                'total_amount' => $cartItems->sum(function ($item) {
                    return $item->quantity * $item->product->price;
                }),
                'payment_status' => 'pending',
                'order_status' => 'pending',
                'payment_method' => $request->payment_method,
                'shipping_address' => $request->shipping_address,
                'billing_address' => $request->billing_address
            ]);
            
            // Create order items and update stock
            foreach ($cartItems as $item) {
                $order->items()->create([
                    'product_id' => $item->product_id,
                    'quantity' => $item->quantity,
                    'price' => $item->product->price,
                    'subtotal' => $item->quantity * $item->product->price
                ]);
                
                $item->product->decrement('stock', $item->quantity);
            }
            
            // Clear cart
            Cart::where('user_id', Auth::id())->delete();
            
            DB::commit();
            
            // Redirect to payment page
            return redirect()->route('payment.process', $order);
            
        } catch (\Exception $e) {
            DB::rollBack();
            
            return redirect()->back()->with('error', 'Terjadi kesalahan saat memproses pesanan');
        }
    }
}