<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Resturant;
use App\Models\Branches;
use App\Models\AssignAddon;
use App\Models\Category;
use App\Models\Variants;
use App\Models\Addons;
use App\Models\Orders;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class ResturantController extends Controller
{

    public function view(){
        $resturants = Resturant::all();
        return response()->json([
            'status'=>200,
            'resturants'=>$resturants,
        ]);
    }

    public function edit($id){

        $resturant = Resturant::find($id);

        $branches = Branches::where('resturant_url', $resturant->url)->get();

        if($resturant){
            return response()->json([
                'status'=>200,
                'resturant'=>$resturant,
                'branches'=>$branches,
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Resturant not found',
            ]);
        }
    }

    public function show($url){

        $resturant = Resturant::where('url', $url)->get();
        $branches = Branches::where('resturant_url', $url)->get();

        if($resturant){
            return response()->json([
                'status'=>200,
                'resturant'=>$resturant,
                'branches'=>$branches,
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Resturant not found',
            ]);
        }
    }

    public function add(Request $request){

        $validator = Validator::make($request->all(), [
            'url'=>'required|max:20|unique:resturants,url',
            'name'=>'required|max:191',
            '0phone'=>'required',
            'currency'=>'required|max:10',
            'logo'=>'required|image|mimes:jpeg,png,jpg|max:2048',
            'header'=>'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }

        else{
            
            $resturant = new Resturant;
            $resturant->url = $request->input('url');
            $resturant->name = $request->input('name');
            $resturant->description = $request->input('description');
            $resturant->currency = $request->input('currency');
            $resturant->status = $request->input('status');
            $resturant->layout = $request->input('layout');
            
            //logo img
            $file = $request->file('logo');
            $extention = $file->getClientOriginalExtension();
            $filename = $resturant->url.'.logo.'.$extention;
            $file->move('uploads/resturant/', $filename);
            $resturant->logo = 'uploads/resturant/'.$filename;
            
            //header img
            $file = $request->file('header');
            $extention = $file->getClientOriginalExtension();
            $filename = $resturant->url.'.header.'.$extention;
            $file->move('uploads/resturant/', $filename);
            $resturant->header = 'uploads/resturant/'.$filename;
            
            $resturant->save();
            
            for ($i = 0; $i < 50; $i++){
                if ( $request->input($i.'phone') != null ){
                    $branch = new Branches;
                    $branch->resturant_url = $request->input($i.'url');
                    $branch->phone = $request->input($i.'phone');
                    $branch->address = $request->input($i.'address');
                    $branch->save();
                }
                else{
                    return response()->json([
                        'status'=>200,
                        'message'=>'Resturant added successfully',
                    ]);
                }
            }
        }
    }

    public function update(Request $request, $id){
        
        $validator = Validator::make($request->all(), [
            'url'=>'required|max:20',
            'name'=>'required|max:191',
            'currency'=>'required|max:10',
            '0phone'=>'required',
        ]);

        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }

        else{
            $resturant = Resturant::find($id);

            if ($resturant){

                $resturant->url = $request->input('url');
                $resturant->name = $request->input('name');
                $resturant->description = $request->input('description');
                $resturant->currency = $request->input('currency');
                $resturant->status = $request->input('status');
                $resturant->layout = $request->input('layout');
    
                if ($request->hasFile('logo')){

                    $path = $resturant->logo;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $file = $request->file('logo');
                    $extention = $file->getClientOriginalExtension();
                    $filename = $resturant->url.'.logo.'.$extention;
                    $file->move('uploads/resturant/', $filename);
                    $resturant->logo = 'uploads/resturant/'.$filename;
                }
                if ($request->hasFile('header')){

                    $path = $resturant->header;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $file = $request->file('header');
                    $extention = $file->getClientOriginalExtension();
                    $filename = $resturant->url.'.header.'.$extention;
                    $file->move('uploads/resturant/', $filename);
                    $resturant->header = 'uploads/resturant/'.$filename;
                }
    
                $resturant->update();

                $branches = Branches::where('resturant_url', $resturant->url);
                $branches->delete();

                for ($i = 0; $i < 50; $i++){
                    if ( $request->input($i.'phone') != null ){
                        $branch = new Branches;
                        $branch->resturant_url = $request->input($i.'url');
                        $branch->phone = $request->input($i.'phone');
                        $branch->address = $request->input($i.'address');
                        $branch->save();
                    }
                    else{
                        return response()->json([
                            'status'=>200,
                            'message'=>'Resturant updated successfully',
                        ]);
                    }
                }
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>'Resturant not found',
                ]);
            }
        }
    }

    public function delete($id){
        $resturant = Resturant::find($id);

        if($resturant){

            $products = Product::where('resturant_url', $resturant->url)->get();

            if (count($products) != 0){
                foreach ($products as &$product){
                    $path = $product->image;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $product->delete();
                }
                $assigns = AssignAddon::where('resturant_url', $resturant->url)->delete();
                $categorys = Category::where('resturant_url', $resturant->url)->delete();
                $variants = Variants::where('resturant_url', $resturant->url)->delete();
                $branches = Branches::where('resturant_url', $resturant->url)->delete();
                $addons = Addons::where('resturant_url', $resturant->url)->delete();
                $orders = Orders::where('resturant_url', $resturant->url)->delete();
            }

            $logoPath = $resturant->logo;
            $headerPath = $resturant->header;

            if(File::exists($logoPath)){
                File::delete($logoPath);
            }
            if(File::exists($headerPath)){
                File::delete($headerPath);
            }

            $resturant->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Resturant deleted seccessfully',
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Resturant not found',
            ]);
        }
    }
}