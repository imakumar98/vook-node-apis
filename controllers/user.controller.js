const UserService = require('./../services/user.service')

exports.register = async function(req, res, next) {
    //Validate request parameters

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    try {
        const user = await UserService.register(newUser)
        console.log("Response from service");
        console.log(user);
        return res.status(200).json({ status: 200, data: user, message: 'User created successfully.'})
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message});
        
    }
}