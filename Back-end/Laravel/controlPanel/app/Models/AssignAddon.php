<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;
use App\Models\Addons;
use Illuminate\Database\Eloquent\Model;

class AssignAddon extends Model
{
    use HasFactory;
    protected $table = 'assignaddons';
    protected $fillable = [
        'resturant_url',
        'addon_id',
        'product_id',
    ];

    protected $with = ['product','addon'];

    public function product(){
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
    
    public function addon(){
        return $this->belongsTo(Addons::class, 'addon_id', 'id');
    }
}