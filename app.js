'use strict';

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

const obj = {
    people: [
        { name: 'isaias'},
        { name: 'Thanh'},
        { name: 'Full' },
        { name: 'Stack'}
    ]
}

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

const res = nunjucks.render('index.html', function(err, output) {
    if (err) throw err;
    console.log(output);
})

app.use(express.static('public'));

app.use((req, res, next)=> {
    let route = req.path
    let verb = req.method
    console.log(verb, route)
    next()
});

app.use('/', routes);

app.listen(3000,()=> console.log('server listening'));

