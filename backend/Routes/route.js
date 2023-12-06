const express = require('express');

const quizController = require('../Controller/quizController');

const route = express.Router();

route.post('/postCategory', quizController.postCategory)
route.get('/getCategory', quizController.getCategory)

route.post('/comprehension', quizController.comprePost)
route.get('/getcomprehension', express.json() , quizController.compreGet)

route.post('/postCloze', quizController.clozePost)
route.get('/getCloze', quizController.clozeGet)

module.exports = route; 