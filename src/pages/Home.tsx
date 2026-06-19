import { Banner } from "../components/Home/Banner";
import { BestSelling } from "../components/Home/BestSelling";
import { Categories } from "../components/Home/Categories";
import { Footer } from "../components/Home/Footer";
import { Hero } from "../components/Home/Hero";
import { MoreProducts } from "../components/Home/MoreProducts";
import { Offers } from "../components/Home/Offers";
import { PopularCategories } from "../components/Home/PopularCategories";
import { SomeShop } from "../components/Home/SomeShop";

export function Home() {
    return (
        <div className="w-full min-h-screen bg-white p-2 md:p-6">
            <div className="flex flex-col w-full min-h-[calc(100vh-3rem)] bg-[#fdffff] rounded-2xl">
                <Banner />
                <Categories />
                <BestSelling />
                <MoreProducts />
                <Hero />
                <Offers />
                <PopularCategories />
                <SomeShop />
                <Footer />
            </div>
        </div>
    )
}