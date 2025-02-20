import FormInputError from "@/Components/Frontend/Form/FormInputError";
import FormInputSelect from "@/Components/Frontend/Form/FormInputSelect";
import FormInputTextArea from "@/Components/Frontend/Form/FormInputTextArea";
import FormLabel from "@/Components/Frontend/Form/FormLabel";
import FormSubmitButton from "@/Components/Frontend/Form/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/Form/FormTextInput";
import { asset } from "@/utils/helpers";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-toastify";

function TaskForm({ categories, divisions, task = {}, submitRoute, method }) {

    const [districts, setDistricts] = useState(() => {
        if (Object.keys(task).length === 0) {
            return []
        } else {
            const selectedDivision = divisions.find((division) => {
                return division.id == task.division_id
            })
            return selectedDivision.district
        }
    });

    const [images, setImages] = useState(task.images || []);

    const { data, setData, post, processing, errors } = useForm({
        _method: method,
        title: task.title ?? "",
        category_id: task.category_id ?? "",
        details: task.details ?? "",
        division_id: task.division_id ?? "",
        district_id: task.district_id ?? "",
        address: task.address ?? "",
        budget: task.budget ?? "",
        contact_number: task.contact_number ?? "",
        images: [],
        images_to_delete: []
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "division_id" || name === "district_id" || name === "category_id") {
            divisions.forEach((division) => {
                if (value == division.id) {
                    setDistricts(division.district);
                }
            });
            setData(name, value);
        } else if (name === "images") {
            const files = Array.from(event.target.files);

            if (images.length + files.length > 5) {
                toast.error("You can only select 5 images");
                return;
            }

            const updatedImages = files.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            }));

            setImages((prevImages) => [...prevImages, ...updatedImages]);
            setData("images", [...images, ...updatedImages].filter((image) => image.file).map(img => img.file));
        } else {
            setData(name, value)
        }

    };

    // const handleSelectChange = (event) => {
    //     const { name, value } = event.target;
    //     divisions.forEach((division) => {
    //         if (value == division.id) {
    //             setDistricts(division.district);
    //         }
    //     });
    //     setData(name, value);
    // };

    // const handleImageChange = (event) => {
    //     const files = Array.from(event.target.files);

    //     if (images.length + files.length > 5) {
    //         toast.error("You can only select 5 images");
    //         return;
    //     }

    //     const updatedImages = files.map((file) => ({
    //         file,
    //         preview: URL.createObjectURL(file),
    //     }));

    //     setImages((prevImages) => [...prevImages, ...updatedImages]);
    //     setData("images", [...images, ...updatedImages].filter((image) => image.file).map(img => img.file));
    // };

    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);

        setImages(updatedImages);


        setData(prevData => ({
            ...prevData,
            images: updatedImages.filter(image => image.file).map(img => img.file),
            images_to_delete: [...prevData.images_to_delete, images[index]?.id]
        }));

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post(submitRoute, {
            preserveScroll: true,
            onError: (err) => {
                if (err) {
                    toast.error("Validation Error!")
                }
            }
        });
    };

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
                    value={data.title}
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
                    handleChange={(e) => handleChange(e)}
                    required={true}
                    value={data.category_id}
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
                    onChange={(e) => handleChange(e)}
                    required={true}
                    defaultValue={data.division_id}
                >
                    <option
                        value=""
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
                    onChange={(e) => handleChange(e)}
                    required={true}
                    defaultValue={data.category_id}
                >
                    <option
                        value=""
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
                    value={data.address}
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
                    value={data.budget}
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
                    value={data.contact_number}
                />
                {errors.contact_number && (
                    <FormInputError>
                        {errors.contact_number}
                    </FormInputError>
                )}
            </div>

            {/* <!-- Details --> */}
            <div className="mb-4">
                <FormLabel htmlFor="details">Details</FormLabel>
                <FormInputTextArea
                    id="details"
                    name="details"
                    rows="6"
                    placeholder="Provide more details about your task"
                    handleChange={handleChange}
                    value={data.details}
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
                    onChange={(e) => handleChange(e)}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group border rounded-lg overflow-hidden"
                            style={{ padding: "10px" }}
                        >
                            <img
                                src={image.preview ?? asset("storage/task_images/" + image.image_path)}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeImage(index, image);
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