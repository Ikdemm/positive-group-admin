const { catchAsync } = require("../helpers");
const User = require("../models/user");
const defaultInviterService = require("../services/defaut-inviter.service")

const assignDefaultInviter = catchAsync(async (req, res) => {
    const defaultInviter = await defaultInviterService.getDefaultInviter();
    if (defaultInviter) {
        res.status(201).send({ message: "Inviter exists" })
    } else {
        const user = await User.findByIdAndUpdate(req.params.userId, { $set: { isDefaultInviter: true } })
        res.status(200).send({ message: "success" })
    }
})

const unassignDefaultInviter = catchAsync(async (req, res) => {
    const user = await User.findOneAndUpdate({ isDefaultInviter: true }, { $set: { isDefaultInviter: false } })
    if (user) {
        res.status(200).send({ message: "success" })
    }
    res.status(400).send({ message: "No default Inviters" })

})

const getDefaultInviter = catchAsync(async (req, res) => {
    const defaultInviter = await defaultInviterService.getDefaultInviter();
    res.status(200).send({ defaultInviter: defaultInviter })
})

module.exports = {
    assignDefaultInviter,
    unassignDefaultInviter,
    getDefaultInviter
}