const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creditCodeSchema = new Schema({
    code: { type: String, required: true },
    value: { type: Number, required: true },
    usedBy: { type: String, default: null },
    createdOn: { type: Date, default: Date.now },
    usedOn: { type: Date, default: null }
});

const CreditCode = mongoose.model("CreditCode", creditCodeSchema);

module.exports = CreditCode;
