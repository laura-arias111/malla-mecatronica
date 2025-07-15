
window.mallaData = [
  { id: "calculo1", nombre: "Cálculo Diferencial", semestre: 1, prerrequisitos: [] },
  { id: "programacion", nombre: "Programación de Computadores", semestre: 1, prerrequisitos: [] },
  { id: "algebra", nombre: "Álgebra Lineal", semestre: 1, prerrequisitos: [] },
  { id: "fisica1", nombre: "Fundamentos de Mecánica", semestre: 2, prerrequisitos: ["calculo1"] },
  { id: "calculo2", nombre: "Cálculo Integral", semestre: 2, prerrequisitos: ["calculo1"] },
  { id: "estructuras", nombre: "Estructura de Datos", semestre: 3, prerrequisitos: ["programacion"] },
  { id: "calculo3", nombre: "Cálculo Varias Variables", semestre: 3, prerrequisitos: ["calculo2"] },
  { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", semestre: 4, prerrequisitos: ["calculo3"] },
  { id: "pobj", nombre: "Programación Orientada a Objetos", semestre: 4, prerrequisitos: ["estructuras"] },
  { id: "control", nombre: "Control", semestre: 5, prerrequisitos: ["ecuaciones"] },
  { id: "robotica", nombre: "Robótica", semestre: 6, prerrequisitos: ["control"] },
  { id: "taller", nombre: "Taller de Proyectos Interdisciplinarios", semestre: 7, prerrequisitos: ["robotica"] },
  { id: "trabajo_grado", nombre: "Trabajo de Grado", semestre: 10, prerrequisitos: ["taller"] }
];
