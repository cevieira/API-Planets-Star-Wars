'use strict';

const mongoose = require('mongoose');
const Planet = require('../models/planet');
const swapi = require('../services/swapi-service');
const repository = require('../repository/planet-repository');

exports.post = async (req, res, next) => {

    if (req.body.numberOfMovies) {
        res.status(400).send({
            message: 'O campo numberOfMovies somente é preenchido utilizando a API do Swapi, não é possivel cadastrar um planeta utilizando este campo na requisição.'
        })
    }
    const data = await swapi(req.body);

    let planet = new Planet(data);
    planet
        .save()
        .then(x => {
            res.status(201).send({
                message: 'O Planeta foi cadastrado com sucesso e recebeu o id ' + x._id
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
        .get(req)
        .then(data => {
            res.status(200).send({
                planets: data.docs,
                page: data.page,
                pages: data.pages,
                total: data.total
            })
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
        .getByName(req.params.name)
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
