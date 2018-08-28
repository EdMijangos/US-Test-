const express = require('express');
const mongoose = require('mongoose');
const Venta = require('./models/ventas');
const Usuario = require('./models/usuario');

const app = express();
const port = process.env.PORT || 3000;

//run server with nodemon server.js on terminal while running MongoDB

//connect to the DB
mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/testVentas', {useNewUrlParser: true})
  .then(()=>{
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

//initialize server
app.listen(port, ()=>{console.log(`listening on port ${port}`)});

//route to search the DB
//since the server only has one function, there's no need to put this in a separate js

app.get('/api/', (req,res)=>{
  Venta.find()
  .populate('usuarioId')
  .then(results=>{
    //guardar json para mostrar solo los datos deseados
    let finalResults = [];

    for (result of results){
      let obj = {
        name: result.usuarioId.nombre,
        email: result.usuarioId.email,
        monto: result.monto,
        producto: result.producto,
      }
      finalResults.push(obj);
    }
    res.json(finalResults);
  })
  .catch(err=>{res.json(err)})
})


module.exports = app;

