const express = require('express')
const router = express.Router()
const eventController = require('./../controllers/eventController')

router
    .route('/')
    .get(eventController.getAllevent) // Contoller to Get all the events
    .post(eventController.Addevent) // Contoller to Create a New event
router
    .route('/:id')
    .get(eventController.getEvent) // Contoller to fetch a event info by event id
    .patch(eventController.updateRatingevent) // Contoller to update event_rating and number of ratings received from customers


module.exports = router;