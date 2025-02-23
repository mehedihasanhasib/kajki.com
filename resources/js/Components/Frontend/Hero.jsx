import { asset } from "@/utils/helpers";

export default function Hero() {

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 to-blue-900 h-[80vh] md:h-[55vh] flex items-center">

            <div className="relative max-w-[75vw] mx-auto md:px-6 py-6 md:py-12 lg:py-18 flex items-center z-20">
                <div className="grid xl:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-md">
                            🚀 Find the Best Professional for Your Task
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-200">
                            Connect with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skilled Experts</span> Effortlessly
                        </h1>
                        <p className="text-lg text-blue-100/80 max-w-xl">
                            Find verified professionals for your tasks in just a few clicks. Let’s get things done efficiently!
                        </p>

                    </div>

                    <div className="flex justify-center xl:justify-end">
                        <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
                            <img src={asset("assets/images/hero.jpg")} alt="" className="rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
