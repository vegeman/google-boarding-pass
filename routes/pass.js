const express 		= require('express');
const router  		= express.Router();
const flightClass	= require("../api/flightClass")
const flightObject	= require("../api/flightObject")

router.post('/flightClass/:classId', flightClass)
	.patch('/flightClass/:classId', flightClass)
	.get('/flightClass/:classId', flightClass)
router.post('/flightObject/:objectId', flightObject)
	.patch('/flightObject/:objectId', flightObject)
	.get('/flightObject/:objectId', flightObject)

module.exports = router;