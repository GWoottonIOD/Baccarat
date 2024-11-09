"use strict";
const Models = require("../models");

const getShoes = (req, res) => {
    // const limit = JSON.parse(req.query.limit)
    // const offset = JSON.parse(req.query.offset)
    Models.Shoes.findAll({
        // limit: limit,
        // offset: offset
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getShoesByID = (req, res) => {
    Models.Shoes.findAll({ where: { id: req.params.id } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createShoes = (data, res) => {
    Models.Shoes.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
} 

const updateShoes = (req, res) => {
    Models.Shoes.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteShoes = (req, res) => {
    Models.Shoes.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteShoesByUserID = (req, res) => {
    Models.Shoes.destroy({ where: { userid: req.params.userid } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const lockShoes = (req, rest) => {
    Models.Shoes.findAll({
        // const [results, metadata] = await sequelize.query(
        //     "SELECT c.*, u.id AS userId FROM comments c JOIN users u ON c.userId = u.id"
        //   );
        // transaction: t1,
        lock: {
            // level: t1.LOCK,
            of: Models.Shoes
        }
    });
}

const unlockShoes = (req, rest) => {
    Models.Shoes.findAll({
        unlock: {
            // level: t1.LOCK,
            of: Shoes
        }
    });
}

module.exports = {
    getShoes, createShoes, updateShoes, deleteShoes, getShoesByID, lockShoes, unlockShoes, deleteShoesByUserID
}