
import admin from "firebase-admin"
import fs from "fs"

const serviceAccount = JSON.parse(fs.readFileSync("./codertest-7c6d7-firebase-adminsdk-uzqod-86afa3cd6a.json", 'utf-8'))

//Conexion a Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://codertest-7c6d7.firebaseio.com"
});

console.log("Base de datos conectada!")

const db = admin.firestore()
const colores = db.collection('colores')

//1 - Agregar colores a la coleccion

const red = await colores.add({ nombre: 'red' })
const blue = await colores.add({ nombre: 'blue' })
const green = await colores.add({ nombre: 'green' })

console.log("Colores insertados")

//2 - Listar los colores

const colorList = await colores.get()

colorList.forEach(color => {
    console.log({
        id: color.id,
        ...color.data()
    })
})

//3 - Modificar el color blue por navy

await colores.doc(blue.id).update({ nombre: 'navy' })
console.log("El color fue modificado")

//4 - Borrar el color green

await colores.doc(green.id).delete()
console.log("El color ha sido eliminado correctamente")





