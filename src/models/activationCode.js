const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activationCodeSchema = new Schema({
    code: String,
    isUsed: { type: Boolean, default: false },
    usedBy: { type: String, default: null },
});

const ActivationCode = mongoose.model("ActivationCode", activationCodeSchema);

module.exports = ActivationCode;
