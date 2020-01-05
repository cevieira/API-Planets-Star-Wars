'use strict';

const mongoose = require('mongoose');
const Planet = require('../models/planet');
const swapi = require('../services/swapi-service');
const repository = require('../repository/planet-repository');

exports.post = async (req, res, next) => {
    const data = await swapi(req.body);

    let planet = new Planet(data);
    planet
        .save()
        .then(x => {
            res.status(201).send({
                message: 'o Planeta com o id ' + x._id + ' foi cadastrado com sucesso!'
            })
        }).catch(e => {
            defaultError(res, e);
        });

};

exports.delete = (req, res, next) => {
    repository
        .delete(req.params._id)
        .then(data => {
            res.status(200).send({
                message: 'O Planeta foi deletado com sucesso.'
            })
        }).catch(e => {
            defaultError(res, e);
        });
};

exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            defaultError(res, e);
        });
};

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            defaultError(res, e);
        });
};

exports.getByName = (req, res, next) => {
    repository
        .getByName({ name: req.params.name })
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            defaultError(res, e);
        });
};

const defaultError = (res, e) => {
    return res.status(500).send({
        message: 'Ocorreu um erro ao processar a requisição',
        data: e.message
    });
};
