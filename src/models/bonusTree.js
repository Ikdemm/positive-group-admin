const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bonusTreeSchema = new Schema({
    user_id: String,
    invitees: [String]
})

const BonusTree = mongoose.model('BonusTree', bonusTreeSchema);

module.exports = BonusTree;
