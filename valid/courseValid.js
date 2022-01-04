const Joi=require('joi')

async function validCourse(obj){
    const schema = Joi.object({
        name:Joi.string().min(3).required(),
        Topics:Joi.array().min(4).required(),
        Instructor:Joi.string().min(3).required(),
        overview:Joi.string().required(),
        Features:Joi.object().required(),
        cateo:Joi.string().required(),
        price:Joi.string().required(),
        date:Joi.string()
    })
    const result= await schema.validate(obj)
    return result
}

module.exports.validCourse = validCourse