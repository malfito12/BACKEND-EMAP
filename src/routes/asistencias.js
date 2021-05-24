const express=require('express');
const router=express.Router();
const ASIS=require('../models/Asistencia')

router.post('/asistencia',async(req,res)=>{
    const params=req.body
    const asistencia= new ASIS({
        id_bio:params.id_bio,
        fecha:params.fecha,
        hora:params.hora
    })
    await asistencia.save().then(()=>{
        res.status(200).json({message: asistencia})
    })
    
})
router.get('/asistencia',async (req,res)=>{
    var params=req.query
    var SKIP=0;
    var LIMIT=100;
    var filter={}
    if(params.skip){
        SKIP=parseInt(params.skip)
    }
    if(params.limit){
        LIMIT=parseInt(params.limit)
    }
    if(params.id_bio){
        filter["id_bio"]=params.id_bio
    }
    const asis= await ASIS.find(filter).skip(SKIP).limit(LIMIT)
    res.json(asis)
})

module.exports=router