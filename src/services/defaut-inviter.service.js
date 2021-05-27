const User = require("../models/user")

const getDefaultInviter = () => {
    return User.findOne({ isDefaultInviter: true });
}

module.exports = {
    getDefaultInviter
}