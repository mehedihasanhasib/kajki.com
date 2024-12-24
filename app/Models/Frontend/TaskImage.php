<?php

namespace App\Models\Frontend;

use Illuminate\Database\Eloquent\Model;

class TaskImage extends Model
{
    protected $table = 'task_images';

    protected $guarded = [];

    public function task()
    {
        return $this->belongsTo(Task::class, 'task_id', 'id');
    }
}
