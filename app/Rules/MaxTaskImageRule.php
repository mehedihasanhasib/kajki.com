<?php

namespace App\Rules;

use Closure;
use App\Models\Frontend\TaskImage;
use Illuminate\Contracts\Validation\ValidationRule;

class MaxTaskImageRule implements ValidationRule
{
    public function __construct(
        public int $taskId,
        public mixed $images_to_delete = []
    ) {}

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $totalImages = (TaskImage::where('task_id', $this->taskId)->get()->count() + count($value)) - (collect($this->images_to_delete)->filter(fn($value) => !is_null($value))->count());

        if ($totalImages < 1) {
            $fail("Images field is required");
        }

        if ($totalImages > 5) {
            $fail("You can only select 5 images");
        }
    }
}
