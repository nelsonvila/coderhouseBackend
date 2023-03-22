import { createTransport } from "nodemailer";
import readline from 'readline'
import fs from 'fs'

const GMAIL_MAIL = "nelsonvila.22@gmail.com"

const entradaComandos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function enviarMail(asunto, mensaje, destino, adjunto) {
    //Crear objteto transporter con Nodemailer
    const transporter = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: GMAIL_MAIL,
            pass: 'uklxjrunjuxubmbm'
        }
    })

    //Definir opciones del correo
    const mailOptions = {
        from: GMAIL_MAIL,
        to: destino,
        subject: asunto,
        html: mensaje
    }

    // Si se especifico un archivo adjunto se agregara al correo
    if (adjunto) {
        // let adjuntoStream = fs.createReadStream(adjunto)
        mailOptions.attachments = [{
            path: adjunto
        }]
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
    entradaComandos.question('Ingrese el mensaje del correo electronico: ', (mensaje) => {
        entradaComandos.question('Ingrese el correo electronico destino: ', (destino) => {
            entradaComandos.question('Ingrese el path del archivo a adjuntar (opcional): ', (adjunto) => {
                enviarMail(asunto, mensaje, destino, adjunto)
                    .finally(() => entradaComandos.close())
            })
        })
    })
})