export function PopularCategories() {
    return (
        <section className="flex flex-col w-full py-3 gap-1">
            <h2 className="text-xl">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
                    <div className="bg-[#efefef] flex flex-col rounded-2xl px-5 md:px-8 py-3">
                        <h2 className="text-xl">Ropa y Moda</h2>
                        <p className="text-gray-500 text-lg">25k items</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#efefef] flex flex-col rounded-2xl px-5 md:px-8 py-3">
                            <h2 className="text-xl">Belleza</h2>
                            <p className="text-gray-500 text-lg">5k items</p>
                        </div>
                        <div className="bg-[#efefef] flex flex-col rounded-2xl px-5 md:px-8 py-3">
                            <h2 className="text-xl">Muebles</h2>
                            <p className="text-gray-500 text-lg">5k items</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#efefef] flex flex-col rounded-2xl px-5 md:px-8 py-3">s</div>
                        <div className="bg-[#efefef] flex flex-col rounded-2xl px-5 md:px-8 py-3">s</div>
                    </div>
                    <div className="bg-[#efefef] flex flex-col rounded-2xl px-5 md:px-8 py-3">sd</div>
                </div>
            </div>
        </section >
    )
}