'use strict'

const Shoes = require('./shoes') //require the model

async function init() {
    await Shoes.sync();
  
    
    //sync the model
};

init();
module.exports = {
    Shoes, //export the model
};

