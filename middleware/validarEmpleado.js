const validarEmpleado = (req, res, next) => {
    const { id, nombre, salario } = req.body

    if (nombre == "") {
        return res.status(400).json({ status: 'el nombre no debe estar vacio' })

    } else if (salario == "") {
        return res.status(400).json({ status: 'el salario no debe estar vacio' })

    } else if (typeof salario != 'number') {
        return res.status(400).json({ status: 'el salario debe ser un numero' })
    }
    
    if (id <= 0) {
        return res.status(400).json({ status: 'el id no es valido' })
    }

    next();
}

module.exports = validarEmpleado