const express = require('express');
const port = 8000;
const app = express();
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css'
}));

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(cookieParser());

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', './views');

app.set('layout extractStyles', true);

app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`The server is up and running at port: ${port}`);
});
