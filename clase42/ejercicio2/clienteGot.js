import got from 'got'

(async () => {
    try {
        const response = await got('http://localhost:3000', { responseType: 'json' })
        console.log(response.body)
    } catch (error) {
        console.error(error.response.body)
    }
})();