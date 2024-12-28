<?php

namespace App\Http\Requests\Frontend;

use Illuminate\Foundation\Http\FormRequest;

class TaskStoreRequest extends FormRequest
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
        return [
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['required', 'exists:categories,id'],
            'details' => ['required', 'string', 'max:1000'],
            'division_id' => ['required', 'exists:divisions,id'],
            'district_id' => ['required', 'exists:districts,id'],
            'address' => ['required', 'string', 'max:255'],
            'budget' => ['required', 'numeric', 'min:0'],
            'contact_number' => ['required', 'max:255'],
            'images' => ['required', 'array', 'min:1', 'max:5'],
            'images.*' => ['image', 'max:2048', 'mimes:jpg,jpeg,png'],
        ];
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
            'images.*.mimes' => 'Only .jpg, .jpeg, or .png files are allowed',
        ];
    }
}
