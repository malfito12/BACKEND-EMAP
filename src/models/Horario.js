var mongoose=require('../database')
var HORARIOSCHEMA={
    descripcion:String,
    observaciones:String,
    talerancia:Number,
    ingreso1:Date,
    salida1:Date,
    ingreso2:Date,
    salida2:Date,
    tipo:String,
    feriado:String,
    orden:String,
    est:String,
}
const HORARIO=mongoose.model('Horario',HORARIOSCHEMA)
module.exports=HORARIO