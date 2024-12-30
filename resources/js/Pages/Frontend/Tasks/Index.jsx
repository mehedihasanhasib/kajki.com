import TaskCard from "@/Components/Frontend/TaskCard";
import TasksFilter from "@/Components/Frontend/TasksFilter";
import TasksTags from "@/Components/Frontend/TasksTags";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Tasks() {
    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <AppLayout>
                {/* Main Content */}
                <section className="md:px-6">
                    <TasksFilter />

                    <TasksTags />
                    {/* Tasks Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3">
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
