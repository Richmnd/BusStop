<?php
namespace App\Classes;

use Illuminate\Support\Facades\DB;

class Bus
{
    private $plate_nr;
    private $model;
    private $type;
    private $id;

    function __construct($plate_nr = null, $model = null, $type = null, $id = null)
    {
        $this->plate_nr = $plate_nr;
        $this->model = $model;
        $this->type = $type;

    }


    public static function create($data)
    {
        DB::table('buses')->insert($data);
    }

    public static function show($id)
    {
        return DB::table('buses')->where('id', $id)->first();
    }


}