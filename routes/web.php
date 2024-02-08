<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Landing');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});


Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/table', function () {
    return Inertia::render('Table');
});

