const http = require('http') // import http module
// import http from 'http'
// the module http forma parte do core do node

// create server acepta como parámetro una función
// que recibe como parámetro req y res
// Primero la petición y el segundo la respuesta

// Responder con un JSON
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Mary', age: 28 },
]

const app = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(users))
})

// app.listen recibe como parámetro el puerto
// en el que va a escuchar
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

console.log(global)
