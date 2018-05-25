const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

function isValidId(request, response, next) {
    if(!isNaN(request.params.id)) return next()
    next(new Error('Invalid Id'))
}

function validCannacaceae(cannabis) {
    const hasName = typeof cannabis.name == 'string' && cannabis.name.trim() != ''
    const hasStrain = typeof cannabis.strain == 'string' && cannabis.strain.trim() != ''
    const hasDescription = typeof cannabis.description == 'string' && cannabis.description.trim() != ''
    const hasStrength = !isNaN(cannabis.strength)
    const hasUrl = typeof cannabis.imgUrl == 'string' && cannabis.imgUrl.trim() != ''
    const hasRating = !isNaN(cannabis.rating)
    return hasName &&  hasStrain && hasDescription && hasStrength && hasUrl && hasRating
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

router.post('/', (request, response, next) => {
    validCannacaceae(request.body)
    ? queries.create(request.body)
        .then(cannabaceae => response.json(cannabaceae[0]))
    : next(new Error('Invalid Post'))
})

module.exports = router