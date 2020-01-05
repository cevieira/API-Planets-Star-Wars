'use strict';

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: {
        type: String,
        required: [true, 'O nome do planeta é obrigatório.'],
        index: true,
        unique: true
    },
    climate: {
        type: String,
        required: [true, 'O clima do planeta é obrigatório.']
    },
    terrain: {
        type: String,
        required: [true, 'O terreno do planeta é obrigatório.']
    },
    numberOfMovies: {
        type: Number,
        default: 0
    },

}, {
    versionKey: false
});

PlanetSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('Planet', PlanetSchema);


