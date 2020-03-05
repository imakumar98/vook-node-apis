const UserService = require('./../services/user.service')
const validateRegisterInput = require('./../validations/register')
const validateLoginInput = require('./../validations/login')


exports.register = async function(req, res, next) {
    const { errors, isValid } = validateRegisterInput(req.body)

    if(!isValid) {
        const errorResponse = {
            name: "Bad Request",
            message: "users validation failed",
            code: 400,
            errors: errors
        }
        return res.status(400).json(errorResponse);
        
    }

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    try {

        const user = await UserService.isExists(newUser.email)

        if(!user) {

            const user = await UserService.register(newUser)

            return res.status(200).json(user)
        }

        res.status(409).json({
            name: "Conflict",
            message: "Email: value already exists.",
            code: 409,
            errors: {
                email: "value"
            }
        })

        

        
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message});
        
    }
}


exports.login = async function(req, res, next) {

    const { errors, isValid } = validateLoginInput(req.body)

    if(!isValid) {
        const errorResponse = {
            name: "Bad Request",
            message: "Login validation failed",
            code: 400,
            errors: errors
        }
        return res.status(400).json(errorResponse);
        
    }

    const { email, password } = req.body;
    try {

        const user = await UserService.isExists(email)

        if(!user) {

            return res.status(401).json({
                name: "Not Authenticated",
                message: "Invalid Login",
                code: 401,
                errors: {}
            })

        }

        const token = await UserService.login(email, password);
        
        return res.status(200).json({
            accessToken: token,
            user: user
        })

    } catch (e) {
        res.status(401).json({
            name: "Not Authenticated",
            message: "Invalid Login",
            code: 401,
            errors: {}
        });

    }
}




