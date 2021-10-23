let tiempo: number = 0;
let contador: number = 1;
let suma: number = 0;
let prom: number;

while (contador <= 3) {
tiempo = Number (prompt("ingrese el tiempo por vuelta"));

  suma = suma + tiempo;
 
  contador = contador + 1;
}
prom = suma / 3;
console.log("promedio por vuelta es: " + prom);
console.log("la suma es: " + suma);