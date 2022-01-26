const Joi=require('joi')

async function validCourse(obj){
    const schema = Joi.object({
        name:Joi.string().min(3).required().messages({
            "any.required":"Name is required!"
        }),
        Topics:Joi.array().required().messages({
            "any.required":"Topics are required!"
        }),
        Instructor:Joi.string().min(3).required().messages({
            "any.required":"Instructor is required!"
        }),
        overview:Joi.string().required().messages({
            "any.required":"Overview is required!"
        }),
        Features:Joi.object().required().messages({
            "any.required":"Duration, Batch Size and Language is required!"
        }),
        cateo:Joi.string().required().messages({
            "any.required":"Category is required!"
        }),
        price:Joi.number().required().messages({
            "any.required":"Price is required!"
        }),
        date:Joi.string().required().messages({
            "any.required":"Date is required!"
        }),
        productImage:Joi.string().required().messages({
            "any.required":"image is required!"
        })
    })
    const result= await schema.validate(obj)
    return result
}

module.exports.validCourse = validCourse