import TaskForm from '@/Components/Frontend/Task/TaskForm'
import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function ProfileMyTasksEdit({ task, categories, divisions }) {
    return (
        <AppLayout>
            <Head>
                <title>Edit Task</title>
            </Head>
            <section className="lg:py-4">
                <div className="mx-auto max-w-4xl bg-white p-4 lg:p-6 xl:p-8 shadow-md rounded-lg">
                    <TaskForm
                        method="PUT"
                        submitRoute={route("profile.mytask.update", { id: task.id })}
                        categories={categories}
                        divisions={divisions}
                        task={task}
                    />
                </div>
            </section>
        </AppLayout>
    )
}

export default ProfileMyTasksEdit