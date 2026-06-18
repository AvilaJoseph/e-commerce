export function Categories() {
    const categoriesData = [
        { title: "Ver Tiendas Populares", subtitle: "Explora los negocios", buttonText: "Ir a la tienda", link: "" },
        { title: "Categorías Destacadas", subtitle: "Los mejores productos", buttonText: "Ver más", link: "" },
        { title: "Ofertas de la Semana", subtitle: "Descuentos increíbles", buttonText: "Descubrir", link: "" },
        { title: "Nuevos Ingresos", subtitle: "Recién agregados", buttonText: "Explorar", link: "" }
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 mt-3">
            {categoriesData.map((cat, index) => (
                <div key={index} className="bg-green-950 rounded-2xl flex flex-col justify-between px-8 py-5 min-h-45">
                    <div>
                        <h2 className="text-white text-xl">{cat.title}</h2>
                        <h2 className="text-white text-lg">{cat.subtitle}</h2>
                    </div>

                    <a href={cat.link} className="bg-white text-black w-40 py-2 mt-4 rounded-2xl inline-flex items-center justify-center text-center transition-colors">
                        {cat.buttonText}
                    </a>
                </div>
            ))}
        </section>
    );
}