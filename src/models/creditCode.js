const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creditCodeSchema = new Schema({
    code: { type: String, required: true },
    price: { type: Number, required: true },
    usedBy: { type: String, default: null },
});

const CreditCode = mongoose.model("CreditCode", creditCodeSchema);

module.exports = CreditCode;
