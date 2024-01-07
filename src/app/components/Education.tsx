import React from "react";
import { Educations } from "../types/proyectos";

const Education = () => {
  const education: Educations = [
    {
      escuela: "Instituto Colombiano Para La Evaluacion De La Educacion ICFES",
      inicio: "Diciembre Del 2013",
      final: "Abril Del 2014 Bucaramanga, Santander",
      titulo: "Bachiller",
    },
    {
      escuela: "Boot Camp HENRY FULL STACK DEVELOPER",
      inicio: "10 De Abril Del 2023",
      final: "01 De Agosto Del 2023",
      titulo: "Tecnico Practico/Teorico de 700 horas intensivo",
    },
  ];
  return (
    <div className="m-4">
      <h1 className="uppercase my-2 text-center font-bold text-2xl">
        ESTUDIOS
      </h1>
      {education?.length >= 1 &&
        education?.map((educ, index) => {
          return (
            <div key={index+1}  className="m-2 p-4 bg-slate-800">
              <section  className="grid grid-cols-2 items-center border-b-2 border-slate-500 m-1">
                <h1>Titulo: </h1>
                <h2 className=" text-left font-bold text-blue-500 uppercase text-center">{educ.titulo}</h2>
              </section>
              <section  className="grid grid-cols-2 items-center border-b-2 border-slate-500 m-1">
                <h1>Escuela: </h1>
                <h2 className=" text-left">{educ.escuela}</h2>
              </section>
              <section  className="grid grid-cols-2 items-center border-b-2 border-slate-500 m-1">
                <h1>Inicio: </h1>
                <h2 className=" text-left font-bold text-green-500">{educ.inicio}</h2>
              </section>
              <section  className="grid grid-cols-2 items-center border-b-2 border-slate-500 m-1">
                <h1>Final: </h1>
                <h2 className=" text-left font-bold text-red-500">{educ.final}</h2>
              </section>
            </div>
          );
        })}
    </div>
  );
};

export default Education;
