import { MoveRight, Plus } from "lucide-react"

export function BestSelling() {
    return (
        <section className="flex flex-col w-full py-3 gap-1">
            <div className="flex justify-between">
                <h2 className="text-xl">Best Selling</h2>
                <div className="group flex flex-row gap-3 items-center">
                    <a href="" className="group-hover:underline">Más productos</a>
                    <MoveRight size={15} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-4/5 rounded-t-2xl">
                        <div></div>
                    </div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-5 flex flex-col gap-1">
                        <h2>Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-baseline mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1">
                                <Plus size={16} color="#ffff" />
                                <h2 className="text-sm text-white">Añadir al carrito</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-4/5 rounded-t-2xl"></div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-5 flex flex-col gap-1">
                        <h2>Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-baseline mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1">
                                <Plus size={16} color="#ffff" />
                                <h2 className="text-sm text-white">Añadir al carrito</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-4/5 rounded-t-2xl"></div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-5 flex flex-col gap-1">
                        <h2>Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-baseline mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1">
                                <Plus size={16} color="#ffff" />
                                <h2 className="text-sm text-white">Añadir al carrito</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-linear-to-b from-[#b5b1a3] to-[#e1ddd2] aspect-4/5 rounded-t-2xl"></div>
                    <div className="bg-[#fbf9f5] rounded-b-2xl p-5 flex flex-col gap-1">
                        <h2>Envase de agua reusable para greener lifestyle</h2>
                        <div className="flex flex-row justify-between items-baseline mt-1">
                            <h2 className="text-lg font-semibold">$45.02</h2>
                            <div className="bg-green-900 rounded-2xl py-2 px-2 items-center flex gap-1">
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