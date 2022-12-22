const express = require('express')
const getControler = require('../controler/getControler')

const routerx = express.Router()

routerx.get('/',getControler.getCategory)

module.exports =routerx