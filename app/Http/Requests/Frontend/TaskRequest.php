<?php

namespace App\Http\Requests\Frontend;

use App\Frontend\TaskRules;
use App\Models\Frontend\TaskImage;
use App\Rules\MaxTaskImageRule;
use Illuminate\Foundation\Http\FormRequest;

use function Laravel\Prompts\error;

class TaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // dd($this->id);
        $method = $this->_method;
        return [
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['required', 'exists:categories,id'],
            'details' => ['required', 'string', 'max:1000'],
            'division_id' => ['required', 'exists:divisions,id'],
            'district_id' => ['required', 'exists:districts,id'],
            'address' => ['nullable', 'string', 'max:255'],
            'budget' => ['required', 'numeric', 'min:0'],
            'contact_number' => ['required', 'numeric', 'digits:11'],
            'images' => $method == "POST" ? ['required', 'array', 'min:1', 'max:5'] : [new MaxTaskImageRule(taskId: $this->id, images_to_delete: $this->images_to_delete)],
            'images.*' => ['bail', $method == "POST" ? 'image' : '', 'max:2048', 'mimes:jpg,jpeg,png,webp,svg'],
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->hasAny(['images.*'])) {
                $validator->errors()->add('images', "Images should be less than 2MB and .jpg, .jpeg, .webp, .svg or .png files are allowed");
            }
        });
    }

    public function messages(): array
    {
        return [
            'category_id.required' => 'Select a category',
            'category_id.exists' => 'Category not found',
            'division_id.required' => 'Select a division',
            'division_id.exists' => 'Division not found',
            'district_id.required' => 'Select a district',
            'district_id.exists' => 'District not found',
            'images.*.max' => 'Image size should not exceed 2MB',
            'images.*.mimes' => 'Only .jpg, .jpeg, .webp, .svg or .png files are allowed',
        ];
    }
}
