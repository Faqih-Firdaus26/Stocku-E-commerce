<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wishlistItems = Wishlist::with('product')
            ->where('user_id', Auth::id())
            ->get();
            
        return Inertia::render('Wishlist/Index', [
            'wishlistItems' => $wishlistItems
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Product $product)
    {
        $wishlistItem = Wishlist::where('user_id', Auth::id())
            ->where('product_id', $product->id)
            ->first();
            
        if (!$wishlistItem) {
            Wishlist::create([
                'user_id' => Auth::id(),
                'product_id' => $product->id
            ]);
            
            return redirect()->back()->with('success', 'Produk berhasil ditambahkan ke daftar yang disukai');
        }
        
        return redirect()->back()->with('info', 'Produk sudah ada di daftar yang disukai');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wishlist $wishlist)
    {
        $wishlist->delete();
        
        return redirect()->back()->with('success', 'Produk berhasil dihapus dari daftar yang disukai');
    }
} 