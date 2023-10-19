const express = require('express');
const route = require('./routes/route');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/routes')

//require ejs layout
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const { render } = require('ejs');

PORT = 9898 //server port 

//middleware
//use body-parser
app.use(bodyParser.json());

//set view engine
app.set('view engine', 'ejs');
//set layout
app.use(expressLayouts);
app.set('layout', 'layouts/main');
//global static files path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', route);
app.use('/api', router);

app.get('/', (req, res) => {
    res.render('pages/index', {title: "Login",} );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

