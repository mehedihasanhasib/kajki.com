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
                <section className="2xl:max-w-[1536px] 2xl:mx-auto px-6 py-12">
                    {/* Recent Tasks */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Recent Tasks</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recent_tasks.map((task) => (
                                <TaskCard key={task.id} task={task} />
                            ))}
                        </div>
                    </div>

                    {/* Popular Categories */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {popular_categories.map((category) => (
                                <PopularCategories
                                    key={category.id}
                                    category_id={category.id}
                                    category_name={category.name}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
