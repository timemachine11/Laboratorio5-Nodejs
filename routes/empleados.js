const express = require('express')
const router = express.Router()

let {empleados} = require('../models/empleado')
const { usuarios } = require('../models/usuario')

router.get('/', (req, res) => {
    res.json(empleados)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const filtro = empleados.filter((empleado) => empleado.id == id)

    if (filtro.length > 0) {
        return res.json(filtro)

    } else {
        return res.status(404).json({status: 'este empleado no se encuentra'})
    }
})

router.post('/', (req, res) => {
    let body = req.body

    body.id = empleados.length + 1
    empleados.push(body)

    return res.status(201).json(body)
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let body = req.body
    
    const filtro = empleados.filter((empleado) => empleado.id == id)

    if (filtro.length > 0) {
        empleados = empleados.filter((empleado) => empleado.id != id)
        empleados.push(body)

        return res.status(201).json(body)

    } else {
        return res.status(404).json({status: 'el empleado no se encuentra'})
    }
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    const filtro = empleados.filter((empleado) => empleado.id == id)

    if (filtro.length > 0) {
        empleados = empleados.filter((empleado) => empleado.id != id)

        return res.status(200).json(filtro)
   
    } else {
        return res.status(404).json({status: 'el empleado no se encuentra'})
    }
})

module.exports = router