#!/usr/bin/node
const request = require('request');

moive_id = process.argv[2]

options = {
    'method': 'GET',
    'url' : 'https://swapi-api.alx-tools.com/api/films/'+ moive_id

}

request.get(options,(err,res)=>{
    if (err) console.log(err)

    jsodd = JSON.parse(res.body)
	console.log(jsodd['title']);
});

