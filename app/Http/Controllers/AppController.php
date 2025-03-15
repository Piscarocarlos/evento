<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index ()
    {
        $categories = Category::with("events")->get();
        return inertia("frontend/home", ["categories" => $categories]);
    }
}
