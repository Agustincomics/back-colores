import {model, Schema} from 'mongoose'

const colorScheme = new Schema({
    nombreColor: {
        type: String,
        minLength:2,
        maxLength:100,
        unique: true,
        required: true
    },
    pickColor: {
        type: String,
        minLength:2,
        maxLength:1000,
        unique: true,
        required: true
    }
})

const Color = model('color', colorScheme)

export default Color;