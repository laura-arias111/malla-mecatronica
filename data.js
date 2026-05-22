window.mallaData = [
  // SEMESTRE 1 (Nivelación y Fundamentos)
  { id: "matematicas_basicas", nombre: "Matemáticas Básicas", semestre: 1, prerrequisitos: [] },
  { id: "programacion", nombre: "Programación de Computadores", semestre: 1, prerrequisitos: [] },
  { id: "taller_ingenieria", nombre: "Taller de Ingeniería Electrónica", semestre: 1, prerrequisitos: [] },
  { id: "desarrollo_sostenible", nombre: "Ingeniería y Desarrollo Sostenible", semestre: 1, prerrequisitos: [] },
  { id: "dibujo_basico", nombre: "Dibujo Básico", semestre: 1, prerrequisitos: [] },
  { id: "ingles1", nombre: "Inglés I", semestre: 1, prerrequisitos: [] },

  // SEMESTRE 2
  { id: "calculo_diferencial", nombre: "Cálculo Diferencial", semestre: 2, prerrequisitos: ["matematicas_basicas"] },
  { id: "algebra_lineal", nombre: "Álgebra Lineal", semestre: 2, prerrequisitos: ["matematicas_basicas"] },
  { id: "tecnologia_mecanica", nombre: "Tecnología Mecánica Básica", semestre: 2, prerrequisitos: ["dibujo_basico", "desarrollo_sostenible"] },
  { id: "quimica", nombre: "Principios de Química", semestre: 2, prerrequisitos: [] },
  { id: "ingles2", nombre: "Inglés II", semestre: 2, prerrequisitos: ["ingles1"] },

  // SEMESTRE 3
  { id: "calculo_integral", nombre: "Cálculo Integral", semestre: 3, prerrequisitos: ["calculo_diferencial"] },
  { id: "fund_mecanica", nombre: "Fundamentos de Mecánica", semestre: 3, prerrequisitos: ["calculo_diferencial"] },
  { id: "circuitos", nombre: "Circuitos Eléctricos I", semestre: 3, prerrequisitos: ["taller_ingenieria", "algebra_lineal"] },
  { id: "probabilidad", nombre: "Probabilidad y Estadística Fundamental", semestre: 3, prerrequisitos: ["calculo_diferencial"] },
  { id: "ingles3", nombre: "Inglés III", semestre: 3, prerrequisitos: ["ingles2"] },

  // SEMESTRE 4
  { id: "calculo_varias", nombre: "Cálculo Varias Variables", semestre: 4, prerrequisitos: ["calculo_integral", "algebra_lineal"] },
  { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", semestre: 4, prerrequisitos: ["calculo_integral", "algebra_lineal"] },
  { id: "electricidad_magnetismo", nombre: "Fund. Electricidad y Magnetismo", semestre: 4, prerrequisitos: ["fund_mecanica", "calculo_integral"] },
  { id: "estatica", nombre: "Principios de Estática", semestre: 4, prerrequisitos: ["algebra_lineal", "fund_mecanica"] },
  { id: "ingles4", nombre: "Inglés IV", semestre: 4, prerrequisitos: ["ingles3"] },

  // SEMESTRE 5
  { id: "variable_compleja", nombre: "Variable Compleja", semestre: 5, prerrequisitos: ["ecuaciones"] },
  { id: "poo", nombre: "Programación Orientada a Objetos", semestre: 5, prerrequisitos: ["programacion"] },
  { id: "electronica_analoga", nombre: "Electrónica Análoga I", semestre: 5, prerrequisitos: ["circuitos"] },
  { id: "dinamica", nombre: "Principios de Dinámica", semestre: 5, prerrequisitos: ["estatica"] },
  { id: "ciencia_materiales", nombre: "Ciencia e Ingeniería de Materiales", semestre: 5, prerrequisitos: ["tecnologia_mecanica", "quimica"] },
  { id: "libre_1", nombre: "Libre Elección", semestre: 5, prerrequisitos: [] },

  // SEMESTRE 6
  { id: "optativa_fisica", nombre: "Optativa Física", semestre: 6, prerrequisitos: ["ecuaciones", "fund_mecanica"] },
  { id: "senales_1", nombre: "Señales y Sistemas I", semestre: 6, prerrequisitos: ["ecuaciones", "circuitos"] },
  { id: "estructura_datos", nombre: "Estructura de Datos", semestre: 6, prerrequisitos: ["poo"] },
  { id: "resistencia_materiales", nombre: "Resistencia de Materiales", semestre: 6, prerrequisitos: ["estatica"] },
  { id: "eco", nombre: "Ingeniería Económica", semestre: 6, prerrequisitos: ["calculo_integral"] },
  { id: "libre_2", nombre: "Libre Elección", semestre: 6, prerrequisitos: [] },

  // SEMESTRE 7
  { id: "senales_2", nombre: "Señales y Sistemas II", semestre: 7, prerrequisitos: ["variable_compleja", "senales_1"] },
  { id: "electronica_digital", nombre: "Electrónica Digital I", semestre: 7, prerrequisitos: ["electronica_analoga"] },
  { id: "diseno_mecatronico", nombre: "Diseño Mecatrónico", semestre: 7, prerrequisitos: ["dinamica", "resistencia_materiales"] },
  { id: "taller_proyectos", nombre: "Taller de Proyectos Interdisciplinarios", semestre: 7, prerrequisitos: ["desarrollo_sostenible"] },
  { id: "optativa_6", nombre: "Optativa (Materiales/Procesos)", semestre: 7, prerrequisitos: ["ciencia_materiales", "resistencia_materiales"] },

  // SEMESTRE 8
  { id: "control", nombre: "Control", semestre: 8, prerrequisitos: ["senales_2"] },
  { id: "sensores", nombre: "Sensores y Actuadores", semestre: 8, prerrequisitos: ["senales_2"] },
  { id: "redes", nombre: "Redes de Computadores", semestre: 8, prerrequisitos: ["estructura_datos"] },
  { id: "micro", nombre: "Microcontroladores I", semestre: 8, prerrequisitos: ["electronica_digital"] },
  { id: "optativa_7a", nombre: "Optativa (Económico/Admin)", semestre: 8, prerrequisitos: ["eco"] },
  { id: "libre_3", nombre: "Libre Elección", semestre: 8, prerrequisitos: [] },

  // SEMESTRE 9
  { id: "robotica", nombre: "Robótica", semestre: 9, prerrequisitos: ["control"] },
  { id: "servomecanismos", nombre: "Servomecanismos", semestre: 9, prerrequisitos: ["diseno_mecatronico"] },
  { id: "automatizacion_manufactura", nombre: "Automatización de Procesos de Manufactura", semestre: 9, prerrequisitos: ["optativa_6"] },
  { id: "optativa_7b", nombre: "Optativa (Informática)", semestre: 9, prerrequisitos: ["ecuaciones"] },
  { id: "optativa_8", nombre: "Optativa (Control/Robótica)", semestre: 9, prerrequisitos: ["control"] },
  { id: "libre_4", nombre: "Libre Elección", semestre: 9, prerrequisitos: [] },

  // SEMESTRE 10
  { id: "proyecto_aplicado", nombre: "Proyecto Aplicado de Ingeniería", semestre: 10, prerrequisitos: ["robotica", "optativa_6", "servomecanismos", "sensores"] },
  { id: "trabajo_grado", nombre: "Trabajo de Grado", semestre: 10, prerrequisitos: ["proyecto_aplicado"] },
  { id: "libre_5", nombre: "Libre Elección", semestre: 10, prerrequisitos: [] },
  { id: "libre_6", nombre: "Libre Elección", semestre: 10, prerrequisitos: [] },
  { id: "libre_7", nombre: "Libre Elección", semestre: 10, prerrequisitos: [] },
  { id: "libre_8", nombre: "Libre Elección", semestre: 10, prerrequisitos: [] }
];
