'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
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

module.exports = mongoose.model('Planet', schema);


