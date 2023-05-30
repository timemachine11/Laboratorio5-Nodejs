const express = require('express')
const router = express.Router()

let { productos } = require("../models/producto")

const validarProducto = require('../middleware/validarProducto')

router.get('/', (req, res) => {
    res.json(productos)
})

router.get('/:id', (req, res) => {
    const id_producto = req.params.id
    const filtro = productos.filter((producto) => producto.id_producto == id_producto)

    if (filtro.length > 0) {
        return res.json(filtro)

    } else {
        return res.status(404).json({status: "El producto no esta disponible..."})
    }
})

router.post('/', validarProducto, (req, res) => {
    let body = req.body
    body.id_producto = productos.length + 1
    productos.push(body)

    return res.status(201).json(body)
})

router.put('/:id', (req, res) => {
    let id_producto = req.params.id
    let body = req.body

    const filtro = productos.filter((producto) => producto.id_producto == id_producto)

    if (filtro.length > 0) {
        productos = productos.filter((producto) => producto.id_producto != id_producto)
        productos.push(body)

        return res.status(201).json(body)

    } else {
        return res.status(201).json({ status: 'El producto no existe' })
    }
})

router.delete('/:id', (req, res) => {
    let id_producto = req.params.id
    const filtro = productos.filter((producto) => producto.id_producto == id_producto)

    if (filtro.length > 0) {
        productos = productos.filter((producto) => producto.id_producto != id_producto)

        return res.status(200).json(filtro)

    } else
        return res.status(404).json({ status: 'El producto no esta disponible' })
})

// router.get('/:marca', (req, res) => {
//     const marca = req.params.marca
//     const filtro = productos.filter((producto) => producto.marca == marca)

//     if (filtro.length > 0)
//         return res.status(200).json(filtro)

//     else
//         return res.status(404).json({status: 'El producto no se encuentra'})
// })

// router.get('/:precio', (req, res) => {
//     const precio = req.params.precio
//     const filter = productos.filter((producto) => producto.precio >= precio)

//     if (filter.length > 0)
//         return res.status(200).json(filter)

//     else
//         return res.status(404).json({status: 'No hay producto scon ese precio'})
// })

router.get('/:precio', (req, res) => {
    const precio = req.params.precio
    const filter = productos.filter((producto) => producto.precio <= precio)

    if (filter.length > 0)
        return res.status(200).json(filter)

    else
        return res.status(404).json({ status: 'No hay producto scon ese precio' })
})

module.exports = router
