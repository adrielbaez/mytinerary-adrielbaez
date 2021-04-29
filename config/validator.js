const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        lastName: joi.string().trim().min(2).max(15).required(),
        email: joi.string().trim().email().required(),
        password: joi.string().min(5).trim().required(),
        userPicture: joi.string().trim().required(),
        country:joi.string().trim().required()
    })

    const validation = schema.validate(req.body, {abortEarly: false})
    if (validation.error) {
        return res.json({success: false, errores: validation.error})
    }
    next()
}

module.exports = validator