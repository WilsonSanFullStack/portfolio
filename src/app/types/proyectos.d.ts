type Proyecto = {
  empresa: string;
  ubicacion: string;
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFinal: string;
};

type Proyectos = Proyecto[];

export { Proyecto, Proyectos };
