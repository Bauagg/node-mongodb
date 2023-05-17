const router = require('express').Router()
const controlerUser = require('./user-controler')

router.get('/user', controlerUser.getUser)
router.get('/user/:id', controlerUser.getUserById)
router.post('/user', controlerUser.postUsers)
router.put('/user/:id', controlerUser.postUsers)
router.delete('/user/:id', controlerUser.deleteUser)

module.exports = router