<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IpHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'city',
        'country',
        'ip',
        'loc',
        'org',
        'postal',
        'region',
        'timezone',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
