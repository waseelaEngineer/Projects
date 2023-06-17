<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('individuals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('age');
            $table->string('nationality');
            $table->string('identityNo');
            $table->string('identitySource');
            $table->string('identityDate');
            $table->string('birthPlace');
            $table->string('birthDate');
            $table->string('residence');
            $table->string('occupation');
            $table->string('phone');
            $table->string('tel');
            $table->string('email');
            $table->string('Postalbox');
            $table->string('Postalcode');
            $table->string('qualification');
            $table->string('specialization');
            $table->string('role');
            $table->longText('reason');
            $table->string('endorsement');
            $table->string('identityImg');
            $table->string('nationalAddressImg');
            $table->string('transferImg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('individuals');
    }
};
