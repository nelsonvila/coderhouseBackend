import twilio from 'twilio'
import readline from 'readline'

const sId = "" //reemplazar con su sId
const authToken = "" //reemplazar con su sId

const entradaComandos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const twilioClient = twilio(sId, authToken)

async function enviarWSP(from, to, mensaje) {
    const message = await twilioClient.messages.create({
        body: mensaje,
        from: `whatsapp:${from}`,
        to: `whatsapp:${to}`
    })

    console.log(message.sid)
}


entradaComandos.question('Ingrese el numero de WSP provisto por Twilio: ', (from) => {
    entradaComandos.question('Ingrese el numero de WSP de destino: ', (to) => {
        entradaComandos.question('Ingrese el mensaje: ', (mensaje) => {
            enviarWSP(from, to, mensaje)
                .finally(() => entradaComandos.close())
        })
    })
})
