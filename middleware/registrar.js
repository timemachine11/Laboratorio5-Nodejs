const registar = (req, res, next) => {
    console.log('el usuario se ha registrado');

    next();
}

module.exports = registar