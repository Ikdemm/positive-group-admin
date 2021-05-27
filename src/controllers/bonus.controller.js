const { catchAsync } = require('../helpers');
const bonusService = require('../services/bonus.service');

module.exports = {
    getBonus: catchAsync(async (req, res) => {
        const bonus = await bonusService.getBonus(req.params.userId)
        res.status(200).send({ status: true, bonus: bonus })
    }),
    getBonusTree: catchAsync(async (req, res) => {
        const bonusTree = await bonusService.getBonusTree(req.params.userId)
        res.status(200).send(bonusTree)
    })
}