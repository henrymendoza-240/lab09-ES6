// Módulo de Datos de Estudiantes y Curso (ES6+)

export const curso = "Diseño de Interfaces";

export const estudiantes = [
  { nombre: "Ana", notas: [16, 18, 15] },
  { nombre: "Luis", notas: [12, 10, 14] },
  { nombre: "Rosa", notas: [19, 17, 20] }
];

// Generar copia con spread en lugar de Object.assign() y concat()
const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };
export const todosEstudiantes = [...estudiantes, nuevoEstudiante];