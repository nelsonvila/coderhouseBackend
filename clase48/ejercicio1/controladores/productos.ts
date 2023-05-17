import { Producto } from "../modelos/producto.ts";

let productos: Producto[] = [];

const obtenerProductos = async ({ response }: { response: any }) => {
  response.status = 200;
  response.body = {
    success: true,
    data: productos,
  };
};

const agregarProductos = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();

  if (!body) {
    response.status = 400;
    response.body = {
      success: false,
      data: [],
    };
  } else {
    const producto: Producto = await body.value;
    producto.id = productos.length ? productos[productos.length - 1].id + 1 : 1;
    productos.push(producto);
    response.status = 200;
    response.body = {
      success: true,
      data: producto,
    };
  }
};

export { obtenerProductos, agregarProductos };
