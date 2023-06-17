<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Messages;


class MessagesController extends Controller
{
    function view(){
        return Messages::all();
    }

    function add(Request $request){
        $message = new Messages;
        $message->name = $request->input('name');
        $message->email = $request->input('email');
        $message->phone = $request->input('phone');
        $message->title = $request->input('title');
        $message->message = $request->input('message');
        $message->save();

        return response()->json([
            'status'=>200,
        ]);
    }
}
