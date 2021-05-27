const { catchAsync } = require('../helpers');
const bonusService = require('../services/bonus.service');

module.exports = {
    getBonus: catchAsync(async (req, res) => {
        const bonus = await bonusService.calculateBonus(req.params.userId)
        res.status(200).send(bonus)
    })
}