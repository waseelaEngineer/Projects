<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Individual;
use Illuminate\Support\Facades\Validator;

class IndividualsController extends Controller
{
    
    function view(){
        return Individual::all();
    }

    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'email'=>'unique:individuals,email',
        ]);

        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
            ]);
        }

        else{

            $individual = new Individual;
            $individual->name = $request->input('name');
            $individual->age = $request->input('age');
            $individual->nationality = $request->input('nationality');
            $individual->identityNo = $request->input('identityNo');
            $individual->identitySource = $request->input('identitySource');
            $individual->identityDate = $request->input('identityDate');
            $individual->birthPlace = $request->input('birthPlace');
            $individual->birthDate = $request->input('birthDate');
            $individual->residence = $request->input('residence');
            $individual->occupation = $request->input('occupation');
            $individual->phone = $request->input('phone');
            $individual->tel = $request->input('tel');
            $individual->email = $request->input('email');
            $individual->Postalbox = $request->input('Postalbox');
            $individual->Postalcode = $request->input('Postalcode');
            $individual->qualification = $request->input('qualification');
            $individual->specialization = $request->input('specialization');
            $individual->role = $request->input('role');
            $individual->reason = $request->input('reason');
    
            $file = $request->file('endorsement');
            $extention = $file->getClientOriginalExtension();
            $filename = $individual->email.'.endorsement.'.$extention;
            $file->move('uploads/individual/', $filename);
            $individual->endorsement = 'uploads/individual/'.$filename;
            
            $file = $request->file('identityImg');
            $extention = $file->getClientOriginalExtension();
            $filename = $individual->email.'.identityImg.'.$extention;
            $file->move('uploads/individual/', $filename);
            $individual->identityImg = 'uploads/individual/'.$filename;
            
            $file = $request->file('nationalAddressImg');
            $extention = $file->getClientOriginalExtension();
            $filename = $individual->email.'.nationalAddressImg.'.$extention;
            $file->move('uploads/individual/', $filename);
            $individual->nationalAddressImg = 'uploads/individual/'.$filename;
       
            $file = $request->file('transferImg');
            $extention = $file->getClientOriginalExtension();
            $filename = $individual->email.'.transferImg.'.$extention;
            $file->move('uploads/individual/', $filename);
            $individual->transferImg = 'uploads/individual/'.$filename;
            
            $individual->save();

            return response()->json([
                'status'=>200,
            ]);
        }

    }

}
