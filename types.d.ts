declare type Proyecto = {
  empresa: string;
  ubicacion: string;
  nombre: string;
  descripcion: string;
  herramientas: string;
  fechaInicio: string;
  fechaFinal: string;
  link?: string;
  funcional: string;
};

declare type Proyectos = Proyecto[];

declare type education = {
  escuela: string;
  inicio: string;
  final: string;
  titulo: string;
}

declare type Educations = education [];


