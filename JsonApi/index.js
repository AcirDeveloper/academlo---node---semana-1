// Importamos todos los modulos necesarios
const http = require('http')
const path = require('path')
const fs = require('fs').promises

const PORT = 8000

const app = http.createServer(async (req, res) => {
    // Denyro del objeto request podemnos leer el medoto de la peticion
    // Get, Post, Put, Delete
    const requestMethod = req.method
    const requestUrl = req.url
    // responder el data json cuando se realice un get al endpoint /apiv1/tasks
    if (requestUrl === '/apiv1/tasks') {
        if (requestMethod === 'GET') {
            const jsonPath = path.resolve('./data.json')
            const jsonFile = await fs.readFile(jsonPath, 'utf-8')
            res.setHeader('Content-Type', 'application/json')
            res.writeHead(200)
            res.write(jsonFile)

            /* // Leer el archivo json
            const data = await fs.readFile(path.join(__dirname, 'data.json'))
            // Convertir el json a un objeto
            const tasks = JSON.parse(data)
            // Convertir el objeto a un string
            const tasksString = JSON.stringify(tasks)
            // Escribir el string en el response
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(tasksString)
            res.end() */
        }
        if (requestMethod === 'POST') {
            req.on('data', (data) => {
                const parsed = JSON.parse(data)
                console.log(parsed)
            })
        }
    } else {
        // Si no es un get al endpoint /apiv1/tasks
        // responder con un error 503
        res.writeHead('503')
    }
    console.log(requestUrl, requestMethod)
    res.end()
})

app.listen(PORT)

/* fecth(url, {
    method: 'POST',
    body: JSON.stringify(),
}) */

/**
 * TAREA
 * Todo: Completar el servicio para crear un CRUD con un archivo json
 * todo: ya que saben como leer la ruta de la petición
 * todo: el metodo de la petición
 * todo: obtener la información que se envia por el body
 * todo: 1.- cuando se haga un post agregar el elemento al json y responder con un status 201
 *  todo: 2.- Cuando se haga un PUT (solamente se enviara por el body {status: true}) se envia un id data
 * todo: actualizar el elemnto y responder con un status --> investigar con que estado puedes responder
 * todo: 3.- Cuando se haga un delete elimiar el elemento del json y responder (investigar conque status code puedes responder)
 */
