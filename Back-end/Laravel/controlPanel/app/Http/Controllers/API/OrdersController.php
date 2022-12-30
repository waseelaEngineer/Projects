<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orders;

class OrdersController extends Controller
{

    public function view(){

        $orders = Orders::all();

        return response()->json([
            'status'=>200,
            'orders'=>$orders,
        ]);
    }

    public function add(Request $request){
        $order = new Orders;

        $order->resturant_url = $request->input('resturant_url');
        $order->price = $request->input('price');
        $order->currency = $request->input('currency');

        $order->save();
    }
}
