import TaskForm from "@/Components/Frontend/Task/TaskForm";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function TaskPost({ categories, divisions }) {

    return (
        <AppLayout>
            <Head>
                <title>Create Task</title>
            </Head>
            <section className="lg:py-4">
                <div className="mx-auto max-w-4xl bg-white p-4 lg:p-6 xl:p-8 shadow-md rounded-lg">
                    <h2 className="lg:text-2xl mb-4 text-center text-blue-600 font-bold">
                        Fill this form to post your task
                    </h2>
                    <TaskForm
                        method="POST"
                        submitRoute={route("task.store")}
                        categories={categories}
                        divisions={divisions}
                    />
                </div>
            </section>
        </AppLayout>
    );
}
