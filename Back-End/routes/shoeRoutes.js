
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => { 
    // router.get('/', getLimiter, (req, res) => { 
    Controllers.shoeController.getShoes(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.shoeController.getShoesByID(req, res);
})

router.post('/create', (req, res) => {
    Controllers.shoeController.createShoes(req.body, res)
})

router.put('/put/:id', (req, res) => {
    Controllers.shoeController.updateShoes(req, res)
})

router.delete('/delete/:id', (req, res) => {
    Controllers.shoeController.deleteShoes(req, res)
})

router.lock('/', (req, res) => {  
    Controllers.shoeController.lockShoes(req, res);
})

router.unlock('/', (req, res) => {  
    Controllers.shoeController.unlockShoes(req, res);
})

module.exports = router;