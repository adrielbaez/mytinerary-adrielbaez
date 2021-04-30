const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            "string.base": "Your first name should by a text type",
            "string.empty": "Your first name is a required field",
            "any.required": "Your first name is a required field",
            "string.pattern.base": "Your first name must contain letters",
            "string.min": "Your password must contain at least 3 letters",
            "any.required": "Your password is a required field"
        }),
        lastName: joi.string().trim().min(2).max(15).required().messages({
            "string.base": "Your last name should by a text type",
            "string.empty": "Your last name is a required field",
            "any.required": "Your last name is a required field",
            "string.min": "Your password must contain at least 3 letters",
            "any.required": "Your password is a required field"
        }),
        email: joi.string().trim().email().required().messages({
            "string.base": "Something went wrong. Please try again",
            "string.empty": "Your mail address is a required field",
            "any.required": "Your mail address is a required field",
            "string.email": "Please write a valid email address",
            "array.unique": "The account already exists"
        }),
        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/).messages({
            "string.base": "Something went wrong. Please try again",
            "string.empty": "Your password is a required field",
            "any.required": "Your mail address is a required field",
            "string.pattern.base": "Your password must contain a letter and number",
            "string.min": "Your password must contain at least 6 characters",
            "any.required": "Your password is a required field"
        }),
        userPicture: joi.string().trim().required().messages({
            "string.base": "Something went wrong. Please try again",
            "string.empty": "You should use a valid URL",
            "any.required": "You should use a valid URL"
        }),
        country: joi.string().trim().required().messages({
            "string.empty": "Please, choose a country",
            "any.required": "Please, choose a country"
        })
    })

    const validation = schema.validate(req.body, { abortEarly: false })
    console.log(validation.error);
    if (validation.error) {
        return res.json({ success: false, errores: validation.error })
    }
    next()
}

module.exports = validator