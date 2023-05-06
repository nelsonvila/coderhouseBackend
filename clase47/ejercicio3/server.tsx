// Importamos React y ReactDOMServer
import React from "https://esm.sh/react@17.0.2";
import ReactDOMServer from "https://esm.sh/react-dom@17.0.2/server";

// Importamos las definiciones de tipo para Opine
import {
  Application,
  Request,
  Response,
} from "https://deno.land/x/opine@2.2.0/mod.ts";

// Importamos opine
import opine from "https://deno.land/x/opine@2.2.0/mod.ts";

// Creamos una instancia de Opine
const app: Application = opine();

// Manejador para la ruta "/"
app.get("/", function (req: Request, res: Response) {
  // Obtenemos el valor del parámetro "frase" de la consulta
  const { frase } = req.query as { frase: string };
  // Invertimos la frase
  const invertida = frase.split(" ").reverse().join(" ");

  // Creamos un elemento HTML utilizando JSX
  const element = (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Opine</title>
      </head>
      <body>
        <h1>{invertida}</h1>
      </body>
    </html>
  );

  // Convertimos el elemento a una cadena HTML utilizando ReactDOMServer
  const html = ReactDOMServer.renderToString(element);

  // Enviamos la respuesta al cliente
  res.send(html);
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000);
console.log("Opine started on port 3000");
