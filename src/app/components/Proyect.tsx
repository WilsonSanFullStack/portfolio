import React from "react";
import { Proyectos } from "../types/proyectos";
const Proyect = () => {
  const proyectos: Proyectos = [
    {
      empresa: 'Porfolio',
      ubicacion: 'Colombia',
      nombre: 'Wilson Sanchez',
      descripcion: 'se crea el portafolio personal en donde muestro mis conocimientos y estudios',
      herramientas: 'TypeScript, Html, Css, React, Tailwind',
      fechaInicio: '17/12/23',
      fechaFinal: '5/01/24'
    },
    {
      empresa: "Colaboracion",
      ubicacion: "Argentina",
      nombre: "Cotizacion y Revision de Codigo Servidor",
      descripcion:
        "Realizo la creacion de un formulario para una cotizacion donde se le pide al usuario la insercion de datos (valores mensuales) de un periodo de 12 meses al insertar los datos muestra una tabla donde le muestra el valor del producto y el ahorro en una determina cantidad de meses. y se hace revision de codigo del Back-End peticiones a Api-Rest, verificacion de errores, Inicializacion de Base De Datos, verificacion de la funcionalidad con insomnia",
      herramientas:
        "JavaScript, Html, Css, Boostrap, React, Vite, Json-Server, PostgreSQL, Sql, Insomnia",
      fechaInicio: "01/12/23",
      fechaFinal: "02/12/23",
    },
    {
      empresa: 'Prueba',
      ubicacion: 'Desconocida',
      nombre: 'Liga De Tenis',
      descripcion: 'Se crea una pagina web donde realizamos registro e inicio de sesion para usuarios y administradores creacion de torneos con sus respectivas propiedades se agregan funcionalidad como la eliminacion, editicon, vista o agregar tanto torneos como usuarios tambien la posibilidad de promover administradores o eliminarlos, vista general de torneos y usuarios',
      herramientas: 'JavaScript, Html, Css, Tailwind, Next.js, React.js, Sqlite, Prisma, Vercel, Git, GitHub',
      fechaInicio: '16/11/23',
      fechaFinal: '21/11/23'
    },
    {
      empresa: "Colaboracion",
      ubicacion: "Argentina",
      nombre: "Inicio de Sesion",
      descripcion: "Se crea un inicio de sesion con registro donde se envia la informacion al server para posteriormente guardar no sin antes hacer un HASH al password para evitar el fuga de informacion.",
      herramientas:
        "JavaScript, Html, Css, React.js, Node.js, Redux, PostgreSQL, Insomnia, Sequelize, Express, bcrypt, Tailwind",
      fechaInicio: "25/10/23",
      fechaFinal: "26/10/23",
    },
    {
      empresa: 'Colaboracion',
      ubicacion: 'Chile',
      nombre: 'AppBarbers',
      descripcion: 'Se crea una app para movil proyecto en colaboracion con gente de Chile, Uruguay, Argentina, Colombia en esta App tiene la funcionalidad de inicio de sesion regisro, crear una reserva en una barberia, enviar notificaciones, recordatorios, seleccionar barbero, servicios, fecha del servicio, tambien el registro de las barberias y barberos',
      herramientas: 'JavaScript, ReactNative, Redux, FireBase, GoogleApis, Css, Html, Git, GitHub',
      fechaInicio: '01/11/23',
      fechaFinal: '15/11/23'
    },

    {
      empresa: "ZoomVirtuel",
      ubicacion: "Bucaramanga - Santander, Colombia",
      nombre: "Zoom Virtuel",
      descripcion: `creacion de una pagina web, de contabilidad para una empresa donde se hace el manejo
      del pagode cada trabajador tambien ventas de productos al personal de la empresa.
      Con esta pagina se espera reducir los tiempo de la realizacion de las cuentas y manejar un correcto
      historial de la contabilidad asi tambien los empleados pueden ver el producido quincenal cuando deseen
      sin la necesidad de contactar a cartera. Ademas reducir las consultas por whatsapp sobre el producido
      quincenal.
      Se realiza una api con postgresql donde se hace el manejo de modelos con express para el correcto
      almacenamiento de la informacion en la base de datos.
      El front-End se maneja con React.js en donde se crean diferentes componentes para la recoleccion de
      informacion sensible como los creditos de diferentes paginas y los datos personales de cada empleado,
      vistas para la parte administrativa la cual tambien esta restringida segun la clasificacion de usuarios
      vista para la visualizacion del producido quincenal de cada empleado el cual lo puede ver realizando
      el respectivo registro a la pagina.`,
      herramientas:
        "JavaScript, Html, Css, Tailwind, React.js, Insomnia, Node.js, Clerk.js, Redux, Tailwind, Sequelize, PostgreSQL, Express, Git, GitHub, Redux-Persist, Vite, React-DatePicker",
      fechaInicio: "01/10/2023",
      fechaFinal: "15/12/2023",
    },
    {
      empresa: 'Porfolio',
      ubicacion: 'Colombia',
      nombre: 'Wilson Sanchez',
      descripcion: 'se crea el portafolio personal en donde muestro mis conocimientos y estudios',
      herramientas: 'JavaScript, Html, Css, React, Tailwind',
      fechaInicio: '31/08/23',
      fechaFinal: '2/09/23'
    },
    {
      empresa: "Nomand Locas",
      ubicacion: "Costa Rica",
      nombre: "Nomad Locas",
      descripcion: `creacion de una pagina web, de encunetos entre dos o mas personas las cuales se
      pueden encontrar en una actividad por los filtros creados por geolocalizacion y los diferentes
      tipos de actividades disponibles para crear. Ademas pueden chatear entre las personas que esten
      en una misma actividad tanto en el chat general como en un chat privado, tembien pueden realizar
      review de cada una de las actividad a las cuales estan inscriptas o hacer el baneo de cada una de
      estas actividades si esta contiene elementos ofensivos o viola los derechos de autor igualmente para
      los usuarios. Igualmente puede aplicar filtros personalizados para encontrar actividades en otras
      zonas geologicas. Se crea una parte administrativa donde se hace el manejo de los usuarios de la 
      pagina la eliminacion, modificacion, o creacion de administradores o estandar, igualmente para las 
      actividades creadas.`,
      herramientas:
        "JavaScript, Html, Css,  React.js, Redux, Node.js, Express, Sequelize, PostgreSQL, Git, GitHub, Trello, Slack, Meet, Render, Netlify, Clerk, Tailwind, Leaftlet, Redux-Persist, Socke.io, Star-rating, SweetAlert, Vite, GoogleApis, Nodemailer,  ",
      fechaInicio: "28/07/2023",
      fechaFinal: "31/08/20223",
    },
    {
      empresa: "HENRY",
      ubicacion: "Argentina",
      nombre: "Proyecto Invidual",
      descripcion: `pagina web donde se consulta a una Api Rest externa todos los paises y se guardan en la
      Api local a esta se le hacen filtros para manejar las consultas estos filtros son por: continente,
      alfabeticamente, poblacion, actividad. 
      Creacion de actividades para uno o varios paises con parametros como: nombre, dificultad, duracion,
      estacion, paises.
      Creacion de un pagina de un minimo de 1 pais por pagina y un maximo de 10 paises por pagina.
      Creacion de un boton de busqueda el cual funciona escribiendo cualquier letra de un pais.
      Creacion de un detallado por pais donde se muestra toda la informacion de un pais como:
      el id, nombre, continente, capital, subregion, area en (km duadrados) y 
      las actividades asosiadas a ese pais.`,
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
                <h1>Ubicacion: </h1> <h1>{proyect.ubicacion}</h1>
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
