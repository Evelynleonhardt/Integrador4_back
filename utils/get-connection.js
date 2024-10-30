import mongoose from 'mongoose'
const uri_remota = process.env.URI_MONGO

const getConnection = async () => {
  try {

await mongoose.connect(uri_remota)
console.log('Conexion OK')
  } catch (error){
    console.log('Conexion Error')
  }
}

export default getConnection