import {
  agregarProductos,
  obtenerProductos,
} from "../controladores/productos.ts";
import { Router } from "../deps.ts";

const router = new Router();

router
  .get("/api/productos", obtenerProductos)
  .post("/api/productos", agregarProductos);

export default router;
