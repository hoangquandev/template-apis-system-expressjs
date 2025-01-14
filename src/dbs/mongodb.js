'use strict'

const mongoose = require('mongoose');

const connectString = process.env.MONGO_URI

class Database {
    constructor() {
        this.connect()
    }
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectString, {
            maxPoolSize: 50
        })
            .then(_ => console.log('Connected successfully to MongoDB'))
            .catch(err => console.error('Error connecting to MongoDB:', err))
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongoDB = Database.getInstance()
module.exports = instanceMongoDB
