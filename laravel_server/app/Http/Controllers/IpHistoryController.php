<?php

namespace App\Http\Controllers;

use App\Models\IpHistory;
use Illuminate\Http\Request;

class IpHistoryController extends Controller
{
    //
    public function index(Request $request)
    {
        return $request;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|numeric',
            'city' => 'required|string',
            'country' => 'required|string',
            'ip' => 'required|string',
            'loc' => 'required|string',
            'org' => 'required|string',
            'postal' => 'required|string',
            'region' => 'required|string',
            'timezone' => 'required|string',
        ]);

        return IpHistory::create($validated);
    }
}
