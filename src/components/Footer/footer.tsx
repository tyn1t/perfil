
export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            
            {/* Logo ou Nome */}
    
            {/* Links de Navegação */}
            <nav className="flex gap-6 mx-auto mt-4 md:mt-0">
                <a href="#sobre" className="hover:text-amber-400 transition">Sobre</a>
                <a href="#contado" className="hover:text-amber-400 transition">Contato</a>
                <a href="#projeto" className="hover:text-amber-400 transition">Projeto</a>
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
            <div className="text-center  text-sm text-gray-400 mt-6">
            © {new Date().getFullYear()} tyn1t. Todos os direitos reservados.
            </div>
        </footer>
    );
}