const express = require('express');
const router = express.Router();
const userHandler = require('./handlers/user');

router.post('/register', userHandler.register); 
router.post('/login', userHandler.login); 
router.post('/logout', userHandler.logout);  
router.put('/update/:id', userHandler.update); 
router.get('/:id', userHandler.getUser); 
router.get('/', userHandler.getUsers); 

module.exports = router;
