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

type education = {
  escuela: string;
  inicio: string;
  final: string;
  titulo: string;
}

type Educations = education [];

export { Proyectos, Proyecto, education, Educations };
