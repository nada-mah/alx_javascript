#!/usr/bin/node
const req = require('request')
const { CLIENT_RENEG_WINDOW } = require('tls')

url = process.argv[2] 

options = {
    'method' : 'GET',
    'url' : url

}

let count =0

req(options , (err, res) => {
    
    jsonres = JSON.parse(res.body)
    len = jsonres.count
    for(let i=0; i<len;i++){
        x = jsonres.results[i]['characters']
        for(let j=0; j<x.length; j++){
            charactes = x[j]
            if(charactes.includes('18')){
                count+=1
            }
        }

    }
    console.log(count)
})

