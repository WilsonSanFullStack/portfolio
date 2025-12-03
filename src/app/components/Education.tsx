import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  const education: education[] = [
    {
      escuela: "Instituto Colombiano Para La Evaluación De La Educación ICFES",
      inicio: "Diciembre 2013",
      final: "Abril 2014 • Bucaramanga, Santander",
      titulo: "Bachiller Académico",
    },
    {
      escuela: "Boot Camp HENRY FULL STACK DEVELOPER",
      inicio: "10 de Abril 2023",
      final: "01 de Agosto 2023",
      titulo: "TÉCNICO PRÁCTICO/TEÓRICO • 700 HORAS INTENSIVAS",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
          <FaGraduationCap className="text-white text-lg" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Educación
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-1"></div>
        </div>
      </div>

      <div className="space-y-6">
        {education.map((educ, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-500"></div>

            {/* Title Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-sm mb-4">
              <FaGraduationCap />
              <span>{educ.titulo}</span>
            </div>

            {/* School Info */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {educ.escuela}
              </h3>
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
                  <FaCalendarAlt className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Inicio</div>
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {educ.inicio}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Finalización</div>
                  <div className="font-semibold text-cyan-600 dark:text-cyan-400">
                    {educ.final}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Progreso del programa</span>
                <span className="font-semibold text-emerald-600">100%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
          <span className="font-semibold">Continúo aprendiendo</span> nuevas tecnologías y 
          mejores prácticas a través de cursos online, documentación y proyectos personales.
        </p>
      </div>
    </div>
  );
};

export default Education;