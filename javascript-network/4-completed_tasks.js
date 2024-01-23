#!/usr/bin/node
const request = require('request')
const fs = require('fs')

let URL = process.argv[2]
options = {
    'method' : 'GET',
    'url' : URL,

}
let tasksCompleted = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    '10': 0

}

request(options, (err, res)=>{
    if(err) console.log(err)
    record = JSON.parse(res.body)
    for(let i = 0; i<record.length;i++){
        if(record[i]['completed'] ){
            if(record[i]['userId'] in temp){
                temp[record[i]['userId']]+=1
            }
        }
    }
    console.log(tasksCompleted)
})