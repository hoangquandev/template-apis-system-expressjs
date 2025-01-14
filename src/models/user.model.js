'use strict'

const mongoose = require('mongoose')

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 150
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        unique: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verify: {
        type: Boolean,
        default: false
    },
    roles: {
        type: Array,
        default: []
    }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

module.exports = mongoose.model(DOCUMENT_NAME, userSchema)