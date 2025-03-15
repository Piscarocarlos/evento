<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        $categories = Category::orderByDesc('created_at')->with('events')->get();
        return inertia('backend/categories/index', ['list_categories' => $categories]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
            'color' => $request->color,
        ]);

        return to_route('categories.index');
    }

    public function destroy($id) {
        Category::destroy($id);
        return to_route('categories.index');
    }
}
