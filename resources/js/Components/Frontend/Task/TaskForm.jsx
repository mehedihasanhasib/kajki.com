import React from 'react'

function TaskForm({ handleSubmit, }) {
    return (
        <form onSubmit={handleSubmit}>
            {/* <!-- Task Title --> */}
            <div className="mb-4">
                <FormLabel
                    className="block text-gray-700 font-medium"
                    htmlFor="title"
                    required={true}
                >
                    Task Title
                </FormLabel>
                <FormTextInput
                    type="text"
                    id="title"
                    name="title"
                    placeholder="What task do you need help with?"
                    handleChange={handleChange}
                    required={true}
                />
                {errors.title && (
                    <FormInputError>{errors.title}</FormInputError>
                )}
            </div>

            {/* <!-- Category --> */}
            <div className="mb-4">
                <FormLabel htmlFor="category" required={true}>Category</FormLabel>
                <FormInputSelect
                    id="category"
                    name="category_id"
                    options={categories}
                    handleChange={handleSelectChange}
                    required={true}
                />
                {errors.category_id && (
                    <FormInputError>
                        {errors.category_id}
                    </FormInputError>
                )}
            </div>

            {/* <!-- Division --> */}
            <div className="mb-4">
                <FormLabel htmlFor="division" required={true}>Division</FormLabel>
                <select
                    id="division"
                    name="division_id"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-gray-300 focus:border-gray-300"
                    onChange={(e) => handleSelectChange(e)}
                    required={true}
                >
                    <option
                        value=""
                        selected={true}
                        disabled={true}
                    >
                        Select Division
                    </option>
                    {divisions.map((option) => {
                        return (
                            <option
                                key={option.id}
                                value={option.id}
                            >
                                {option.division}
                            </option>
                        );
                    })}
                </select>

                {errors.division_id && (
                    <FormInputError>
                        {errors.division_id}
                    </FormInputError>
                )}
            </div>

            {/* <!-- District --> */}
            <div className="mb-4">
                <FormLabel htmlFor="district" required={true}>District</FormLabel>
                <select
                    id="district"
                    name="district_id"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-gray-300 focus:border-gray-300"
                    onChange={(e) => handleSelectChange(e)}
                    required={true}
                >
                    <option
                        value=""
                        selected={true}
                        disabled={true}
                    >
                        Select District
                    </option>
                    {districts.map((option) => {
                        return (
                            <option
                                key={option.id}
                                value={option.id}
                            >
                                {option.district}
                            </option>
                        );
                    })}
                </select>

                {errors.district_id && (
                    <FormInputError>
                        {errors.district_id}
                    </FormInputError>
                )}
            </div>

            {/* <!-- Address --> */}
            <div className="mb-4">
                <FormLabel htmlFor="address" required={true}>Address</FormLabel>
                <FormInputTextArea
                    id="address"
                    name="address"
                    rows="2"
                    placeholder="Provide your address. (e.g. 123 Main St, Anytown, USA)"
                    handleChange={handleChange}
                    required={true}
                />
                {errors.address && (
                    <FormInputError>
                        {errors.address}
                    </FormInputError>
                )}
            </div>

            {/* <!-- Budget --> */}
            <div className="mb-4">
                <FormLabel htmlFor="budget" required={true}>Budget</FormLabel>
                <FormTextInput
                    type="number"
                    id="budget"
                    name="budget"
                    placeholder="Enter your budget (e.g., $50)"
                    handleChange={handleChange}
                    required={true}
                />
                {errors.budget && (
                    <FormInputError>{errors.budget}</FormInputError>
                )}
            </div>

            {/* <!-- Contact Number --> */}
            <div className="mb-4">
                <FormLabel htmlFor="contactNumber" required={true}>
                    Contact Number
                </FormLabel>
                <FormTextInput
                    type="text"
                    id="contactNumber"
                    name="contact_number"
                    placeholder="Enter your contact number"
                    handleChange={handleChange}
                    required={true}
                />
                {errors.contact_number && (
                    <FormInputError>
                        {errors.contact_number}
                    </FormInputError>
                )}
            </div>

            {/* <!-- Description --> */}
            <div className="mb-4">
                <FormLabel htmlFor="details">Details</FormLabel>
                <FormInputTextArea
                    id="details"
                    name="details"
                    rows="6"
                    placeholder="Provide more details about your task"
                    handleChange={handleChange}
                />
                {errors.details && (
                    <FormInputError>
                        {errors.details}
                    </FormInputError>
                )}
            </div>

            {/* <!-- Images --> */}
            <div className="mb-4">
                <FormLabel htmlFor="images">
                    Upload Images
                </FormLabel>
                <input
                    type="file"
                    name="images"
                    id="images"
                    className="hidden"
                    multiple={true}
                    onChange={(e) => handleImageChange(e)}
                />
                <FormLabel
                    htmlFor="images"
                    className="inline-block px-4 py-2 mt-2 font-bold text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
                >
                    Choose Images
                </FormLabel>
                {errors.images && (
                    <div>
                        <FormInputError>
                            {errors.images}
                        </FormInputError>
                    </div>
                )}
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group border rounded-lg overflow-hidden"
                            style={{ padding: "10px" }}
                        >
                            <img
                                src={image.preview}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeImage(index);
                                }}
                                className="absolute top-2 right-2 w-6 h-6 text-white bg-red-600 rounded-full hover:bg-red-700 flex items-center justify-center"
                                aria-label={`Remove image ${index + 1
                                    }`}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* <!-- Submit Button --> */}
            <div>
                <FormSubmitButton
                    processing={processing}
                    processingText="Posting Task"
                >
                    Post Task
                </FormSubmitButton>
            </div>
        </form>
    )
}

export default TaskForm