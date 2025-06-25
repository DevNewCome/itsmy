import React from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import imagemMoedas from '../img/Moedas.png'
import WebCars2 from '../img/WebCars2.png'
import CadastroDeLinks from '../img/CadastroDeLinks.png'
import CinemaCatalogo from '../img/CinemaCatalogo.png'
import ToDo from '../img/ToDo.png'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Pizzaria',
      description: 'Plataforma completa de um sistema de pizzaria que realiza pedidos e fechamentos de pedidos, alem de toda parte de cadastro.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Next.js', 'express'],
      github: 'https://github.com/DevNewCome/pizzaria-fullstack',
      live: 'https://github.com/DevNewCome/pizzaria-fullstack',
      featured: true,
      stats: { stars: 234, forks: 67 }
    },
    {
      title: 'Consulte a sua moeda digital',
      description: 'Sistema web que monitora em tempo real o valor, a queda e o crescimento da sua moeda digital.',
      image: imagemMoedas,
      tags: ['React', 'api-cripto'],
      github: 'https://github.com/DevNewCome/cripto',
      live: 'https://seecripto.netlify.app/',
      featured: true,
      stats: { stars: 156, forks: 34 }
    },
    {
      title: 'Cadastre e organize seus proprios Links',
      description: 'um dashboard simples, onde você consegue criar uma conta, logar e cadastrar seus links e edita-los',
      image: CadastroDeLinks,
      tags: ['React', 'FireBase', 'Tailwind'],
      github: 'https://github.com/DevNewCome/linktree',
      live: 'https://putlinks.netlify.app/',
      featured: false,
      stats: { stars: 89, forks: 23 }
    },
    {
      title: 'Site para ver os filmes em cartaz do momento',
      description: 'Site simples que consome uma API e verifica quais filmes estão em cartaz no momento',
      image: CinemaCatalogo,
      tags: ['React', 'API-movie-database'],
      github: 'https://github.com/DevNewCome/primeFilmes',
      live: 'https://devnewflix.netlify.app/',
      featured: false,
      stats: { stars: 178, forks: 45 }
    },
    {
      title: 'WebCars',
      description: 'Projeto inspirado em um grande site de venda de carros, onde apliquei conhecimentos de firebase com react',
      image: WebCars2,
      tags: ['React', 'FireBase', 'Tailwind'],
      github: 'https://github.com/DevNewCome/webCars',
      live: 'https://carsounfs.netlify.app/',
      featured: true,
      stats: { stars: 312, forks: 89 }
    },
    {
      title: 'Cadastro de Tarefas',
      description: 'Nesse sistema você pode cadastrar sua conta e logar, e fazer cadastro de tarefas, podendo edita-las, atualiza-las ou exclui-las',
      image: ToDo,
      tags: ['React', 'Firebase', 'tailwind'],
      github: 'https://github.com/DevNewCome/projetologin',
      live: 'https://todolist412.netlify.app/',
      featured: false,
      stats: { stars: 267, forks: 56 }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projetos" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Meus <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projetos</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Projetos em Destaque
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                        style={{ transitionDelay: '0.1s' }}
                      >
                        <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                        style={{ transitionDelay: '0.2s' }}
                      >
                        <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-4 h-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Outros Projetos
            </h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-3 h-3" />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver Todos no GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;