import Hero from "@/Components/Frontend/Hero";
import PopularCategories from "@/Components/Frontend/PopularCategories";
import TaskCard from "@/Components/Frontend/Task/TaskCard";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Home({ recent_tasks, popular_categories }) {

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
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                                {recent_tasks.map((task) => {
                                    return (
                                        <TaskCard
                                            key={task.id}
                                            task={task}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 2xl:mt-8 pb-8 px-6">
                        <div className="">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 2xl:mb-6">
                                Popular Categories
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                                {popular_categories.map(category => {
                                    return <PopularCategories key={category.id} category_id={category.id} category_name={category.name} />
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
