const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ventaSchema = new Schema ({
  ventaId: Number,
  usuarioId: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  monto: Number,
  producto: String,
})

module.exports = mongoose.model('Venta', ventaSchema);