import { MoveRight } from "lucide-react"

export function SomeShop() {
    return (
        <section className="flex flex-col w-full py-3">
            <div className="group flex justify-between items-center">
                <h2 className="text-xl">Conoce algunas tiendas</h2>
                <div className="flex items-center gap-2">
                    <a href="" className="group-hover:underline">Más tiendas</a>
                    <MoveRight size={15} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-[#efefef] flex justify-center items-center rounded-2xl px-8 py-3">
                    <img src="" alt="" className="h-18 w-20 bg-[#efefef]" />
                </div>
                <div className="bg-[#efefef] flex justify-center items-center rounded-2xl px-8 py-3">
                    <img src="" alt="" className="h-18 w-20 bg-[#efefef]" />
                </div>
                <div className="bg-[#efefef] flex justify-center items-center rounded-2xl px-8 py-3">
                    <img src="" alt="" className="h-18 w-20 bg-[#efefef]" />
                </div>
                <div className="bg-[#efefef] flex justify-center items-center rounded-2xl px-8 py-3">
                    <img src="" alt="" className="h-18 w-20 bg-[#efefef]" />
                </div>
                <div className="bg-[#efefef] flex justify-center items-center rounded-2xl px-8 py-3">
                    <img src="" alt="" className="h-18 w-20 bg-[#efefef]" />
                </div>
            </div>
        </section>
    )
}