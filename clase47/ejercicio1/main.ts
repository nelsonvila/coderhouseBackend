import {
  bgWhite,
  yellow,
  red,
  green,
} from "https://deno.land/std@0.100.0/fmt/colors.ts";

const numeros = Deno.args.map((num) => Number(num));

numeros.sort((a, b) => a - b);

const min = numeros[0];
const max = numeros[numeros.length - 1];

const promedio = () => {
  let suma = 0;
  numeros.forEach((num) => (suma += num));
  return suma / numeros.length;
};

const textos: string[] = [];

textos.push("------------");
textos.push(`Numeros: ${numeros}`);
textos.push(`Minimo: ${min}`);
textos.push(`Maximo: ${max}`);
textos.push(`Promedio: ${promedio()}`);
textos.push("------------");

//Salida por consola

console.log(textos[0]);
console.log(textos[1]);
console.log(bgWhite(yellow(textos[2])));
console.log(bgWhite(red(textos[3])));
console.log(bgWhite(green(textos[4])));
console.log(textos[5]);

//Escribir el archivo

await Deno.writeTextFile("resultados.dat", textos.join("\n"));
