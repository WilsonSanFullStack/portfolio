import React from "react";
import { Proyectos } from "../types/proyectos";
const Proyect = () => {
  const proyectos: Proyectos = [
    {
      empresa: "Porfolio",
      ubicacion: "Colombia",
      nombre: "Wilson Sanchez",
      descripcion:
        "se crea el portafolio personal en donde muestro mis conocimientos y estudios",
      herramientas: "TypeScript, Html, Css, React, Tailwind",
      fechaInicio: "17/12/23",
      fechaFinal: "5/01/24",
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
    },
    {
      empresa: "Prueba",
      ubicacion: "Desconocida",
      nombre: "Liga De Tenis",
      descripcion:
        "Se crea una página web donde realizamos registro e inicio de sesión para usuarios y administradores creación de torneos con sus respectivas propiedades se agregan funcionalidad como la eliminación, edición, vista o agregar tanto torneos como usuarios también la posibilidad de promover administradores o eliminarlos, vista general de torneos y usuarios.",
      herramientas:
        "JavaScript, Html, Css, Tailwind, Next.js, React.js, Sqlite, Prisma, Vercel, Git, GitHub",
      fechaInicio: "16/11/23",
      fechaFinal: "21/11/23",
    },
    {
      empresa: "Colaboración",
      ubicacion: "Argentina",
      nombre: "Inicio de Sesion",
      descripcion:
        "Se crea un inicio de sesión con registro donde se envía la información al server para posteriormente guardar no sin antes hacer un HASH al password para evitar la fuga de información.",
      herramientas:
        "JavaScript, Html, Css, React.js, Node.js, Redux, PostgreSQL, Insomnia, Sequelize, Express, bcrypt, Tailwind",
      fechaInicio: "25/10/23",
      fechaFinal: "26/10/23",
    },
    {
      empresa: "Colaboración",
      ubicacion: "Chile",
      nombre: "AppBarbers",
      descripcion:
        "Se crea una app para móvil proyecto en colaboración con gente de Chile, Uruguay, Argentina, Colombia en esta App tiene la funcionalidad de inicio de sesión registro, crear una reserva en una barbería, enviar notificaciones, recordatorios, seleccionar barbero, servicios, fecha del servicio, también el registro de las barberías y barberos.",
      herramientas:
        "JavaScript, ReactNative, Redux, FireBase, GoogleApis, Css, Html, Git, GitHub",
      fechaInicio: "01/11/23",
      fechaFinal: "15/11/23",
    },

    {
      empresa: "ZoomVirtuel",
      ubicacion: "Bucaramanga - Santander, Colombia",
      nombre: "Zoom Virtuel",
      descripcion: `Creación de una página web, de contabilidad para una empresa donde se hace el manejo del pago de cada trabajador también ventas de productos al personal de la empresa. Con esta página se espera reducir los tiempos de la realización de las cuentas y manejar un correcto historial de la contabilidad así también los empleados pueden ver el producido quincenal cuando deseen sin la necesidad de contactar a cartera. Además reducir las consultas por WhatsApp sobre el producido quincenal. Se realiza una API con PostgreSQL donde se hace el manejo de modelos con express para el correcto almacenamiento de la información en la base de datos. El Front-End se maneja con React.js en donde se crean diferentes componentes para la recolección de información sensible como los créditos de diferentes páginas y los datos personales de cada empleado, vistas para la parte administrativa la cual también está restringida según la clasificación de usuarios vista para la visualización del producido quincenal de cada empleado el cual lo puede ver realizando el respectivo registro a la página.`,
      herramientas:
        "JavaScript, Html, Css, Tailwind, React.js, Insomnia, Node.js, Clerk.js, Redux, Tailwind, Sequelize, PostgreSQL, Express, Git, GitHub, Redux-Persist, Vite, React-DatePicker",
      fechaInicio: "01/10/2023",
      fechaFinal: "15/12/2023",
    },
    {
      empresa: "Porfolio",
      ubicacion: "Colombia",
      nombre: "Wilson Sanchez",
      descripcion:
        "se crea el portafolio personal en donde muestro mis conocimientos y estudios",
      herramientas: "JavaScript, Html, Css, React, Tailwind",
      fechaInicio: "31/08/23",
      fechaFinal: "2/09/23",
    },
    {
      empresa: "Nomand Locals",
      ubicacion: "Costa Rica",
      nombre: "Nomand Locals",
      descripcion: `Creación de una página web, de encuentros entre dos o más personas las cuales se pueden encontrar en una actividad por los filtros creados por geolocalización y los diferentes tipos de actividades disponibles para crear. Además pueden chatear entre las personas que estén en una misma actividad tanto en el chat general como en un chat privado, también pueden realizar review de cada una de las actividades a las cuales están inscriptas o hacer el bloqueo de cada una de estas actividades si esta contiene elementos ofensivos o viola los derechos de autor igualmente para los usuarios. Igualmente puede aplicar filtros personalizados para encontrar actividades en otras zonas geológicas. Se crea una parte administrativa donde se hace el manejo de los usuarios de la página la eliminación, modificación, o creación de administradores o estándar, igualmente para las actividades creadas.`,
      herramientas:
        "JavaScript, Html, Css,  React.js, Redux, Node.js, Express, Sequelize, PostgreSQL, Git, GitHub, Trello, Slack, Meet, Render, Netlify, Clerk, Tailwind, Leaftlet, Redux-Persist, Socke.io, Star-rating, SweetAlert, Vite, GoogleApis, Nodemailer,  ",
      fechaInicio: "28/07/2023",
      fechaFinal: "31/08/20223",
    },
    {
      empresa: "HENRY",
      ubicacion: "Argentina",
      nombre: "Proyecto Invidual",
      descripcion: `Página web donde se consulta a una API Rest externa todos los países y se guardan en la API local a esta se le hacen filtros para manejar las consultas estos filtros son por: continente, alfabéticamente, población, actividad. Creación de actividades para uno o varios países con parámetros como: nombre, dificultad, duración, estación, países. Creación de un página de un mínimo de 1 país por página y un máximo de 10 países por página. Creación de un botón de búsqueda el cual funciona escribiendo cualquier letra de un país. Creación de un detallado por país donde se muestra toda la información de un país como: id, nombre, continente, capital, subregión, área en (km cuadrados) y las actividades asociadas a ese país.`,
      herramientas:
        "JavaScript, Html, Css, React.js, Redux, Vite, Node.js, Express, Sequelize, PostgreSQL, Json-server, Api-Rest, jest",
      fechaInicio: "03/06/23",
      fechaFinal: "24/06/23",
    },
  ];
  return (
    <div className="m-4">
      <h1 className="uppercase my-2 text-center font-bold text-2xl">
        Proyectos
      </h1>
      <section>
        {proyectos.map((proyect, index) => {
          return (
            <section key={index + 1} className="m-2 p-4 bg-slate-800">
              <h1 className="text-xl font-bold text-center">
                {proyect.nombre}
              </h1>
              <div className=" grid grid-cols-2 text-center font-bold my-2">
                <h1>Empresa: </h1> <h1>{proyect.empresa}</h1>
                <h1>Ubicación: </h1> <h1>{proyect.ubicacion}</h1>
              </div>
              <p className="text-justify">{proyect.descripcion}</p>
              <section className="grid grid-cols-2 my-2">
                <h1>Herramientas: </h1>
                <h2 className="font-bold text-blue-500">
                  {proyect.herramientas}
                </h2>
              </section>

              <div className=" grid grid-cols-2 text-center font-bold my-2">
                <h3>Proyecto Iniciado El: </h3>
                <h3 className="font-bold text-green-500">
                  {proyect.fechaInicio}
                </h3>
                <h3>Proyecto Finalizado El: </h3>
                <h3 className="font-bold text-red-500">{proyect.fechaFinal}</h3>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Proyect;
