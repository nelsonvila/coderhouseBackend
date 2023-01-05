import express from "express";
import Perimetro from "./perimetro";
import Superficie from "./superficie";

const app = express();

app.use(express.json());

const perimetro = new Perimetro();
const superficie = new Superficie();

//Perimetro Cuadrado
app.get("/perimetroCuadrado", (req, res) => {
  const { side } = req.body;
  const result = perimetro.perimetroCuadrado(side);
  console.log(result);

  res.json({
    type: "Perimetro",
    shape: "Cuadrado",
    parameters: `Lado ${side}`,
    result: `El perimetro del cuadrado es ${result}`,
  });
});

//Perimetro Rectangulo
app.get("/perimetroRectangulo", (req, res) => {
  const { length, width } = req.body;
  const result = perimetro.perimetroRectangulo(length, width);
  console.log(result);

  res.json({
    type: "Perimetro",
    shape: "Rectangulo",
    parameters: `Longitud ${length} - Ancho ${width}`,
    result: `El perimetro del rectangulo es ${result}`,
  });
});

//Perimetro Circulo
app.get("/perimetroCirculo", (req, res) => {
  const { diameter } = req.body;
  const result = perimetro.perimetroCirculo(diameter);
  console.log(result);

  res.json({
    type: "Perimetro",
    shape: "Circulo",
    parameters: `Diametro ${diameter}`,
    result: `El perimetro del circulo es ${result}`,
  });
});

//Superficie Cuadrado
app.get("/superficieCuadrado", (req, res) => {
  const { side } = req.body;
  const result = superficie.superficieCuadrado(side);
  console.log(result);

  res.json({
    type: "Superficie",
    shape: "Cuadrado",
    parameters: `Lado ${side}`,
    result: `La superficie del cuadrado es ${result}`,
  });
});

//Superficie Rectangulo
app.get("/superficieRectangulo", (req, res) => {
  const { length, width } = req.body;
  const result = superficie.superficieRectangulo(length, width);
  console.log(result);

  res.json({
    type: "Superficie",
    shape: "Rectangulo",
    parameters: `Longitud ${length} - Ancho ${width}`,
    result: `La superficie del rectangulo es ${result}`,
  });
});

//Superficie Circulo
app.get("/superficieCirculo", (req, res) => {
  const { radius } = req.body;
  const result = superficie.superficieCirculo(radius);
  console.log(result);

  res.json({
    type: "Superficie",
    shape: "Circulo",
    parameters: `Radio ${radius}`,
    result: `La superficie del circulo es ${result}`,
  });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
