import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Next.js', level: 85, color: 'from-gray-800 to-gray-900' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-cyan-500' },
        { name: 'Sass', level: 75, color: 'from-green-500 to-green-600' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-600 to-green-700' },
        { name: 'FireBase', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Express.js', level: 90, color: 'from-gray-700 to-gray-800' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-700 to-indigo-700' },
        { name: 'MongoDB', level: 75, color: 'from-green-700 to-green-800' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Docker', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'Postman', level: 70, color: 'from-orange-500 to-orange-600' },
        { name: 'Git', level: 95, color: 'from-red-500 to-red-600' },
        { name: 'Insomnia', level: 85, color: 'from-gray-800 to-black' },
       
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Minhas <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tecnologias e ferramentas que uso para criar soluções excepcionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;