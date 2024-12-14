<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    protected $fillable = [
        'division',
        'division_bn',
    ];

    public function district()
    {
        return $this->hasMany(District::class);
    }
}
