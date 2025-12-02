const Proyect = () => {
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
        "Electron, Vite, React, Tailwindcss, Css, Html, JavaScript, Node.js, SQLite, Sequelize, Frame Motion, electron-Builder, eslint, Git, GitHub, dbduagran.io",
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
      fechaFinal: "20/09/2024 pausado",
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
  return (
    <div className="m-4">
      <h1 className="uppercase my-2 text-center font-bold text-2xl">
        Proyectos
      </h1>
      <h1 className="text-center uppercase font-bold">Tecnologias:</h1>
      <section className="grid grid-cols-3 m-2 text-center font-bold uppercase bg-slate-800">
        {tecnologias &&
          tecnologias.map((x) => {
            return <div key={x}>{x}</div>;
          })}
      </section>
      <section>
        {proyectos.map((proyect, index) => {
          return (
            <section key={index + 1} className="m-2 p-4 bg-slate-800">
              <h1 className="text-xl font-bold text-center uppercase">
                {proyect.nombre}
              </h1>
              <div className=" grid grid-cols-2 text-center font-bold my-2 uppercase">
                <h1>Empresa: </h1> <h1>{proyect.empresa}</h1>
                <h1>Ubicación: </h1> <h1>{proyect.ubicacion}</h1>
              </div>
              <p className="text-justify">{proyect.descripcion}</p>
              {/* <section className="grid grid-cols-2 my-2">
                <h1>Herramientas: </h1>
                <h2 className="font-bold text-blue-500">
                  {proyect.herramientas}
                </h2>
              </section>*/}

              <div className=" grid grid-cols-2 text-center font-bold my-2">
                <h3>Proyecto Iniciado El: </h3>
                <h3 className="font-bold text-green-500">
                  {proyect.fechaInicio}
                </h3>
                <h3>Proyecto Finalizado El: </h3>
                <h3 className="font-bold text-red-500">{proyect.fechaFinal}</h3>
                <h1>Funcionalidad:</h1>
                <h1 className="font-bold text-orange-500 uppercase">
                  {proyect.funcional}
                </h1>
              </div>
              {proyect.link && (
                <div className="flex items-center justify-center">
                  <button className="border-2 border-slate-500 m-1 p-1 rounded-lg px-2 text-blue-500 font-bold hover:text-green-500 active:text-white">
                    <a href={proyect.link} target="_blank">
                      Ver
                    </a>
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Proyect;
