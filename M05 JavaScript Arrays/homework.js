/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map(function(element) {
      return element + 1;
    });
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0; // Inicializamos una variable para llevar un seguimiento de la suma.
  
  for (var i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i]; // Sumamos cada número al valor acumulado.
  }

  return suma; // Devolvemos la suma total. 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0; // Inicializamos una variable para llevar el seguimiento del promedio

  for (var i = 0; i < resultadosTest.length; i++) {
    promedio += resultadosTest[i]; // Sumamos cada valor acumulado
  }

  promedio = promedio / resultadosTest.length; // Calculamos el promedio dividiendo la suma por la cantidad de elementos
  return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var max = arrayOfNums[0]; // Inicializamos el máximo con el primer elemento del arreglo.

  for (var i = 1; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] > max) {
      max = arrayOfNums[i]; // Actualizamos el máximo si encontramos un número más grande.
    }
  }

  return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0; // Si no se pasan argumentos, retornamos 0.
    }
  
    if (arguments.length === 1) {
      return arguments[0]; // Si solo se pasa un argumento, simplemente lo retornamos.
    }
  
    // Inicializamos una variable para llevar el producto y la configuramos con el primer argumento.
    var producto = arguments[0];
  
    // Iteramos a través de los argumentos desde el segundo elemento en adelante.
    for (var i = 1; i < arguments.length; i++) {
      producto *= arguments[i]; // Multiplicamos cada argumento por el producto acumulado.
    }
  
    return producto; // Retornamos el producto final.
  }
  

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;

   array.forEach(elemento => {
     if (elemento > 18) {
       contador++; // Incrementa el contador si el elemento es mayor que 18.
     }
   });
   return contador;
 }

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia >= 2 && numeroDeDia <= 6) 
      return "Es dia laboral";
    else numeroDeDia === 1 || numeroDeDia === 7 
      return "Es fin de semana";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString();

   var caracteres = numStr.split('');

  // Comprobar si el primer carácter es "9"
  if (caracteres[0] === "9") {
    return true;
  } else {
    return false;
  }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0) {
      return false; // Un arreglo vacío no tiene elementos iguales.
    }
  
    // Guardar el primer elemento del arreglo para comparar con los demás
    var primerElemento = array[0];
  
    // Iterar a través del arreglo comenzando desde el segundo elemento
    for (var i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
        return false; // Si encontramos un elemento diferente al primero, retornamos false.
      }
    }
  
    // Si llegamos a este punto, todos los elementos son iguales
    return true;
  }

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesElegidos = array.filter((element) => {
    return element === "Enero" || element === "Marzo" || element === "Noviembre";
  });
  
  if (mesesElegidos.length === 3) {
    return mesesElegidos;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var resultados = []; // Creamos un array vacío para almacenar los resultados.

  for (var i = 0; i <= 10; i++) {
    var num = 6 * i; // Calculamos el resultado de la multiplicación.
    resultados.push(num); // Agregamos el resultado al array.
  }

  return resultados; // Devolvemos el array de resultados.
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   const numerosMayoresACien = array.filter((element) => {
    return element > 100 && element <= 200;
  });

  return numerosMayoresACien; // Devolvemos el array de resultados.
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var numerosAumentadosEnDos = [];

  for (var i = 0; i < 10; i++) {
    num += 2;
    numerosAumentadosEnDos.push(num);

    if (num === i) {
      break; // Utilizamos 'break' para interrumpir la ejecución del bucle
    }
  }

  if (num === i) {
    return "Se interrumpió la ejecución";
  } 
    
  return numerosAumentadosEnDos;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let result = [];
  
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue; // Salta la iteración cuando i es igual a 5
    }
    num += 2;
    result.push(num);
  }
  
  return result;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
