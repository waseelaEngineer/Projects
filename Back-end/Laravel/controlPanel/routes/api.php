<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\FrontendController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\OrdersController;
use App\Http\Controllers\API\AddonsController;
use App\Http\Controllers\API\ResturantController;
use App\Http\Controllers\API\VariantsController;

// Route::get('getcategory', [FrontendController::class, 'category']);
// Route::get('getproducts/{name}', [FrontendController::class, 'product']);
// Route::get('viewproduct/{category_name}/{product_name}', [FrontendController::class, 'viewProduct']);
// Route::post('addtocart', [CartController::class, 'addtocart']);
// Route::get('cart', [CartController::class, 'viewCart']);
// Route::put('cartupdateqty/{cart_id}/{scope}', [CartController::class, 'updateqty']);
// Route::delete('cartdeleteitem/{cart_id}', [CartController::class, 'cartDeleteItem']);
use App\Models\Branches;

Route::post('register',[AuthController::class, 'register']);
Route::post('login',[AuthController::class, 'login']);
Route::get('view-users',[AuthController::class, 'view']);

Route::get('view-category/{url}', [CategoryController::class, 'view']);
Route::get('view-product/{url}', [ProductController::class, 'view']);
Route::get('view-variant/{url}', [VariantsController::class, 'view']);
Route::get('view-addons/{url}', [AddonsController::class, 'view']);
Route::get('view-assignaddons/{url}', [AddonsController::class, 'viewAssign']);
Route::get('show-resturant/{url}', [ResturantController::class, 'show']);
Route::post('add-order', [OrdersController::class, 'add']);


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){

    Route::get('/checkingAuthenticated', function (){
        return response()->json(['message'=>'You are in', 'status'=>200], 200);
    });

    //Category
    Route::post('add-category/{url}', [CategoryController::class, 'add']);
    Route::get('edit-category/{id}', [CategoryController::class, 'edit']);
    Route::put('update-category/{id}', [CategoryController::class, 'update']);
    Route::delete('delete-category/{id}', [CategoryController::class, 'delete']);

    //Products
    Route::post('add-product', [ProductController::class, 'add']);
    Route::get('edit-product/{id}', [ProductController::class, 'edit']);
    Route::post('update-product/{id}', [ProductController::class, 'update']);
    Route::delete('delete-product/{id}', [ProductController::class, 'delete']);

    //Resturant
    Route::post('add-resturant', [ResturantController::class, 'add']);
    Route::get('edit-resturant/{id}', [ResturantController::class, 'edit']);
    Route::post('update-resturant/{id}', [ResturantController::class, 'update']);
    Route::delete('delete-resturant/{id}', [ResturantController::class, 'delete']);
    Route::get('view-resturants', [ResturantController::class, 'view']);

    //Orders
    Route::get('view-orders', [OrdersController::class, 'view']);

    //Variant
    Route::post('add-variant', [VariantsController::class, 'add']);
    Route::get('edit-variant/{id}', [VariantsController::class, 'edit']);
    Route::post('update-variant/{id}', [VariantsController::class, 'update']);
    Route::delete('delete-variant/{id}', [VariantsController::class, 'delete']);

    //Addons
    Route::post('add-addon', [AddonsController::class, 'add']);
    Route::get('edit-addon/{id}', [AddonsController::class, 'edit']);
    Route::post('update-addon/{id}', [AddonsController::class, 'update']);
    Route::delete('delete-addon/{id}', [AddonsController::class, 'delete']);
    Route::post('add-assignaddons', [AddonsController::class, 'addAssign']);
    Route::delete('delete-assignaddons/{id}', [AddonsController::class, 'deleteAssign']);
});

Route::middleware(['auth:sanctum'])->group(function(){

    Route::post('logout',[AuthController::class, 'logout']);

});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });