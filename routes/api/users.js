//The users component of the api, here is the logic (the methods) of this part of the page
const router = require('express').Router();//To manage the routes
//const { User } = require('../../models');
const userController = require('../../controllers/UserController.js')
//const bcrypt = require('bcryptjs');

//Solicitud a api/user/ devuelve el listado de usuarios de la base de datos
// router.get('/', async(req, res)=>{
//     const user = await User.findAll();//Get averything from the database
//     res.status(200).json(user); //200='ok' response, parse as json so it can be consumed
// });

// api/user/register, this is the function executed when a request is sent to /api/use/register
//The most organized way to do this is writing the logic inside a controller
// router.post('/register', async(req, res)=>{
//     // Encrypt the password using bcrypt
//     req.body.password = bcrypt.hashSync(req.body.password, 10);// Password string and how many times to execute the encrypting algorithm
//     const user = await User.create(req.body);
//     res.status(200).json(user);
// })

router.get('/', userController.list)
router.post('/register', userController.register)
// api/user/login
router.post('/login', userController.login)

module.exports = router;