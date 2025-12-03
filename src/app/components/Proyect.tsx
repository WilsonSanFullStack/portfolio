'use client'
import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaCalendar,
  FaMapMarkerAlt,
  FaCode,
  FaFilter,
} from "react-icons/fa";
import { SiFirebase, SiReact, SiTypescript, SiNodedotjs } from "react-icons/si";

const Proyect = () => {
  const [selectedType, setSelectedType] = useState<string>("todos");

  const proyectos: Proyectos = [
    {
      empresa: "autonomo",
      ubicacion: "Colombia",
      nombre: "GastosMotos",
      descripcion: `Aplicación móvil desarrollada con React Native + Expo + Firebase para registrar, visualizar y controlar todos los gastos relacionados con motos (mantenimiento, tanqueadas, repuestos, lavado, parqueadero y más).
  Está diseñada para ser rápida, simple y totalmente offline-first con sincronización automática cuando haya conexión.
  
  El proyecto inicia con un MVP claro y escalable:
  • Registro de gastos para una o varias motos
  • Historial completo por moto
  • Resumen mensual de gastos
  • Categorías personalizables
  • Uso de Firebase Firestore + Auth
  • App creada con Expo (plan gratuito)
  • Código en TypeScript con arquitectura modular
  
  En versiones futuras crecerá a:
  • Notificaciones automáticas de mantenimientos programados
  • Múltiples perfiles por usuario
  • Comparativas entre motos
  • Exportación PDF/Excel
  • Modo mecánico (para talleres)
  `,
      herramientas:
        "React Native, Expo, TypeScript, Firebase Auth, Firestore, Expo Router, AsyncStorage, Tailwindcss (NativeWind), Css-in-JS, Git, GitHub",
      fechaInicio: "Dic-2025",
      fechaFinal: "En desarrollo",
      link: "https://github.com/WilsonSanFullStack/GastosMotos",
      funcional:
        "MVP en desarrollo activo. El repositorio incluye instrucciones para clonar y correr el proyecto con Expo en cualquier dispositivo Android.",
    },
    {
      empresa: "autonomo",
      ubicacion: "Colombia",
      nombre: "appAgenda",
      descripcion: `es una aplicación de escritorio desarrollada con Electron + Vite para el manejo completo de ingresos, gastos y metas quincenales. La app automatiza cálculos, organiza información, presenta estadísticas claras y mejora notablemente el proceso de gestión financiero.
      El proyecto pasó por dos versiones:
      V1: funcional pero con código acoplado y difícil de mantener.
      V2 (final): refactorización total → estructura modular, lógica optimizada y UX mejorada Características destacadas:
      Flujo completo de cálculo de quincenas
      Gestión de descuentos, bonos y metas
      Persistencia de datos en local
      Interfaz limpia y rápida
      Modularización de procesos y helpers reutilizables`,
      herramientas:
        "Electron, Vite, React, Tailwindcss, Css, Html, JavaScript, Node.js, SQLite, Sequelize, Frame Motion, electron-Builder, eslint, Git, GitHub, dbdiagram.io",
      fechaInicio: "Feb-2024",
      fechaFinal: "Nov-2025",
      link: "https://github.com/WilsonSanFullStack/app-Agenda",
      funcional:
        "En el README del repositorio esta el .exe para ser descargado e instalado en cualquier sistema hasta el momento probado en windows",
    },
    {
      empresa: "freelance",
      ubicacion: "Colombia",
      nombre: "Cubo Rubik 3D",
      descripcion:
        "Se crea pagina web de un cubo rubik con explicacion de como armar el cubo rubik tanto para principiantes como para avanzados",
      herramientas:
        "TypeScript, Next.js, React, Tailwindcss, Css, Html, Vercel",
      fechaInicio: "30/09/2024",
      fechaFinal: "22/11/2024 aun en construcion 80%",
      link: "https://cubo-rubik-3-d.vercel.app/",
      funcional:
        "funciona el armado del cubo y se identifican las caras del cubo falta la teoria de como funcionan los algoritmos.  si desea ver el cubo navegar a  https://cubo-rubik-3-d.vercel.app/cubo",
    },
    {
      empresa: "freelance",
      ubicacion: "Colombia",
      nombre: "Agenda web",
      descripcion:
        "Pagina web con fin de guardar informacion de los clientes que frecuentas a cada usuario funcionalidades como registrarse, iniciar session, registro de clientes, registro de estafadores, eliminacion de clientes y estafadores, visualizacion de clientes, busqueda en tiempo real, filtro alfabetico, filtro por el origen del cliente, creacion de origenes de clientes ademas cada cliente se visualiza en una tarjeta a primera vista se ve informacion del cliente y al poner el mause sobre la tarjeta se muestran los comentarios del cliente",
      herramientas:
        "Firestore, React, TypeScript, Redux, Redux-Persist, Combine-Reducer, Auth-Firestore",
      fechaInicio: "05/08/2024",
      fechaFinal: "20/09/2024",
      link: "https://agendaweb-ryuksans-projects.vercel.app/",
      funcional:
        "funcional solucionando problemas con la persistencia de firestore algun consejo sobre ese tema al interno",
    },
    {
      empresa: "freelance",
      ubicacion: "colombia",
      nombre: "simbolos patrios",
      descripcion:
        "pagina web donde se muestran todos los simbolos patrios de colombia y una descripcion de cada uno de ellos",
      herramientas: "Next.js, TypeScript, Html, Css, Tailwindcss",
      fechaInicio: "06/06/2024",
      fechaFinal: "Pausado 15/07/2024",
      link: "https://colombia-wilson-sanchez.vercel.app/",
      funcional: "esta funcional aun faltan cosas por arreglar 50% listo",
    },
    {
      empresa: "freelance",
      ubicacion: "Colombia",
      nombre: "cubo rubik",
      descripcion:
        "Elaboracion de una pagina donde se muestra un cubo y cada cara con un color Rojo, Azul, Verde, Blanco, Amarillo, Naranja ademas de botones con los cuales se puede mover cada ficha del cubo que consta de 9 fichas por cara y un total de 54 piezas con estas el reto es armar el cubo",
      herramientas: "Next.js, TypeScript, Html, Css, React, Tailwindcss",
      fechaInicio: "10/05/2024",
      fechaFinal: "05/06/2024",
      link: "https://cubo-rubik.vercel.app/",
      funcional: "funcional a la fecha",
    },
    {
      empresa: "Practica",
      ubicacion: "Colombia",
      nombre: "Api-Rest NASA",
      descripcion:
        "Elaboracion de un frontend donde se muestran los diferentes objetos que estan cerca de la tierra o la orbitan y tambien se muestra una imagen diaria con su descripcion.",
      herramientas: "Next.js, TypeScript, Html, Css, React, Tailwindcss",
      fechaInicio: "22/03/2024",
      fechaFinal: "01/04/2024",
      link: "https://api-nasa-rust.vercel.app/",
      funcional: "funcional",
    },
    {
      empresa: "Porfolio",
      ubicacion: "Colombia",
      nombre: "Wilson Sanchez",
      descripcion:
        "se crea el portafolio personal en donde muestro mis conocimientos y estudios",
      herramientas: "TypeScript, Html, Css, React, Tailwindcss",
      fechaInicio: "17/12/23",
      fechaFinal: "5/01/24",
      link: "https://wilsonsanchez.vercel.app/",
      funcional: "funcional",
    },
    {
      empresa: "Colaboración",
      ubicacion: "Argentina",
      nombre: "Cotización y Revisión de Código Servidor",
      descripcion:
        "Realizo la creación de un formulario para una cotización donde se le pide al usuario la inserción de datos (valores mensuales) de un periodo de 12 meses al insertar los datos muestra una tabla donde le muestra el valor del producto y el ahorro en una determina cantidad de meses. Y se hace revisión de código del Black-End peticiones a API-Rest, verificación de errores, Inicialización de Base De Datos, verificación de la funcionalidad con insomnia",
      herramientas:
        "JavaScript, Html, Css, Boostrap, React, Vite, Json-Server, PostgreSQL, Sql, Insomnia",
      fechaInicio: "01/12/23",
      fechaFinal: "02/12/23",
      funcional: "Sin Data",
    },
    {
      empresa: "Prueba",
      ubicacion: "Desconocida",
      nombre: "Liga De Tenis",
      descripcion:
        "Se crea una página web donde realizamos registro e inicio de sesión para usuarios y administradores creación de torneos con sus respectivas propiedades se agregan funcionalidad como la eliminación, edición, vista o agregar tanto torneos como usuarios también la posibilidad de promover administradores o eliminarlos, vista general de torneos y usuarios.",
      herramientas:
        "JavaScript, Html, Css, Tailwindcss, Next.js, React, Sqlite, Prisma, Vercel, Git, GitHub",
      fechaInicio: "16/11/23",
      fechaFinal: "21/11/23",
      link: "https://liga-de-tenis-ryuksan.vercel.app/",
      funcional: "sin base de datos",
    },
    {
      empresa: "Colaboración",
      ubicacion: "Argentina",
      nombre: "Inicio de Sesion",
      descripcion:
        "Se crea un inicio de sesión con registro donde se envía la información al server para posteriormente guardar no sin antes hacer un HASH al password para evitar la fuga de información.",
      herramientas:
        "JavaScript, Html, Css, React, Node.js, Redux, PostgreSQL, Insomnia, Sequelize, Express, bcrypt, Tailwindcss",
      fechaInicio: "25/10/23",
      fechaFinal: "26/10/23",
      funcional: "sin data",
    },
    {
      empresa: "Colaboración",
      ubicacion: "Chile",
      nombre: "AppBarbers",
      descripcion:
        "Se crea una app para móvil proyecto en colaboración con gente de Chile, Uruguay, Argentina, Colombia en esta App tiene la funcionalidad de inicio de sesión registro, crear una reserva en una barbería, enviar notificaciones, recordatorios, seleccionar barbero, servicios, fecha del servicio, también el registro de las barberías y barberos.",
      herramientas:
        "JavaScript, ReactNative, Redux, Firestore, GoogleApis, Css, Html, Git, GitHub",
      fechaInicio: "01/11/23",
      fechaFinal: "15/11/23",
      link: "https://play.google.com/store/apps/details?id=br.com.starapp.appbarbercli&pcampaignid=web_share",
      funcional: "aplicacion disponible en la play store",
    },

    {
      empresa: "ZoomVirtuel",
      ubicacion: "Bucaramanga - Santander, Colombia",
      nombre: "Zoom Virtuel",
      descripcion: `Creación de una página web, de contabilidad para una empresa donde se hace el manejo del pago de cada trabajador también ventas de productos al personal de la empresa. Con esta página se espera reducir los tiempos de la realización de las cuentas y manejar un correcto historial de la contabilidad así también los empleados pueden ver el producido quincenal cuando deseen sin la necesidad de contactar a cartera. Además reducir las consultas por WhatsApp sobre el producido quincenal. Se realiza una API con PostgreSQL donde se hace el manejo de modelos con express para el correcto almacenamiento de la información en la base de datos. El Front-End se maneja con React.js en donde se crean diferentes componentes para la recolección de información sensible como los créditos de diferentes páginas y los datos personales de cada empleado, vistas para la parte administrativa la cual también está restringida según la clasificación de usuarios vista para la visualización del producido quincenal de cada empleado el cual lo puede ver realizando el respectivo registro a la página.`,
      herramientas:
        "JavaScript, Html, Css, React, Insomnia, Node.js, Clerk.js, Redux, Tailwindcss, Sequelize, PostgreSQL, Express, Git, GitHub, Redux-Persist, Vite, React-DatePicker",
      fechaInicio: "01/10/2023",
      fechaFinal: "15/12/2023",
      link: "https://www.zoomvirtuel.com/",
      funcional: "totalmente funcional",
    },
    {
      empresa: "Porfolio",
      ubicacion: "Colombia",
      nombre: "Wilson Sanchez",
      descripcion:
        "se crea el portafolio personal en donde muestro mis conocimientos y estudios",
      herramientas: "JavaScript, Html, Css, React, Tailwindcss",
      fechaInicio: "31/08/23",
      fechaFinal: "2/09/23",
      funcional: "retirado debido al nuevo portfolio",
    },
    {
      empresa: "Nomand Locals",
      ubicacion: "Costa Rica",
      nombre: "Nomand Locals",
      descripcion: `Creación de una página web, de encuentros entre dos o más personas las cuales se pueden encontrar en una actividad por los filtros creados por geolocalización y los diferentes tipos de actividades disponibles para crear. Además pueden chatear entre las personas que estén en una misma actividad tanto en el chat general como en un chat privado, también pueden realizar review de cada una de las actividades a las cuales están inscriptas o hacer el bloqueo de cada una de estas actividades si esta contiene elementos ofensivos o viola los derechos de autor igualmente para los usuarios. Igualmente puede aplicar filtros personalizados para encontrar actividades en otras zonas geológicas. Se crea una parte administrativa donde se hace el manejo de los usuarios de la página la eliminación, modificación, o creación de administradores o estándar, igualmente para las actividades creadas.`,
      herramientas:
        "JavaScript, Html, Css, React, Redux, Node.js, Express, Sequelize, PostgreSQL, Git, GitHub, Trello, Slack, Meet, Render, Netlify, Clerk, Tailwindcss, Leaftlet, Redux-Persist, Socke.io, Star-rating, SweetAlert, Vite, GoogleApis, Nodemailer",
      fechaInicio: "28/07/2023",
      fechaFinal: "31/08/20223",
      funcional:
        "sin noticias por parte de esta empresa por lo cual no se si este funcional",
    },
    {
      empresa: "HENRY",
      ubicacion: "Argentina",
      nombre: "Proyecto Invidual",
      descripcion: `Página web donde se consulta a una API Rest externa todos los países y se guardan en la API local a esta se le hacen filtros para manejar las consultas estos filtros son por: continente, alfabéticamente, población, actividad. Creación de actividades para uno o varios países con parámetros como: nombre, dificultad, duración, estación, países. Creación de un página de un mínimo de 1 país por página y un máximo de 10 países por página. Creación de un botón de búsqueda el cual funciona escribiendo cualquier letra de un país. Creación de un detallado por país donde se muestra toda la información de un país como: id, nombre, continente, capital, subregión, área en (km cuadrados) y las actividades asociadas a ese país.`,
      herramientas:
        "JavaScript, Html, Css, React, Redux, Vite, Node.js, Express, Sequelize, PostgreSQL, Json-server, Api-Rest, jest",
      fechaInicio: "03/06/23",
      fechaFinal: "24/06/23",
      funcional: "sin base de datos",
    },
  ];

  // Extraer tecnologías únicas
  const herramientas = proyectos.map((x) => {
    return x.herramientas
      .split(", ")
      .map((h) => h.trim())
      .sort((a, b) => a.localeCompare(b));
  });

  const tecnologias: string[] = [];
  for (let index of herramientas) {
    for (let y of index) {
      const ys = y.toLocaleLowerCase();
      if (!tecnologias.includes(ys) && ys !== "") {
        tecnologias.push(ys);
      }
    }
  }
  tecnologias.sort();

  // Filtrar proyectos
  const filteredProjects =
    selectedType === "todos"
      ? proyectos
      : proyectos.filter((p) => p.empresa === selectedType);

  // Tecnologías populares con iconos
  const popularTechs = [
    { name: "react", icon: <SiReact className="text-blue-500" /> },
    { name: "typescript", icon: <SiTypescript className="text-blue-600" /> },
    {
      name: "next.js",
      icon: <div className="text-black dark:text-white">N</div>,
    },
    { name: "node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "tailwindcss", icon: <div className="text-cyan-500">T</div> },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
          <FaCode className="text-white text-lg" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Proyectos
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-1"></div>
        </div>
      </div>

      {/* Tecnologías Populares */}
      <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <FaCode className="text-orange-500" />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Tecnologías Dominadas
          </h2>
        </div>

        {/* Popular Tech Icons */}
        <div className="flex flex-wrap gap-4 mb-6">
          {popularTechs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              {tech.icon}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Todas las tecnologías */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent pointer-events-none rounded-xl"></div>
          <div className="max-h-60 overflow-y-auto pr-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tecnologias.map((tech, index) => (
                <div
                  key={tech}
                  className="px-3 py-2 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {index + 1}. {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedType("todos")}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            selectedType === "todos"
              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <FaFilter className="inline mr-2" />
          Todos ({proyectos.length})
        </button>
        {[
          "autonomo",
          "freelance",
          "colaboración",
          "prueba",
          "practica",
          "porfolio",
        ].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedType === type
                ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de Proyectos */}
      <div className="space-y-6">
        {filteredProjects.map((proyect, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full -translate-y-32 translate-x-32"></div>
            </div>

            <div className="relative p-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-200 dark:border-orange-800 mb-2">
                    <span className="text-xs font-medium text-orange-600 dark:text-orange-400 uppercase">
                      {proyect.empresa}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {proyect.nombre}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                    <FaMapMarkerAlt />
                    <span>{proyect.ubicacion}</span>
                  </div>
                </div>

                {proyect.link && (
                  <a
                    href={proyect.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt />
                    <span>Ver Proyecto</span>
                  </a>
                )}
              </div>

              {/* Descripción */}
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {proyect.descripcion}
                </p>
              </div>

              {/* Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center">
                    <FaCalendar className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Inicio
                    </div>
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      {proyect.fechaInicio}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                    <FaCalendar className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Finalización
                    </div>
                    <div
                      className={`font-semibold ${
                        proyect.fechaFinal.includes("En desarrollo") ||
                        proyect.fechaFinal.includes("desarrollo")
                          ? "text-orange-600 dark:text-orange-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {proyect.fechaFinal}
                    </div>
                  </div>
                </div>
              </div>

              {/* Estado y Herramientas */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Estado del Proyecto
                  </div>
                  <div className="px-3 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <span className="text-green-700 dark:text-green-400 font-medium">
                      {proyect.funcional}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tecnologías Utilizadas
                  </div>
                  <div className="px-3 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <span className="text-blue-700 dark:text-blue-400">
                      {proyect.herramientas}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyect;
