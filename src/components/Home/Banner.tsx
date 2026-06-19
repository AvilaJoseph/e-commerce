import { TopBar } from "../Ui/TopBar";

export function Banner() {
    return (
        <section className="relative w-full min-h-[97vh] md:min-h-[95vh] bg-cover bg-center flex flex-col justify-end px-12 bg-green-950 rounded-2xl">
            <TopBar />
        </section>
    )
}