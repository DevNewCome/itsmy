import React from 'react';
import { Briefcase, Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack Freelancer',
      company: 'Autônomo',
      period: '2022 - Presente',
      location: 'Remote',
      type: 'Freelancer',
      description: [
        'Desenvolvimento de aplicações web completas para diversos clientes',
        'Criação de sistemas responsivos com React, TypeScript e Node.js',
        'Implementação de APIs RESTful e integração com bancos de dados',
        'Colaboração direta com clientes para entender requisitos e entregar soluções'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Express.js'],
      achievements: [
        'Mais de 15 projetos entregues com sucesso',
        'Avaliação média de 4.9/5 dos clientes'
      ]
    },
    {
      title: 'Estudante de Análise e Desenvolvimento de Sistemas',
      company: 'Universidade Paulista (UNIP)',
      period: '2020 - 2022',
      location: 'São Paulo, SP',
      type: 'Graduação',
      description: [
        'Formação completa em desenvolvimento de sistemas e programação',
        'Projetos acadêmicos focados em desenvolvimento web e mobile',
        'Estudo de metodologias ágeis e engenharia de software',
        'Desenvolvimento de TCC sobre aplicações web modernas'
      ],
      technologies: ['Java', 'C#', 'JavaScript', 'SQL', 'HTML/CSS'],
      achievements: [
        'Formado com média geral 8.5',
        'Projeto de TCC destacado pela banca'
      ]
    },
    {
      title: 'Técnico em Informática',
      company: 'SENAC',
      period: '2017 - 2019',
      location: 'São Paulo, SP',
      type: 'Técnico',
      description: [
        'Formação técnica em informática e programação básica',
        'Aprendizado de fundamentos de redes e sistemas operacionais',
        'Desenvolvimento de projetos práticos em laboratório',
        'Suporte técnico e manutenção de equipamentos'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Windows Server'],
      achievements: [
        'Certificado com distinção',
        'Monitor de laboratório de informática'
      ]
    }
  ];

  const currentEducation = {
    degree: 'Bacharelado em Ciência da Computação',
    school: 'Universidade',
    period: '2024 - Presente',
    description: 'Aprofundamento em algoritmos, estruturas de dados e desenvolvimento de software avançado'
  };

  const certifications = [
    'Análise e Desenvolvimento de Sistemas - UNIP (2022)',
    'Técnico em Informática - SENAC (2019)',
    'JavaScript ES6+ - Certificação Online',
    'React.js - Certificação Online'
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Minha <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experiência</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Jornada acadêmica e profissional construindo conhecimento e experiência
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
              Experiência Profissional & Acadêmica
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 ml-12 md:ml-20">
                  <div className="absolute -left-8 md:-left-12 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {exp.title}
                        </h4>
                        <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            exp.type === 'Freelancer' 
                              ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                              : exp.type === 'Graduação'
                              ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                              : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Tecnologias:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200/50 dark:border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                Formação Atual
              </h3>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {currentEducation.degree}
                </h4>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {currentEducation.school}
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-3 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {currentEducation.period}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {currentEducation.description}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Formação & Certificações
              </h3>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg border border-blue-200/50 dark:border-gray-600/50"
                    >
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                      <span className="font-medium text-gray-800 dark:text-white">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;