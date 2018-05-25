const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

function isValidId(request, response, next) {
    if(!isNaN(request.params.id)) return next()
    next(new Error('Invalid Id'))
}

router.get('/', (request, response) => {
    queries.getAll().then(cannabis => response.json(cannabis))
})

router.get('/:id', isValidId, (request, response, next) => {
    queries.getOne(request.params.id).then(cannabis => {
        cannabis
        ? response.json(cannabis)
        : next()
    })
})

module.exports = router