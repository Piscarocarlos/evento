<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use SoftDeletes;

    public function getPriceAttribute($value) {
        return $value . " DH";
    }

    public function getStartDateAttribute($value) {
        return Carbon::parse($value)->format("d F Y");
    }

    public function getEndDateAttribute($value) {
        return Carbon::parse($value)->format("d F Y");
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    protected $appends= ["cover", 'category_name'];

    public function getCoverAttribute() {
        return "storage/" . $this->imageUrl;
    }

    public function getCategoryNameAttribute() {
        return $this->category->name;
    }
}
