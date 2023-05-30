const validarProducto = (req, res, next) => {
    const { descripcion, marca, precio } = req.body

    if (descripcion == "") {
        return res.status(400).json({status: 'la descripcion es muy corta'})
    
    } else if (marca == "") {
        return res.status(400).json({status: 'la marca es muy corta'})
    
    } else if (precio.lenght <= 0 || typeof precio != 'number') {
        return res.status(400).json({status: 'el precio no es valido'})
    }

    next()
}

module.exports = validarProducto