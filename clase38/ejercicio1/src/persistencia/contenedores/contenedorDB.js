import mysql from "mysql";

const options = mysql.createPool({
    host: 'localhost', //127.0.0.1
    user: 'root',
    password: '',
    database: 'ecommerce'
})

function executeQuery(query, values = []) {
    return new Promise((resolve, reject) => {
        options.getConnection((error, connection) => {
            if (error) {
                reject(error)
            } else {
                connection.query(query, values, (error, results) => {
                    connection.release()
                    if (error) {
                        reject(error)
                    } else {
                        resolve(results)
                    }
                })
            }
        })
    })
}

class ContenedorDB {

    async guardar(obj) {
        const paramsString = JSON.stringify(obj.params);
        const query = `INSERT INTO productos SET tipo=?, params=?, timestamp = ?`
        const values = [obj.tipo, paramsString, obj.timestamp]
        const result = await executeQuery(query, values)
        return result
    }

    async listarAll() {
        const query = `SELECT * FROM productos`
        const result = await executeQuery(query)
        return result
    }
}

export default ContenedorDB