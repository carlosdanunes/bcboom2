<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdraws', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->double('amount')->nullable();
            $table->double('initial_amount')->nullable();
            $table->string('orderno')->nullable();
            $table->string('tx_orderno')->nullable();
            $table->string('create_time')->nullable();
            $table->string('username')->nullable();
            $table->string('bankname')->nullable();
            $table->string('bankcard')->nullable();
            $table->string('trade_state')->nullable();
            $table->boolean('approved')->default(0);
            $table->string('status')->default('PENDING');
            $table->string('withdrawal_fee')->default(0);
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
        Schema::dropIfExists('withdraws');
    }
};