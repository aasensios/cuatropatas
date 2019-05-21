<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sample extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'barcode',
        'origin',
        'sequence',
        'pattern',
        'dog_id',
    ];

    protected $casts = [
        'pattern' => 'array'
   ];
}
