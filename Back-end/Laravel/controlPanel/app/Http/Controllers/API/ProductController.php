<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Variants;
use App\Models\AssignAddon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    public function view($url){

        $products = Product::where('resturant_url', $url)->get();
        return response()->json([
            'status'=>200,
            'products'=>$products,
        ]);
    }

    public function edit($id){

        $product = Product::find($id);

        if ($product){
            return response()->json([
                'status'=>200,
                'product'=>$product,
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Product not found',
            ]);
        }
    }

    public function delete($id){
        $product = Product::find($id);

        if ($product){
            $assigns = AssignAddon::where('product_id',$id)->delete();
            $variants = Variants::where('product_id',$id)->delete();
            $path = $product->image;
            if(File::exists($path)){
                File::delete($path);
            }

            $product->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Product deleted successfully',
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Product not found',
            ]);
        }
    }

    public function add (Request $request){

        $validator = Validator::make($request->all(), [
            'category_id'=>'required|max:191',
            'name'=>'required|max:191',
            'price'=>'required|max:20',
            'image'=>'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }

        else{
            $product = new Product;
            $product->resturant_url = $request->input('resturant_url');
            $product->category_id = $request->input('category_id');
            $product->name = $request->input('name');
            $product->price = $request->input('price');
            $product->description = $request->input('description');
            $product->status = $request->input('status');

            if ($request->hasFile('image')){
                $file = $request->file('image');
                $extention = $file->getClientOriginalExtension();
                $filename = time().'.'.$extention;
                $file->move('uploads/product/', $filename);
                $product->image = 'uploads/product/'.$filename;
            }

            $product->save();

            return response()->json([
                'status'=>200,
                'message'=>'Product added successfully',
            ]);
        }
    }

    public function update(Request $request, $id){
        
        $validator = Validator::make($request->all(), [
            'category_id'=>'required|max:191',
            'name'=>'required|max:191',
            'price'=>'required|max:20',
        ]);

        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }

        else{
            $product = Product::find($id);

            if ($product){
                $product->category_id = $request->input('category_id');
                $product->name = $request->input('name');
                $product->price = $request->input('price');
                $product->description = $request->input('description');
                $product->status = $request->input('status');
    
                if ($request->hasFile('image')){

                    $path = $product->image;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $file = $request->file('image');
                    $extention = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extention;
                    $file->move('uploads/product/', $filename);
                    $product->image = 'uploads/product/'.$filename;
                }
    
                $product->update();
    
                return response()->json([
                    'status'=>200,
                    'message'=>'Product updated successfully',
                ]);
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>'Product not found',
                ]);
            }
        }
    }
}