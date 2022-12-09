/* console.log(global)

let counter = 0
const interval = setInterval(() => {
    console.log(counter)
    counter++
    if (counter > 15) {
        clearInterval(interval)
    }
}, 1000) */

const path = require('path')
const fs = require('fs').promises // tambien se puede usar ('fs/promises')
const http = require('http')

const examplePath = path.resolve('example.txt') // devuelve la ruta absoluta del archivo especificado
console.log(examplePath)

const newPath = path.resolve('newExample.txt')
/* fs.readFile(examplePath, 'utf8', (error, data) => {
    if (error) console.log(error)
    console.log(data)    
})

fs.writeFile(newPath, 'Hello World', (error) => {
    if (error) console.log(error)
}) */

// async - await, then - catch
/* fs.readFile(examplePath, 'utf8')
    .then((data) => console.log(data))
    .catch((error) => console.log(error)) */
const text =
    'EL archivo de texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at quidem soluta voluptatibus libero a laudantium nostrum omnis nam assumenda natus cum deleniti distinctio nemo, quia quae facere! Rem, temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at quidem soluta voluptatibus libero a laudantium nostrum omnis nam assumenda natus cum deleniti distinctio nemo, quia quae facere! Rem, temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at quidem soluta voluptatibus libero a laudantium nostrum omnis nam assumenda natus cum deleniti distinctio nemo, quia quae facere! Rem, temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at quidem soluta voluptatibus libero a laudantium nostrum omnis nam assumenda natus cum deleniti distinctio nemo, quia quae facere! Rem, temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at quidem soluta voluptatibus libero a laudantium nostrum omnis nam assumenda natus cum deleniti distinctio nemo, quia quae facere! Rem, temporibus?'
// async - await
asin = async () => {
    try {
        const data = await fs.readFile(examplePath, 'utf8')
        fs.writeFile(examplePath, `${data} \n\n ${text}`).catch((error) => console.log(error))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
asin()
