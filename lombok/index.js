// Importación de modulos necesarios
const path = require('path')
const fs = require('fs/promises')
const http = require('http')

// Cuando alguien ingrese a la página tenemos que responder con el index.html
// Van a responder el html y el css

const app = http.createServer(async (req, res) => {
    // identificar si la peticion esta pidiendo un archivo o no
    // vamos a obtener su extensión
    // path.extname nos devuelve la extensión del archivo
    const url = req.url // Con esto se de donde se hace la petición
    const fileExtension = path.extname(url)
    if (url === '/') {
        const htmlPath = path.resolve('./index.html')
        const html = await getFile(htmlPath)
        res.setHeader('Content-Type', 'text/html')
        res.write(html)
        res.end()
    }
    if (fileExtension) {
        const extansionName = fileExtension.replace('.', '')
        const filePath = path.resolve(`.${url}`)
        const file = await getFile(filePath)
        res.setHeader('Content-Type', `text/${extansionName}`)
        res.write(file)
        res.end()
        /* const cssPath = path.resolve(`.${url}`)
        const css = await getFile(cssPath)
        res.setHeader('Content-Type', 'text/css')
        res.write(css)
        res.end() */
    }
})

const getFile = async (path) => {
    try {
        const file = await fs.readFile(path, 'utf-8')
        return file
    } catch (err) {
        console.log(err)
    }
}

const PORT = 8000

app.listen(PORT)
