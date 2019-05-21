<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('samples', function (Blueprint $table) {
            // Primary key
            $table->bigIncrements('id');
            
            // Fillable fields
            $table->string('barcode')->unique();
            $table->string('origin');
            // $table->binary('sequence');
            $table->string('sequence');
            $table->json('pattern');
            $table->bigInteger('dog_id')->unsigned();

            // created_at and updated_at
            $table->timestamps();

            // Foreign keys
            $table->foreign('dog_id')->references('id')->on('dogs')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('samples');
    }
}
