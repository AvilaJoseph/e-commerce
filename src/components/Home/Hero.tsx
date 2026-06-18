export function Hero() {
    return (
        <section className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center py-6 md:py-10 px-8 mt-4 bg-green-950 rounded-2xl gap-3">
            <div className="flex flex-col text-center md:text-start">
                <h2 className="font-medium text-white">Black Friday Sale 20%</h2>
                <h2 className="text-2xl md:text-4xl text-white">Save Up to 50% Our Cupons</h2>
            </div>
            <a href="" className="text-lg bg-[#ff9d21] px-3 py-3 rounded-2xl">Mirar todos los cupones</a>
        </section>
    )
}