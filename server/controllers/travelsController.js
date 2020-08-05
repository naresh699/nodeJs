const Travels = require('../models/Travels');

exports.displayTravelers = async (req, res)=>{
    const travels = await Travels.findAll();
    res.render('travels', {
        pageTitle: 'upcoming travel',
        travels
    })
}

exports.displayTraveler = async (req, res)=>{
    const travel = await Travels.findByPk(req.params.id);
    res.render('travel', {
        travel
    })
}