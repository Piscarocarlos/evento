<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        return inertia("backend/events/index", ['list_events' => Event::with('category')->get()]);
    }

    public function create()
    {
        return inertia("backend/events/create", [
            'categories' => Category::select("id", "name")->get()
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'title' => 'required',
            'category_id' => 'required|exists:categories,id'
        ]);


        $event = new Event();
        $event->title = $request->title;
        $event->description = $request->description;
        $event->category_id = $request->category_id;
        $event->location = $request->location;
        $event->price = $request->price;
        $event->start_date = Carbon::parse($request->start_date)->format("Y-m-d h:i:s");
        $event->end_date = Carbon::parse($request->end_date)->format("Y-m-d h:i:s");

        if($request->hasFile('imageUrl')) {
            $event->imageUrl = $request->file('imageUrl')->store("events");
        }


        $event->save();

        return to_route("events.index");
    }
}
