const User = require("../Model/User.model");



async function isExist(email) {
    let isExist = await User.findOne({ email: user.email })
    return isExist ? true : false;
}


async function RegisterUser(user) {
    
    if (isExist(user.email)) {
        throw new Error(`User already exists with ${email}`)
    }
    let user = await User.create(user);
    user = user.toJSON();
    delete user.password;
    return user;
}


async function LoginUser({ email, password }) {
    if (!isExist(user.email)) {
        throw new Error(`No exists with ${email}`)
    }

    let user = await User.findById()
}




module.exports = {RegisterUser}