<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;
    protected $table = 'facility';
    protected $fillable = [
        'facilityName',
        'facilityPlace',
        'facilityRegisterNo',
        'facilityIssueDate',
        'facilityPhone',
        'facilityTel',
        'facilityEmail',
        'facilityPostalBox',
        'facilityPostalCode',
        'facilityRole',
        'facilityGoal',
        'name',
        'age',
        'nationality',
        'identityNo',
        'identitySource',
        'identityDate',
        'birthPlace',
        'birthDate',
        'residence',
        'occupation',
        'phone',
        'tel',
        'email',
        'Postalbox',
        'Postalcode',
        'qualification',
        'specialization',
        'role',
        'reason',
        'endorsement',
        'identityImg',
        'registerImg',
        'nationalAddressImg',
        'transferImg',
    ];
}
