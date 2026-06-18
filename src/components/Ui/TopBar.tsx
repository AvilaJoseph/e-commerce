import { Link } from "react-router-dom"
import { Search, UserRound, LogIn } from "lucide-react"

export function TopBar() {
    return (
        <div className="absolute top-0 left-0 flex w-full h-16 px-8 py-2 justify-between items-center z-10">
            <nav className="flex gap-4">
                <Link to="" className="text-white">Inicio</Link>
                <Link to="" className="text-white">Productos</Link>
                <Link to="" className="text-white">Tiendas</Link>
                <Link to="" className="text-white">Nosotros</Link>
            </nav>
            <div>Logo</div>
            <div className="flex items-center gap-3">
                <div className="flex flex-row gap-3 items-center border border-white px-3 py-2 rounded-full">
                    <Search size={18} color="#ffff" />
                    <input type="text" placeholder="Buscar camisetas ..." className="text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full border border-white w-10 h-10 text-black">
                    <UserRound size={18} color="#ffff" />
                </div>
                <div className="flex items-center justify-center rounded-full border border-white w-10 h-10 text-black">
                    <LogIn size={18} color="#ffff" />
                </div>
            </div>
        </div>
    )
}