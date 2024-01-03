type Proyecto = {
  empresa: string;
  ubicacion: string;
  nombre: string;
  descripcion: string;
  herramientas: string;
  fechaInicio: string;
  fechaFinal: string;
};

type Proyectos = Proyecto[];

export { Proyecto, Proyectos };
