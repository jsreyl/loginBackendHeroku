//Router Index
const router = require('express').Router();
const { route } = require('./api/users');
//One router manager per item in the route, i.e /api/users, /api/articles, etc.
const apiRouterUser = require('./api/users')

router.use('/users', apiRouterUser);
//.com/api/user
//.com/api/user/list
//.com/api/user/create
//.com/api/user/login

//route.use('/category', apiRouterCategory);
//.com/api/category
//.com/api/category/list
//.com/api/category/create
//.com/api/category/update

//route.use('/article', apiRouterArticle);
//.com/api/article
//.com/api/article/list
//.com/api/article/create
//.com/api/article/update

module.exports = router;