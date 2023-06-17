<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function view(){
        
        return User::all();
    }

    public function register(Request $request){

        $user = new User;
        $user->fname = $request->input('fname');
        $user->lname = $request->input('lname');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->gender = $request->input('gender');
        $user->education = $request->input('education');
        $user->date = $request->input('date');
        $user->op1 = $request->input('op1');
        $user->op2 = $request->input('op2');
        $user->op3 = $request->input('op3');
        $user->op4 = $request->input('op4');
        $user->op5 = $request->input('op5');
        $user->op6 = $request->input('op6');
        $user->op7 = $request->input('op7');
        $user->policyClicks = $request->input('policyClicks');
        $user->termsClicks = $request->input('termsClicks');
        $user->policyTime = $request->input('policyTime');
        $user->termsTime = $request->input('termsTime');
        $user->registerTime = $request->input('registerTime');
        $user->save();

        return response()->json([
            'status'=>201,
            'message'=> 'success',
        ]);
    }

}
