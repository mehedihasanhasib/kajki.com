import FormInputSelect from "@/Components/Frontend/FormInputSelect";
import FormInputTextArea from "@/Components/Frontend/FormInputTextArea";
import FormLabel from "@/Components/Frontend/FormLabel";
import FormSubmitButton from "@/Components/Frontend/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/FormTextInput";
import AppLayout from "@/Layouts/AppLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function TaskPost({ categories, divisions }) {
    const [districts, setDistricts] = useState([]);
    const { data, setData, post, processing, errors } = useForm();

    const handleChange = (event) => {
        const { name, value } = event.target;
    };

    const handleDivisionChange = (event) => {
        const id = event.target.value;

        divisions.filter((division) => {
            if (id == division.id) {
                setDistricts(division.district);
            }
        });
    };
    return (
        <AppLayout>
            <Head>
                <title>Create Task</title>
            </Head>
            <section className="lg:py-4">
                <div className="mx-auto max-w-4xl bg-white p-4 lg:p-6 xl:p-8 shadow-md rounded-lg">
                    <h2 className="lg:text-2xl mb-4 text-center text-blue-600 font-semibold">
                        Fill this form to post your task
                    </h2>
                    <form action="#" method="POST">
                        {/* <!-- Task Title --> */}
                        <div className="mb-4">
                            <FormLabel
                                className="block text-gray-700 font-medium"
                                htmlFor="title"
                            >
                                Task Title
                            </FormLabel>
                            <FormTextInput
                                type="text"
                                id="title"
                                name="title"
                                placeholder="What task do you need help with?"
                                handleChange={handleChange}
                            />
                        </div>

                        {/* <!-- Category --> */}
                        <div className="mb-4">
                            <FormLabel htmlFor="category">Category</FormLabel>
                            <FormInputSelect
                                id="category"
                                name="category"
                                options={categories}
                            />
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
                        </div>

                        {/* <!-- Division --> */}
                        <div className="mb-4">
                            <FormLabel htmlFor="division">Division</FormLabel>
                            <select
                                id="division"
                                name="division"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-gray-300 focus:border-gray-300"
                                onChange={(e) => handleDivisionChange(e)}
                            >
                                <option value="">Select Division</option>
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
                        </div>

                        {/* <!-- District --> */}
                        <div className="mb-4">
                            <FormLabel htmlFor="district">District</FormLabel>
                            <select
                                name="district"
                                id="district"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-gray-300 focus:border-gray-300"
                            >
                                <option value="">Select District</option>
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
                        </div>

                        {/* <!-- Address --> */}
                        <div className="mb-4">
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <FormInputTextArea
                                id="address"
                                name="address"
                                rows="3"
                                placeholder="Provide your address"
                                handleChange={handleChange}
                            />
                        </div>
                        {/* <!-- Budget --> */}
                        <div className="mb-4">
                            <FormLabel htmlFor="budget">Budget</FormLabel>
                            <FormTextInput
                                type="number"
                                id="budget"
                                name="budget"
                                placeholder="Enter your budget (e.g., $50)"
                                handleChange={handleChange}
                            />
                        </div>

                        {/* <!-- Contact Number --> */}
                        <div className="mb-4">
                            <FormLabel htmlFor="contactNumber">
                                Contact Number
                            </FormLabel>
                            <FormTextInput
                                type="text"
                                id="contactNumber"
                                name="contact_number"
                                placeholder="Enter your contact number"
                                handleChange={handleChange}
                            />
                        </div>

                        {/* <!-- Submit Button --> */}
                        <div>
                            <FormSubmitButton
                                processing={null}
                                processingText="Posting Task"
                            >
                                Post Task
                            </FormSubmitButton>
                        </div>
                    </form>
                </div>
            </section>
        </AppLayout>
    );
}
