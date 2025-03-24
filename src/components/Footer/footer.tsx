
export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            
            {/* Logo ou Nome */}
            <div className="text-lg font-semibold">Minha Empresa</div>
    
            {/* Links de Navegação */}
            <nav className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-amber-400 transition">Sobre</a>
                <a href="#" className="hover:text-amber-400 transition">Contato</a>
                <a href="#" className="hover:text-amber-400 transition">Suporte</a>
            </nav>
    
            {/* Redes Sociais */}
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-amber-400 transition">
                <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="hover:text-amber-400 transition">
                <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="hover:text-amber-400 transition">
                <i className="fab fa-instagram text-xl"></i>
                </a>
            </div>
            </div>
    
            {/* Direitos Autorais */}
            <div className="text-center text-sm text-gray-400 mt-6">
            © {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.
            </div>
        </footer>
    );
}