'use strict'
const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECONDS = 5000

const countConnect = () => {
    const numConnection = mongoose.connection.length
    console.log(`Number of connection:: ${numConnection}`);
}

const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connection.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnection = numCores * 5

        console.log(`Active Connection:: ${numConnection}`);
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnection > maxConnection) {
            console.log('Connection Overload Detected!');
        }
    }, _SECONDS);
}

module.exports = {
    countConnect,
    checkOverload
}