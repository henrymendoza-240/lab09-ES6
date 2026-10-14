// Módulo de Cálculos (ES6+)

// Arrow function con operador rest (...notas)
export const calcularPromedio = (...notas) => {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
  };
  
  // Parámetro por defecto (minima = 13)
  export const obtenerEstado = (nota, minima = 13) => {
    return nota >= minima ? "Aprobado" : "Desaprobado";
  };
  
  // Desestructuración, operador spread y template literals
  const generarReporte = ({ nombre, notas }) => {
    const prom = calcularPromedio(...notas);
    const est = obtenerEstado(prom);
    return `${nombre}: ${prom.toFixed(1)} - ${est}`;
  };
  
  // Exportación por defecto
  export default generarReporte;