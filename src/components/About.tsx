import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Código Limpo',
      description: 'Escrevo código limpo, legível e bem documentado seguindo as melhores práticas.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Foco em otimização e performance para criar aplicações rápidas e eficientes.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'UX/UI',
      description: 'Priorizo sempre a experiência do usuário com interfaces intuitivas e acessíveis.'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Dedicação',
      description: 'Apaixonado por tecnologia e sempre em busca de aprender coisas novas.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Sobre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Desenvolvedor apaixonado por criar soluções inovadoras que fazem a diferença na vida das pessoas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Minha Jornada</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Iniciei minha carreira técnica em 2017 com o curso Técnico em Informática pelo SENAC, 
                  onde desenvolvi uma base sólida em tecnologia. Em 2020, ingressei na graduação em 
                  Análise e Desenvolvimento de Sistemas na Universidade Paulista, concluindo em 2022.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Atualmente, trabalho como freelancer desenvolvendo soluções web modernas e estou 
                  cursando Ciência da Computação para aprofundar ainda mais meus conhecimentos. 
                  Especializo-me em desenvolvimento full-stack com foco em React, Node.js e tecnologias modernas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2024</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">Ciência da Computação</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2022</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">ADS Formado</div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;