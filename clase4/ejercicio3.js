const fs = require('fs')

const date = Date().toLocaleString();

try {
    fs.writeFileSync('./fyh.txt', date)
} catch (error) {
    console.log(e)
}

try {
    const file = fs.readFileSync('./fyh.txt', 'utf-8')
    console.log(`La fecha actual es: ${file}`)
} catch (error) {
    console.log(error)
}