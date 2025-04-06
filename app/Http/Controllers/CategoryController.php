<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with('image')->get();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }

    public function show(Category $category)
    {
        $category->load(['products' => function ($query) {
            $query->with('image')->latest();
        }]);

        return Inertia::render('Categories/Show', [
            'category' => $category,
        ]);
    }
} 