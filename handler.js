'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World.11',
        input: event,
      },
      null,
      2
    ),
  };

};

// Testing this function locally 
// console.log(typeof this.hello('ayush'));