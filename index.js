const bodyParser = require('body-parser');// Express reouters need requests to be received in json format, use body-parser to transform them to this object
const express = require('express');
const morgan = require('morgan');
//One router manager per needed route, for example /api , /about, etc.
const apiRouter = require('./routes');
const cors = require('cors');

//Instancia de express en mi app
const app = express();
app.use(cors());

//Middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Primera ruta
//Siempre usa request y response
//La función se llama manejador de rutas
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.use('/api', apiRouter);
// .com/api/user
// .com/api/category
// .com/api/article

//app.use('/about', aboutRouter)
// .com/about/description
// .com/about/products
// .com/about/team

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), () => {
    console.log('server up');
});