// Sirve para crear un servidor y usar sus metodos pertienentes
const http = require('http')
// Metodo file sistem sirve para leer archivos
const fs = require('fs/promises')
// Para resolver las rutas de los archivos
const path = require('path')
// Comunmente es una variable de entorno
const PORT = 8000
const app = http.createServer(async (request, response) => {
    const method = request.method
    const url = request.url
    if (url === '/tasks') {
        const jsonPath = path.resolve('./data.json')
        const jsonFile = await fs.readFile(jsonPath, 'utf-8')
        if (method === 'GET') {
            response.setHeader('Content-Type', 'application/json')
            response.write(jsonFile)
        }
        if (method === 'POST') {
            request.on('data', (data) => {
                const newTask = JSON.parse(data)
                const arr = JSON.parse(jsonFile)
                arr.push(newTask)
                console.log(arr)
            })
        }
    }
    response.end()
})
/**
 * * Primer entregable
 * Todo: Completar el post
 * Todo: Realizar el put y el delete
 * Subir al girhub y al classcenter
 */

app.listen(PORT)
console.log('Servidor corriendo')
