const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp(/^[a-z ']{2,}$/i)).messages({
            "string.base": "Your first name must not have numbers or special characters",
            "string.empty": "Your first name is a required field",
            "any.required": "Your first name is a required field",
            "string.pattern.base": "Your first name must contain letters",
            "string.min": "Your first name must contain at least 2 letters",
            "any.required": "Your first name is a required field"
        }),
        lastName: joi.string().trim().min(2).max(20).required().pattern(new RegExp(/^[a-z ']{2,}$/i)).messages({
            "string.base": "Your last name must not have numbers or special characters",
            "string.empty": "Your last name is a required field",
            "any.required": "Your last name is a required field",
            "string.pattern.base": "Your last name must contain letters",
            "string.min": "Last name must contain at least 2 letters",
            "any.required": "Last name is a required field"
        }),
        email: joi.string().trim().email().required().messages({
            "string.base": "Enter a valid email address",
            "string.empty": "Your mail address is a required field",
            "any.required": "Your mail address is a required field",
            "string.email": "Please enter a valid email address",
            "array.unique": "The account already exists"
        }),
        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/).messages({
            "string.base": "Enter your password",
            "string.empty": "Your password is a required field",
            "any.required": "Your mail address is a required field",
            "string.pattern.base": "Your password must contain letters and numbers",
            "string.min": "Your password minimum of 5 characters",
            "any.required": "Your password is a required field"
        }),
        userPicture: joi.string().trim().required().min(5).messages({
            "string.base": "Something went wrong. Please try again",
            "string.min": "Your picture url minimum of 5 characters",
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