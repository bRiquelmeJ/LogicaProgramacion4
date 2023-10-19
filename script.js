function Fibonacci() {
    const inputNumero = document.getElementById('numero');
    const numero = parseInt(inputNumero.value);
  
    if (isNaN(numero)) {
      mostrarError('Por favor, ingrese un número válido.');
      return;
    }
  
    const resultadoFibonacci = calcularFibonacci(numero);
    mostrarResultado(`Serie de Fibonacci: ${resultadoFibonacci.join(', ')}`);
  }
  
  function calcularFibonacci(n) {
    const resultado = [];
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
      resultado.push(a);
      const suma = a;
      a = b;
      b += suma;
    }
  
    return resultado;
  }
  
  function mostrarResultado(mensaje) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = mensaje;
  }
  
  function mostrarError(mensaje) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Error: ${mensaje}`;
  }