<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $table = 'user';
    protected $fillable = [
        'fname',
        'lname',
        'email',
        'password',
        'gender',
        'date',
        'op1',
        'op2',
        'op3',
        'op4',
        'op5',
        'op6',
        'op7',
        'terms',
        'policy',
        'policyClicks',
        'termsClicks',
        'termsTime',
        'policyTime',
        'registerTime',
    ];
}
