const validator = (req, res, next) => {
    const {city} = req.body;
    if (city === '') {
        return res.json({success: false, error: 'can not send empty fields'})
    }
    next()
}

module.exports = validator