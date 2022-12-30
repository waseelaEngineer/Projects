<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Individual extends Model
{
    use HasFactory;
    protected $table = 'individuals';
    protected $fillable = [
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
        'nationalAddressImg',
        'transferImg',
    ];
}
