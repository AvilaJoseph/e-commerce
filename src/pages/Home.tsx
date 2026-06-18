import { Banner } from "../components/Home/Banner";
import { BestSelling } from "../components/Home/BestSelling";
import { Categories } from "../components/Home/Categories";
import { Hero } from "../components/Home/Hero";
import { PopularCategories } from "../components/Home/PopularCategories";

export function Home() {
    return (
        <div className="w-full min-h-screen bg-white p-2 md:p-6 overflow-hidden">
            <div className="flex flex-col w-full min-h-[calc(100vh-3rem)] bg-[#fdffff] rounded-2xl overflow-hidden">
                <Banner />
                <Categories />
                <Hero />
                <BestSelling />
                <PopularCategories />
            </div>
        </div>
    )
}