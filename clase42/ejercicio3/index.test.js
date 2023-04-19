import assert from 'assert'
import axios from 'axios'

describe('Test del servidor', function () {
    it('debe agregar 10 números consecutivos y comprobar que estén en orden', async function () {
        const baseUrl = 'http://localhost:3000'; // modificar si es necesario
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Agregar los números
        for (const numero of numeros) {
            const response = await axios.post(`${baseUrl}/ingreso`, { numero });
            // assert.strictEqual(response.status, 200);
        }

        // Obtener los números agregados
        const response = await axios.get(`${baseUrl}/egreso`);
        const numerosAgregados = response.data.numeros;

        // Comprobar que estén en cantidad y en orden
        assert.deepStrictEqual(numerosAgregados, numeros);
    });
});

