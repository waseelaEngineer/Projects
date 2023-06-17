<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Variants;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class VariantsController extends Controller
{

    public function view($url){
        $variants = Variants::where('resturant_url', $url)->get();

        return response()->json([
            'status'=>200,
            'variants'=>$variants,
        ]);
    }

    public function edit($id){
        $variant = Variants::find($id);

        if ($variant){
            return response()->json([
                'status'=>200,
                'variant'=>$variant,
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Variant not found',
            ]);
        }
    }

    public function delete($id){
        $variant = Variants::find($id);

        if ($variant){
            $variant->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Variant deleted successfully'
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Variant not found'
            ]);    
        }
    }

    public function add(Request $request){

        $validator = Validator::make($request->all(), [
            'product_id'=>'required|max:20|',
            'name'=>'required|max:191',
            'price'=>'required',
        ]);

        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else{
            $variant = new Variants;
            $variant->resturant_url = $request->input('resturant_url');
            $variant->product_id = $request->input('product_id');
            $variant->name = $request->input('name');
            $variant->price = $request->input('price');
            $variant->save();

            return response()->json([
                'status'=>200,
                'message'=>'Variant added successfully'
            ]);
        }

    }

    public function update(Request $request, $id){

        $validator = Validator::make($request->all(), [
            'product_id'=>'required|max:20|',
            'name'=>'required|max:191',
            'price'=>'required',
        ]);
        
        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else{

            $variant = Variants::find($id);

            if ($variant){
                $variant->product_id = $request->input('product_id');
                $variant->name = $request->input('name');
                $variant->price = $request->input('price');
                $variant->save();
    
                return response()->json([
                    'status'=>200,
                    'message'=>'Variant updated successfully'
                ]);
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>'Variant not found'
                ]);
            }
        }

    }
}
