import ClientSql from "./sql.js";
import { options } from "./options/SQLite3.js";

const sql = new ClientSql(options)

const artiulos = [
    {
        nombre: 'Harina', codigo: '123', precio: 80.00, stock: 50
    },
    {
        nombre: 'Leche', codigo: '456', precio: 300.00, stock: 20
    },
    {
        nombre: 'Huevos', codigo: '999', precio: 20.00, stock: 100
    },
    {
        nombre: 'Arroz', codigo: '789', precio: 500.00, stock: 30
    },
    {
        nombre: 'Fideos', codigo: '111', precio: 180.00, stock: 200
    }
]

sql.crearTabla()
    .then(() => {
        console.log('1) Tabla creada')

        return sql.insertarArticulos(artiulos)
    })
    .then(() => {
        console.log('2) Articulos insertados')

        return sql.listarArticulos()
    })
    .then((articulos) => {
        console.log('3) Articulos listados')
        console.table(articulos)
        return sql.borrarArticulosPorId(3)
    })
    .then(() => {
        console.log('4) Articulo con id 3 borrado')

        return sql.actualizarStockPorId(0, 2)
    })
    .then(() => {
        console.log('5) Articulo con id 2 actualizado su stock a 0')
        return sql.listarArticulos()
    })
    .then((articulos) => console.table(articulos))
    .catch((error) => {
        console.log(error); throw error
    })
    .finally(() => sql.close)
