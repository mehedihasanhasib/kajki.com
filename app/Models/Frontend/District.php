<?php

namespace App\Models\Frontend;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    protected $fillable = ['district', 'district_bn', 'division_id'];

    public function division()
    {
        return $this->belongsTo(Division::class);
    }
}
