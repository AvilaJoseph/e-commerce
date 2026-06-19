import { Plus } from "lucide-react"

export function MoreProducts() {
    return (
        <section className="flex flex-col w-full gap-3 mt-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <h2 className="text-xl">Algunos productos que te pueden interesar</h2>
                <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full">
                    <a href="" className="bg-green-950 rounded-2xl text-white px-4 py-2 text-center whitespace-nowrap">Belleza</a>
                    <a href="" className="bg-white border border-green-950 rounded-2xl text-green-950 px-4 py-2 text-center whitespace-nowrap">Ropa y Moda</a>
                    <a href="" className="bg-white border border-green-950 rounded-2xl text-green-950 px-4 py-2 text-center whitespace-nowrap">Comida</a>
                    <a href="" className="bg-white border border-green-950 rounded-2xl text-green-950 px-4 py-2 text-center whitespace-nowrap">Muebles</a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-square rounded-t-2xl">
                        <div></div>
                    </div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-4 flex flex-col gap-1">
                        <h2 className="text-sm md:text-base font-medium line-clamp-2">Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-center mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1 cursor-pointer">
                                <Plus size={16} color="#ffff" />
                                <h2 className="text-sm text-white">Añadir al carrito</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-square rounded-t-2xl"></div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-4 flex flex-col gap-1">
                        <h2 className="text-sm md:text-base font-medium line-clamp-2">Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-center mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1 cursor-pointer">
                                <Plus size={16} color="#ffff" />
                                <h2 className="text-sm text-white">Añadir al carrito</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-square rounded-t-2xl"></div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-4 flex flex-col gap-1">
                        <h2 className="text-sm md:text-base font-medium line-clamp-2">Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-center mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1 cursor-pointer">
                                <Plus size={16} color="#ffff" />
                                <h2 className="text-sm text-white">Añadir al carrito</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-square rounded-t-2xl"></div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-4 flex flex-col gap-1">
                        <h2 className="text-sm md:text-base font-medium line-clamp-2">Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-center mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1 cursor-pointer">
                                <Plus size={16} color="#ffff" />
                                <h2 className="text-sm text-white">Añadir al carrito</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}