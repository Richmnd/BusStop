<?php
namespace App\Classes;

use Illuminate\Support\Facades\DB;

class Bus
{
    private $plate_nr;
    private $model;
    private $type;
    private $id;
    function __construct($plate_nr, $model, $type, $id = null)
    {
        $this->plate_nr = $plate_nr;
        $this->model = $model;
        $this->type = $type;
    }


    public static function create()
    {
        DB::table('buses');
    }


}