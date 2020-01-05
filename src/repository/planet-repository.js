'use strict';

const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');

exports.get = async () => {
    const res = await Planet.find({});
    return res;

}
exports.getById = async (id) => {
    const res = await Planet.findById(id);
    return res;
}

exports.getByName = async (name) => {
    const res = await Planet.findOne({ name: name });
    return res;
}