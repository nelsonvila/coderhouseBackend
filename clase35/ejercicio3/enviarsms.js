import twilio from 'twilio'
import readline from 'readline'

const acctSid = 'AC422bcf0522792e4dc6596bd3a5b40257'
const authToken = 'b63e713f76eaacaddd28874a6d5d4c3a'

const twilioClient = twilio(acctSid, authToken)

const entradaComandos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



async function enviarSMS(body, from, to) {

    const info = await twilioClient.messages.create({ body, from, to })
    console.log(info)
}


entradaComandos.question('Ingrese el numero provisto por Twilio: ', (from) => {
    entradaComandos.question('Ingrese el numero de destino (tiene que estar registrado): ', (to) => {
        entradaComandos.question('Ingrese el mensaje: ', (body) => {
            enviarSMS(body, from, to)
                .finally(() => entradaComandos.close())
        })
    })
})