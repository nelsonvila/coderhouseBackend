import {
  serve,
  ServerRequest,
} from "https://deno.land/std@0.100.0/http/server.ts";

const PORT = 8080;

const server = serve({
  port: PORT,
});

console.log("http://localhost:" + PORT);

function handleRequest(req: ServerRequest) {
  const frase = extraerFrase(req);
  console.log(frase);
  const fraseInvertida = frase.split(" ").reverse().join(" ");

  req.respond({
    status: 200,
    header: new Headers({ "content-type": "text/html; charset=utf-8" }),
    body: fraseInvertida,
  });
}

function extraerFrase(req: ServerRequest) {
  const query = req.url.replace(/\//g, "");
  const params = new URLSearchParams(query);
  let frase = params.get("frase");

  if (frase) {
    frase = decodeURIComponent(frase);
  }

  return frase ?? "";
}

for await (const req of server) {
  handleRequest(req);
}
