<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Addons;
use App\Models\AssignAddon;
use Illuminate\Http\Request;

class AddonsController extends Controller
{

    public function view($url){
        $addons = Addons::where('resturant_url', $url)->get();
        
        return response()->json([
            'status'=>200,
            'addons'=>$addons,
        ]);
    }
    
    public function edit($id){
        $addon = Addons::find($id);
        
        if ($addon){
            return response()->json([
                'status'=>200,
                'addon'=>$addon,
            ]);
        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>'Addon not found',
            ]);
        }
    }

    public function delete($id){
        $addon = Addons::find($id);

        if ($addon){
            $assigns = AssignAddon::where('addon_id',$id)->delete();
            $addon->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Addon deleted successfully',
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'Addon not found',
            ]);

        }
    }

    public function add(Request $request){

        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'price'=>'required',
            'status'=>'required',
        ]);

        if ($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else{

            $addon = new Addons;
            $addon->resturant_url = $request->input('resturant_url');
            $addon->name = $request->input('name');
            $addon->price = $request->input('price');
            $addon->status = $request->input('status');
            $addon->save();

            return response()->json([
                'status'=>200,
                'message'=>'Addon added successfully',
            ]);
        }
    }

    public function update(Request $request, $id){

        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'name'=>'required',
        ]);

        if ($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }

        else{
            $addon = Addons::find($id);

            if ($addon){
                $addon->name = $request->input('name');
                $addon->price = $request->input('price');
                $addon->status = $request->input('status');
                $addon->save();

                return response()->json([
                    'status'=>200,
                    'message'=>'Addon updated successfully',
                ]);
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>'Addon not found',
                ]);    
            }
        }
    }

    public function viewAssign($url){
        $assings = AssignAddon::where('resturant_url', $url)->get();
        return response()->json([
            'status'=>200,
            'assigns'=>$assings,
        ]);
    }

    public function deleteAssign($id){
        $assign = AssignAddon::find($id);
        $assign->delete();
    }

    public function addAssign(Request $request){
        $validator = Validator::make($request->all(), [
            'product_id'=>'required',
        ]);

        if ($validator->fails()){
            return response()->json([
                'status'=>422,
            ]);
        }
        else{
            $assign = new AssignAddon;
            $assign->resturant_url = $request->input('resturant_url');
            $assign->addon_id = $request->input('addon_id');
            $assign->product_id = $request->input('product_id');
            $assign->save();
            
            return response()->json([
                'status'=>200,
                'message'=>'Product assigned successfully',
            ]);
        }
    }
}
