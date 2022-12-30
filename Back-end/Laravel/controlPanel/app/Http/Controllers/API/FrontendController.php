<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;

class FrontendController extends Controller
{
    public function category(){
        
        $category = Category::where('status', 'available')->get();
        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }

    public function product($name){

        $category = Category::where('name',$name)->where('status','available')->first();

        if ($category){

            $product = Product::where('category_id',$category->id)->where('status','available')->get();
            if ($product){
                return response()->json([
                    'status'=>200,
                    'product_data'=>[
                        'product'=>$product,
                        'category'=>$category,
                    ],
                ]);
            }
            else{
                return response()->json([
                    'status'=>400,
                    'message'=>'No product available',
                ]);
            }
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Product not found',
            ]);
        }
    }

    public function viewProduct($category_name, $product_name){

        $category = Category::where('name',$category_name)->where('status','available')->first();
        error_log($category_name);

        if ($category){

            $product = Product::where('category_id',$category->id)
                                ->where('name',$product_name)
                                ->where('status','available')
                                ->first();

            if ($product){
                return response()->json([
                    'status'=>200,
                    'product'=>$product,
                ]);
            }
            else{
                return response()->json([
                    'status'=>400,
                    'message'=>'No product available',
                ]);
            }
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'No category found',
            ]);
        }
    }
}
