import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'jefferson.senac1@yahoo.com',
      link: 'mailto:jefferson.senac1@yahoo.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      info: 'Disponível via WhatsApp',
      link: 'https://api.whatsapp.com/send?phone=5512988350310'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      info: 'São Paulo, Brasil',
      link: 'https://maps.google.com/?q=São+Paulo,+Brasil'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/DevNewCome',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jefferson-b-lira/',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Vamos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conversar</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
            </p>
          </div>

          <div className="flex justify-center gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="flex flex-wrap gap-6 w-36">

                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-96 items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-blue-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.info}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:shadow-xl hover:-translate-y-1`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <h4 className="font-semibold text-green-800 dark:text-green-300">
                    Disponível para novos projetos
                  </h4>
                </div>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Atualmente aceito freelances e oportunidades full-time. 
                  Respondo em até 24 horas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;