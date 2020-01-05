'use strict';

const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');

exports.get = async (req) => {

    var pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10,
        order: 'asc',
        orderBy: 'name'
    };

    const res = await Planet.paginate({
        orderBy: pageOptions.orderBy,
        sort: { [orderBy]: pageOptions.order },
        limit: pageOptions.limit,
        page: pageOptions.page
    });
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