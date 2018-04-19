const express = require('express');
const app = express();

app.use((req, res, next)=> {
    let route = req.path
    let verb = req.method
    console.log(verb, route)
    console.log(res.send(statusCode))
    next()
})
app.get('/',(req, res, next)=>  res.send('Welcome!'))
app.get('/news',(req, res, next)=>  res.send('News!'))








app.listen(3000,()=> console.log('server listening'));

