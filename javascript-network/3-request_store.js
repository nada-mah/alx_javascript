#!/usr/bin/node
const req = require('request')
const fs = require('fs')

let URL = process.argv[2]
let bodydestination = process.argv[3]


req.get(URL, {encoding : 'utf-8'})
    .on('data', data => {
        fs.writeFile(bodydestination, data, (err) => {
 
            // In case of a error throw err.
            if (err) throw err;
        })
    })
             