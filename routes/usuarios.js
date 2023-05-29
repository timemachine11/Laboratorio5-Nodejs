const express = require('express')
const router = express.Router()

let { usuarios } = require("../models/usuario")

router.get("/", (req, res) => {
    res.json(usuarios)
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const filtro = usuarios.filter((usuario) => usuario.id == id)

    if (filtro.length > 0)
        return res.json(filtro)

    else
        return res.status(404).json({ status: "El usuario no se encuentra" })
})

router.post("/", (req, res) => {
    let body = req.body
    body.id = usuarios.length + 1
    usuarios.push(body)

    return res.status(201).json(body)
})

router.put("/:id", (req, res) => {
    let id = req.params.id
    let body = req.body

    const filtro = usuarios.filter((usuario) => usuario.id == id)

    if (filtro.length > 0) {
        usuarios = usuarios.filter((usuario) => usuario.id != id)
        usuarios.push(body)

        return res.status(201).json(body)

    } else
        return res.status(201).json({ status: "El usuario no se encuentra" })
})

router.delete("/:id", (req, res) => {
    let id = req.params.id
    const filtro = usuarios.filter((usuario) => usuario.id == id)

    if (filtro.length > 0) {
        usuarios = usuarios.filter((usuario) => usuario.id != id)

        return res.status(200).json(filtro)

    } else
        return res.status(404).json({ status: "El usuario no se encuentra" })
})

module.exports = router