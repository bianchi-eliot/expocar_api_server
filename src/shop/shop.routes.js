const shopControllers = require("./shop.controllers.js");
const express = require('express');
const router = express.Router();

router.get("/", shopControllers.list);

router.get("/add", shopControllers.add);
router.post("/validAdd", shopControllers.validAdd);

router.get('/update/piece:id', shopControllers.update);
router.post('/validUpdate', shopControllers.validUpdate)

router.delete('/delete', shopControllers.delete)

router.get("/piece:id", shopControllers.showOne);
router.get('/filter', shopControllers.filter);

module.exports = router;