<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\AssignAddon;
use App\Models\Variants;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function view($url){
        $category = Category::where('resturant_url', $url)->get();
        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }

    public function edit($id){
        $category = Category::find($id);
        if ($category){
            return response()->json([
                'status'=>200,
                'category'=>$category,
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'ID not found'
            ]);
        }
    }

    public function delete($id){

        $category = Category::find($id);

        if ($category){

            $products = Product::where('category_id',$id)->get();
            if (count($products) != 0){
                foreach ($products as &$product){
                    $assigns = AssignAddon::where('product_id',$product->id)->delete();
                    $variants = Variants::where('product_id',$product->id)->delete();
                    $path = $product->image;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $product->delete();
                }
            }

            $category->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Category deleted successfully',
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'ID not found',
            ]);
        }
    }

    public function add(Request $request, $url){

        $validator = Validator::make($request->all(), [
            'name'=>'required|max:191',
        ]);

        if ($validator->fails()){
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else{
            $category = new Category;
            $category->resturant_url = $url;
            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->status = $request->input('status');
            $category->save();

            return response()->json([
                'status'=>200,
                'message'=>'Category added Successfully',
            ]);
        }
    }

    public function update(Request $request, $id){

        $validator = Validator::make($request->all(), [
            'name'=>'required|max:191',
        ]);

        if ($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else{
            $category = Category::find($id);

            if ($category){
                $category->name = $request->input('name');
                $category->description = $request->input('description');
                $category->status = $request->input('status');
                $category->save();
                return response()->json([
                    'status'=>200,
                    'message'=>'Category updated Successfully',
                ]);
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>'ID not found'
                ]);
            }
        }
    }
}