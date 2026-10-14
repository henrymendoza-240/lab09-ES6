// Módulo Principal de la Tarea (ES6+)
import { curso, todosEstudiantes } from "./datos.js";
import generarReporte, { calcularPromedio, obtenerEstado } from "./calculos.js";

// Consola
console.log(`Curso: ${curso}`);
todosEstudiantes.forEach((estudiante) => {
  console.log(generarReporte(estudiante));
});

// Renderizado en la página web
const listaReportes = document.querySelector("#reportes");

if (listaReportes) {
  todosEstudiantes.forEach(({ nombre, notas }) => {
    const prom = calcularPromedio(...notas);
    const est = obtenerEstado(prom);
    const li = document.createElement("li");
    li.textContent = `${nombre}: ${prom.toFixed(1)} - ${est}`;
    listaReportes.appendChild(li);
  });
}