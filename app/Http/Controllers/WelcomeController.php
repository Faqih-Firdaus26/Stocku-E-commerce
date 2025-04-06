<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $featuredProducts = Product::with(['category', 'images'])
            ->where('is_featured', true)
            ->latest()
            ->take(8)
            ->get();

        $categories = Category::with('image')
            ->latest()
            ->take(8)
            ->get();

        return Inertia::render('Welcome', [
            'canLogin' => true,
            'canRegister' => true,
            'featuredProducts' => $featuredProducts,
            'categories' => $categories,
        ]);
    }
} 