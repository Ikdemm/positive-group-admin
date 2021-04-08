const ActivationCode = require("../models/activationCode");
const codeGenerator = require("../helpers/codesGenerator")

module.exports = {

    generateCode: async (req, res) => {
        try {
            let code = codeGenerator();
            await ActivationCode.save({ code: code })
            res.status(200).send(code)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }

}