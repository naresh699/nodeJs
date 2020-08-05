const Travels = require('../models/Travels');
const Testimonials = require('../models/Testimonials');

module.exports.homeInformation = async (req, res)=>{
    const promises = [];
    promises.push( Travels.findAll({limit: 3}) );
    promises.push( Testimonials.findAll({limit: 3}) );

    const [travels, testimonials] = await Promise.all(promises);

    res.render('index', {
        pageTitle: 'welcome to travel agency',
        className : 'home',
        travels,
        testimonials
    });
}