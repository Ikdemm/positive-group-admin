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

    updateOne: (model, id, updatedData) => {
        return model.replaceOne({ _id: id }, updatedData)
    },

    findOneById: (id, model) => {
        return model.findById(id)
    },

    findOne: (model, filter) => {
        return model.findOne(filter)
    }
}