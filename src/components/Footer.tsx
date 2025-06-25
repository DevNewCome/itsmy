import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              JL
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais que fazem a diferença. 
              Freelancer com formação sólida e sempre em busca de novos desafios.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { name: 'Sobre', id: 'sobre' },
              { name: 'Habilidades', id: 'habilidades' },
              { name: 'Projetos', id: 'projetos' },
              { name: 'Experiência', id: 'experiencia' },
              { name: 'Contato', id: 'contato' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Feito com</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-current animate-pulse" />
              <span>por Jefferson Lira © {currentYear}</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Construído com React + TypeScript + Tailwind CSS
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200"
                title="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Disponível para freelances e oportunidades full-time • 
              <span className="text-green-400 ml-2">Respondo em até 24h</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;