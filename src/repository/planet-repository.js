'use strict';

const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');

exports.get = async (req) => {
    var pageOptions = {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
        order: 'asc',
        orderBy: 'name',
        searchBy: 'name',
        search: ''
    }
    const res = await Planet.paginate(
        {
            [pageOptions.searchBy]:
            {
                $regex: `${pageOptions.search}`
            }
        }, {
        sort: {
            [pageOptions.orderBy]: pageOptions.order
        },
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