import React from "react";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const About = () => {
  const qualities = [
    {
      icon: <FaCode className="text-xl" />,
      title: "Desarrollo Full Stack",
      description: "Experiencia completa en frontend y backend",
    },
    {
      icon: <GiBrain className="text-xl" />,
      title: "Resolución de Problemas",
      description: "Enfoque creativo para desafíos complejos",
    },
    {
      icon: <FaLightbulb className="text-xl" />,
      title: "Innovación",
      description: "Siempre explorando nuevas tecnologías",
    },
    {
      icon: <FaRocket className="text-xl" />,
      title: "Entrega Rápida",
      description: "Desarrollo ágil y eficiente",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">WS</span>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Sobre Mi
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
        ¡Hola! Soy <span className="font-semibold text-blue-600 dark:text-blue-400">Wilson Sanchez</span>, 
        un desarrollador Full Stack apasionado por crear experiencias digitales que marquen la diferencia. 
        Me especializo en transformar ideas complejas en soluciones elegantes y funcionales.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Con experiencia en tecnologías modernas como <span className="font-semibold text-purple-600 dark:text-purple-400">React.js</span>, 
        <span className="font-semibold text-blue-600 dark:text-blue-400"> TypeScript</span>, y 
        <span className="font-semibold text-green-600 dark:text-green-400"> Node.js</span>, 
        disfruto cada etapa del desarrollo, desde el diseño de interfaces intuitivas hasta la 
        construcción de sistemas robustos y escalables.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Mi enfoque combina <span className="font-semibold">atención al detalle</span>, 
        <span className="font-semibold"> creatividad</span> y 
        <span className="font-semibold"> pasión por el código limpio</span>. 
        Creo que la mejor solución es aquella que no solo funciona, sino que también inspira.
      </p>

      {/* Qualities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {qualities.map((quality, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white">{quality.icon}</span>
            </div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-1">
              {quality.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {quality.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;