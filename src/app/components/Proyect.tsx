import React from "react";
import { Proyecto, Proyectos } from "../types/proyectos";
const Proyect = () => {
  const proyectos:Proyectos = [
    {
      empresa: 'ZoomVirtuel',
      ubicacion: 'Bucaramanga - Santander, Colombia',
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
      fechaInicio: "01/10/2023",
      fechaFinal: "15/12/2023",

    },
    {
      empresa: 'Nomand Locas',
      ubicacion: 'Costa Rica',
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
      fechaInicio: "28/07/2023",
      fechaFinal: "31/08/20223",
    },
    {
      empresa: 'HENRY',
      ubicacion: 'Argentina',
      nombre: "Proyecto Invidual",
      descripcion: `pagina web donde se consulta a una Api Rest externa todos los paises y se guardan en la
      Api local a esta se le hacen filtros para manejar las consultas estos filtros son por: continente,
      alfabeticamente, poblacion, `,
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
              <div className=" grid grid-cols-2 text-center font-bold my-2">
                <h3>Proyecto Iniciado El: </h3>
                <h3>{proyect.fechaInicio}</h3>
                <h3>Proyecto Finalizado El: </h3>
                <h3>{proyect.fechaFinal}</h3>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Proyect;
