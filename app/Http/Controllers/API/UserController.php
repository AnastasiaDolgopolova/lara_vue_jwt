<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
       //

    }

    /**
     * Store a newly created resource in storage.
     * // override the default response codes
     * @LRDresponses 201
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        User::firstOrCreate([
            'email' => $data['email']
        ], $data);

        return response([]);
    }

    /**
     * Display the specified resource.
     * // override the default response codes
     * @LRDresponses 200|404
     */
    public function show(User $user)
    {
        if (!$user) {
            return response()->json(['errors' => 'User does not exist'], 404);
        }
        return response()->json(['success' => true, 'user' => $user], 200);
    }

    /**
     * Update the specified resource in storage.
     * // override the default response codes
     * @LRDresponses 200
     */
    public function update(Request $request, User $user)
    {
        //

    }

    /**
     * Remove the specified resource from storage.
     * // override the default response codes
     * @LRDresponses 200
     */
    public function destroy(User $user)
    {
       //
    }

}
