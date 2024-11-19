<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['namespace' => 'API', 'prefix' => 'users'], function ()
{
    Route::post('/', [\App\Http\Controllers\API\UserController::class, 'store']);
});

Route::group(['namespace' => 'API', 'prefix' => 'fruits'], function ()
{
    Route::get('/', [\App\Http\Controllers\API\FruitController::class, 'index']);
});
