module.exports = {

    findAll: (model) => {
        return model.find({}).exec()
    },

    save: (data, model) => {
        return model.create(data).exec()
    },

    delete: (id, model) => {
        return model.deleteOne({ _id: id }).exec()
    },

    updateOne: (id, updatedData, model) => {
        model.updateOne({ _id: id }, updatedData, model).exec()
    },

    findOneById: (id, model) => {
        model.findById(id).exec()
    }
}