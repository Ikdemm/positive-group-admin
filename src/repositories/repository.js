module.exports = {

    findAll: (model) => {
        return model.find({})
    },

    save: (data, model) => {
        return model.create(data)
    }
}