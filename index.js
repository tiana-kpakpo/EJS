const express = require ('express');
const route = require('./routes/route');
const bodyParser = require('body-parser');
const app = express();

//ejs
const expressLayouts = require ('express-ejs-layouts');
const path = require('path');
const {render} = require('ejs');

const PORT = 9898;  //server port

app.use(bodyParser.json());

//set view engine
app.set('view engine', 'ejs')

//layouts
app.use(expressLayouts);

app.set('layout', 'pages/index');

//global static file path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', route);

app.get('/', (req, res) => {
    res.render('pages/index', {title: "Login",})
});



 //start app on port
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });