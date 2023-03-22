import { createTransport } from "nodemailer";
import readline from 'readline'

const TEST_MAIL = "erika.olson37@ethereal.email"

const entradaComandos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function enviarMail(asunto, mensaje) {
    //Crear objteto transporter con Nodemailer
    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: TEST_MAIL,
            pass: 'WrghBT3q7FEfJpdAsG'
        }
    })

    //Definir opciones del correo
    const mailOptions = {
        from: 'Servidor del profe',
        to: TEST_MAIL,
        subject: asunto,
        html: mensaje
    }

    //enviar el correo

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log('Correo electronico enviado con exito')
        console.log(`ID del mensaje ${info.messageId}`)
    } catch (error) {
        console.log(`Error al enviar el correo: ${error} `)
    }

}

//Leer parametros de CLI y enviar el correo
entradaComandos.question('Ingrese el asunto del correo electronico: ', (asunto) => {
    entradaComandos.question('Ingrese el mensaje del correo electronico', (mensaje) => {
        enviarMail(asunto, mensaje)
            .finally(() => entradaComandos.close())
    })
})