const validarUsuario = (req, res, next) => {
    const  { nombre, apellido, edad, salario } = req.body

    if (nombre == "") {
        return res.status(400).json({status: 'el nombre es muy corto'})
    
    } else if (apellido == "") {
        return res.status(400).json({status: 'el apellido es muy corto'})
    
    } else if (edad <= 0 || typeof edad != 'number') {
        return res.status(400).json({status: 'la edad no es valida'})
    
    } else if (salario <= 0 || typeof salario != 'number') {
        return res.status(400).json({status: 'el salario no es valido'})        
    }

    next();
}

module.exports = validarUsuario