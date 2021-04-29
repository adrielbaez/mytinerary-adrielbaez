const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const usersControllers = {
    createNewAccount: async (req, res) => {
        let { firstName, lastName, email, password, userPicture, country } = req.body;
        let emailExists = await User.findOne({ email })

        password = bcryptjs.hashSync(password, 10)
        if (!emailExists) {
            try {
                const userSave = new User({firstName, lastName, email, password, userPicture, country })
                await userSave.save()
                const token = jwt.sign({...userSave}, process.env.SECRET_OR_KEY)
                res.json({success: true, respuesta: {token, userPicture: userSave.userPicture, firstName: userSave.firstName, lastName: userSave.lastName }})
                // , userPicture: userSave.userPicture, firstName: userSave.firstName, lastName: userSave.lastName}
            } catch (error) {
                res.json({success: false, respuesta: error + 'There was an error saving user, please retry again'})
                console.log(error);
            }
        } else{
            res.json({success: false, respuesta: 'The email already exists in our databases'})
        }

    },
    logInUser: async (req, res) =>{
        const {email, password} = req.body;
         let respuesta;
         let error;

         const userExists = await User.findOne({email: email})
         if (userExists) {
             const comparePassword = bcryptjs.compareSync(password, userExists.password)
             if (comparePassword) {
                 const token = jwt.sign({...userExists}, process.env.SECRET_OR_KEY)
                 respuesta= token
             } else {
                 error = 'User and/or password failed'
             }
         } else {
            error = 'User and/or password failed'
         }
         console.log(respuesta);
         res.json({
             success: !error ? true : false,
             respuesta:{ token: respuesta, userPicture: userExists.userPicture,  firstName: userExists.firstName, lastName: userExists.lastName },
             error: error
         })
    }
}

module.exports = usersControllers