<?php

namespace App\Http\Controllers;
use App\Models\Suggestions;

use Illuminate\Http\Request;

class SuggestionsController extends Controller
{
    function view(){
        return Suggestions::all();
    }

    function add(Request $request){
        $suggestion = new Suggestions;
        $suggestion->name = $request->input('name');
        $suggestion->email = $request->input('email');
        $suggestion->message = $request->input('message');
        $suggestion->save();

        return response()->json([
            'status'=>200,
        ]);
    }
}
