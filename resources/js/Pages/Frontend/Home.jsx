import Hero from "@/Components/Frontend/Hero";
import PopularCategories from "@/Components/Frontend/PopularCategories";
import TaskCard from "@/Components/Frontend/TaskCard";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <AppLayout>
                <Hero />
                <section className="mt-4">
                    <div className="">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            সাম্প্রতিক কাজসমূহ
                        </h2>
                        <div className="grid md:grid-cols-2">
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                        </div>
                    </div>
                </section>
                <section className="mt-4 2xl:mt-8 pb-8">
                    <div className="">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 2xl:mb-6">
                            জনপ্রিয় ক্যাটাগরি
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-7">
                            <PopularCategories />
                            <PopularCategories />
                            <PopularCategories />
                            <PopularCategories />
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
