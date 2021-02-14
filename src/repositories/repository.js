module.exports = {

    findAll: (model) => {
        return model.find({})
    },

    save: (data, model) => {
        return model.create(data)
    },

    delete: (id, model) => {
        return model.deleteOne({ _id: id })
    },

    updateOne: (id, updatedData, model) => {
        model.updateOne({ _id: id }, updatedData, model)
    }
}