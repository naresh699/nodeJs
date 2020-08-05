const Testimonials = require('../models/Testimonials');
exports.displayTestimonial = (req, res)=>{
    res.render('testimonial', {
        pageTitle: 'testimonial'
    })
}

exports.displayTestimonials = async (req, res)=>{
    const testimonials = await Testimonials.findAll()
    res.render('./testimonial', {
        pageTitle : 'testimonial',
        testimonials
    })
}

exports.validateTestimonial = async (req, res)=>{
    let {name, email, message} = req.body;

    //validate the form
    let errors = [];

    if(!name){
        errors.push({'message': 'enter your name'})
    }
    if(!email){
        errors.push({'message': 'enter your email'})
    }
    if(!message){
        errors.push({'message': 'enter your message'})
    }

    if(errors.length > 0){
        const testimonials = await Testimonials.findAll()
        res.render('testimonial', {
            pageTitle: 'testimonial',
            errors,
            name,
            email,
            message,
            testimonials
        })
    }else{
        const result = await Testimonials.create({
            name,
            email,
            message
        })
        if(result){
            res.redirect('/testimonial')
        }else{
            console.log(error)
        }
    }
}