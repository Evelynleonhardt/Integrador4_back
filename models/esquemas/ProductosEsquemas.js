import mongoose from "mongoose";

const ProductoEsquemas = mongoose.Schema({
    nombre: {type:String,
        require:true,},
    precio: Number,
    stock: Number, 
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
},

{
    timestamps: true, 
    versionKey:false
})

export default ProductoEsquemas