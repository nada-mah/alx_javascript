#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);

  myObject.incr = function () {
      this.value++;
  };

  myObject.incr();
  console.log(myObject);
  // console.log("{ type: 'object', value: 13, incr: [Function] }");
  myObject.incr();
  console.log(myObject);
  // console.log("{ type: 'object', value: 14, incr: [Function] }");
  myObject.incr();
  console.log(myObject);
    // console.log("{ type: 'object', value: 15, incr: [Function] }");