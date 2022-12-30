<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facility;
use Illuminate\Support\Facades\Validator;

class FacilityController extends Controller
{
    function view(){
        return Facility::all();
    }

    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'email'=>'unique:facility,email',
        ]);

        if ($validator->fails()){   
            return response()->json([
                'status'=>422,
            ]);
        }

        else{
            
            $facility = new Facility;
            $facility->facilityName = $request->input('facilityName');
            $facility->facilityPlace = $request->input('facilityPlace');
            $facility->facilityRegisterNo = $request->input('facilityRegisterNo');
            $facility->facilityIssueDate = $request->input('facilityIssueDate');
            $facility->facilityPhone = $request->input('facilityPhone');
            $facility->facilityTel = $request->input('facilityTel');
            $facility->facilityEmail = $request->input('facilityEmail');
            $facility->facilityPostalBox = $request->input('facilityPostalBox');
            $facility->facilityPostalCode = $request->input('facilityPostalCode');
            $facility->facilityRole = $request->input('facilityRole');
            $facility->facilityGoal = $request->input('facilityGoal');
            $facility->name = $request->input('name');
            $facility->age = $request->input('age');
            $facility->nationality = $request->input('nationality');
            $facility->identityNo = $request->input('identityNo');
            $facility->identitySource = $request->input('identitySource');
            $facility->identityDate = $request->input('identityDate');
            $facility->birthPlace = $request->input('birthPlace');
            $facility->birthDate = $request->input('birthDate');
            $facility->residence = $request->input('residence');
            $facility->occupation = $request->input('occupation');
            $facility->phone = $request->input('phone');
            $facility->tel = $request->input('tel');
            $facility->email = $request->input('email');
            $facility->Postalbox = $request->input('Postalbox');
            $facility->Postalcode = $request->input('Postalcode');
            $facility->qualification = $request->input('qualification');
            $facility->specialization = $request->input('specialization');
            $facility->role = $request->input('role');
            $facility->reason = $request->input('reason');
    
            $file = $request->file('endorsement');
            $extention = $file->getClientOriginalExtension();
            $filename = $facility->email.'.endorsement.'.$extention;
            $file->move('uploads/facility/', $filename);
            $facility->endorsement = 'uploads/facility/'.$filename;
            
            $file = $request->file('identityImg');
            $extention = $file->getClientOriginalExtension();
            $filename = $facility->email.'.identityImg.'.$extention;
            $file->move('uploads/facility/', $filename);
            $facility->identityImg = 'uploads/facility/'.$filename;
            
            $file = $request->file('registerImg');
            $extention = $file->getClientOriginalExtension();
            $filename = $facility->email.'.registerImg.'.$extention;
            $file->move('uploads/facility/', $filename);
            $facility->registerImg = 'uploads/facility/'.$filename;

            $file = $request->file('nationalAddressImg');
            $extention = $file->getClientOriginalExtension();
            $filename = $facility->email.'.nationalAddressImg.'.$extention;
            $file->move('uploads/facility/', $filename);
            $facility->nationalAddressImg = 'uploads/facility/'.$filename;
       
            $file = $request->file('transferImg');
            $extention = $file->getClientOriginalExtension();
            $filename = $facility->email.'.transferImg.'.$extention;
            $file->move('uploads/facility/', $filename);
            $facility->transferImg = 'uploads/facility/'.$filename;
            
            $facility->save();

            return response()->json([
                'status'=>200,
            ]);
        }

    }
}
