function ejercicio1() {
  console.log("Ejercicio 1");

  const edad = 20;
  const nombre = "Eduard";
  const estudiante = true;
  const datoNulo = null;
  let sinValor;
  const numeroGrande = 10n;
  let nota;
  nota = 7;

  console.log(edad, typeof edad);
  console.log(nombre, typeof nombre);
  console.log(estudiante, typeof estudiante);
  console.log(datoNulo, typeof datoNulo);
  console.log(sinValor, typeof sinValor);
  console.log(numeroGrande, typeof numeroGrande);
  console.log(nota, typeof nota);
}

function ejercicio2() {
  console.log("Ejercicio 2");

  // Espero "123", tipo string
  const a = String(123);
  console.log(a, typeof a);

  // Espero 123, tipo number
  const b = Number("123");
  console.log(b, typeof b);

  // Espero NaN, tipo number
  const c = Number("12abc");
  console.log(c, typeof c);

  // Espero NaN, tipo number (me equivoqué: sale 0)
  const d = Number("");
  console.log(d, typeof d);

  // Espero 1, tipo number
  const e = Number(true);
  console.log(e, typeof e);

  // Espero false, tipo boolean
  const f = Boolean(0);
  console.log(f, typeof f);

  // Espero true, tipo boolean
  const g = Boolean("texto");
  console.log(g, typeof g);

  // Espero false, tipo boolean
  const h = Boolean("");
  console.log(h, typeof h);
}

function ejercicio3() {
  console.log("Ejercicio 3");

  // Espero 3
  console.log("5" - 2);
  // Espero "52"
  console.log("5" + 2);
  // Espero 16
  console.log("8" * 2);
  // Espero "10 km"
  console.log(10 + " km");
  // Espero 2
  console.log(true + 1);
  // Espero NaN
  console.log("hola" - 1);

  console.log(5 == "5", 5 === "5");
  console.log(0 == false, 0 === false);
  console.log(null == undefined, null === undefined);
}

function ejercicio4() {
  console.log("Ejercicio 4");

  const nombre = "Eduard Sebastian Butuza";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2.º DAW";
  const aficion = "videojuegos";
  let horas = 4;
  horas += 2;

  const ficha = `Soy ${nombre}, estudio ${ciclo} en ${curso}, me gusta ${aficion} y esta semana he estudiado ${horas} horas.`;
  alert(ficha);
  console.log(ficha);

  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + " en " + curso + ", me gusta " + aficion + " y esta semana he estudiado " + horas + " horas.";
  console.log(fichaConMas);
  console.log(ficha === fichaConMas);
}
