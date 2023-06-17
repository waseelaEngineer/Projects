<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addons extends Model
{
    use HasFactory;
    protected $table = 'addons';
    protected $fillable = [
        'resturant_url',
        'name',
        'price',
        'status',
    ];
}