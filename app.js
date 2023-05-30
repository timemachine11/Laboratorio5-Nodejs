const express = require('express')
const app = express()

const rutaUsuario = require('./routes/usuarios')
const rutaProducto = require('./routes/productos')
const rutaEmpleados = require('./routes/empleados')
const registrar = require('./middleware/registrar')

app.use(express.json())

app.use(registrar)
app.use('/usuarios', rutaUsuario)
app.use('/productos', rutaProducto)
app.use('/empleados', rutaEmpleados)

app.listen(8080, () => {
    console.log("Se ha levantado el servidor 8080...");
})