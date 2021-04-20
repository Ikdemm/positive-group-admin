const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activationCodeSchema = new Schema({
    code: { type: String, required: true },
    usedBy: { type: String, default: null },
    createdOn: { type: Date, default: Date.now },
    usedOn: { type: Date, default: null }
});

const ActivationCode = mongoose.model("ActivationCode", activationCodeSchema);

module.exports = ActivationCode;
