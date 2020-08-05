const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelsController');
const testimonialController = require('../controllers/testimonialController');

module.exports = function(){
    //home page
    router.get('/', homeController.homeInformation)
    router.get('/about', aboutController.aboutInformation)
    router.get('/travels', travelController.displayTravelers)
    router.get('/travels/:id', travelController.displayTraveler)
    router.get('/testimonial', testimonialController.displayTestimonial)
    router.post('/testimonial', testimonialController.displayTestimonials)
    router.post('/testimonial', testimonialController.validateTestimonial)
    //layout
     router.get('/layouts', (req, res)=>{
        res.render('layouts')
    })
    return router;
}