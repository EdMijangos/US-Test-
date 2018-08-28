const mongoose = require('mongoose');
const Usuario = require('./models/usuario');
const Venta = require('./models/ventas');

mongoose.connect('mongodb://localhost/testVentas', { useNewUrlParser: true });

const usuarios = [
  {
    nombre: "juan",
    email: "juan@example.com"
  },
  {
    nombre: "ana",
    email: "ana@example.com"
  },
  {
    nombre: "jorge",
    email: "jorge@example.com"
  },
];

//agregar usuarios a la DB
Usuario.create(usuarios, (err)=>{
  if(err) {throw (err)}
  console.log ('usuarios creados')
});

const ventas = [
  {
    usuarioId: "5b85631465cd7f36c1973f82", //id del usuario para el populate, esta hardcodeado solo para este test. Se tomo de la DB
    monto: 600,
    producto: 'Tennis'
  },
  {
    usuarioId: "5b85631465cd7f36c1973f82",
    monto: 500,
    producto: 'Camiseta'
  },
  {
    usuarioId: "5b85631465cd7f36c1973f83",
    monto: 300,
    producto: 'Sandalias'
  },
  {
    usuarioId: "5b85631465cd7f36c1973f84",
    monto: 1200,
    producto: 'Reloj'
  }
];

//se agregan las ventas a la DB
//para probar el codigo, se recomienda primero agregar los usuarios, cambiar los ids hardcodeados y luego agregar las ventas
Venta.create(ventas, (err)=>{
  if(err) {throw (err)}
  console.log ('ventas creadas');
  mongoose.connection.close();
});