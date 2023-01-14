<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\IndividualsController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\SuggestionsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('individual-register',[IndividualsController::class, 'register']);
Route::get('individual-view',[IndividualsController::class, 'view']);

Route::post('facility-register',[FacilityController::class, 'register']);
Route::get('facility-view',[FacilityController::class, 'view']);


Route::post('messages-add',[MessagesController::class, 'add']);
Route::get('messages-view',[MessagesController::class, 'view']);

Route::post('suggestions-add',[SuggestionsController::class, 'add']);
Route::get('suggestions-view',[SuggestionsController::class, 'view']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
