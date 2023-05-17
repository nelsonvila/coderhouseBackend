import { Application } from "./deps.ts";
import router from "./rutas/routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Servidor corriendo en puerto 8080");
app.listen({ port: 8080 });
