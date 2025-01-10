import Hero from "@/Components/Frontend/Hero";
import PopularCategories from "@/Components/Frontend/PopularCategories";
import TaskCard from "@/Components/Frontend/Task/TaskCard";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Home({ recent_tasks }) {
    console.log(recent_tasks);
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <AppLayout>
                <Hero />
                <section className="2xl:max-w-[1536px] 2xl:mx-auto">
                    <div className="mt-4 md:px-6">
                        <div className="">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 mt-2">
                                Recent Tasks
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                                {/* {recentTasks.map((task, index) => {
                                    return <TaskCard key={index} task={task} />;
                                })} */}
                                <TaskCard className="m-2" />
                                <TaskCard className="m-2" />
                                <TaskCard className="m-2" />
                                <TaskCard className="m-2" />
                                <TaskCard className="m-2" />
                                <TaskCard className="m-2" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 2xl:mt-8 pb-8 px-6">
                        <div className="">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 2xl:mb-6">
                                Popular Categories
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                                <PopularCategories />
                                <PopularCategories />
                                <PopularCategories />
                                <PopularCategories />
                            </div>
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
