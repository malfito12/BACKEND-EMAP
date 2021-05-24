const express=require('express')
const router=express.Router()
const EMPLE=require('../models/Empleado')

router.post('/empleado',(req,res)=>{
    let params=req.body
    params['fechaIng']=new Date()
    let empleado= new EMPLE(params)
    empleado.save().then(()=>{
        res.status(200).json(params)
    })
})

router.get('/empleado', async(req,res)=>{
    let empleado= await EMPLE.find()
    res.json(empleado)
})

router.get('/empleado/:id', async(req,res)=>{
    const empleado= await EMPLE.findById(req.params.id)
    res.json(empleado)
})

router.put('/empleado/:id',async(req,res)=>{
    const params=req.body
    await EMPLE.findByIdAndUpdate({_id: req.params.id},{
        itemEmp:params.itemEmp,
        id_bio:params.id_bio,
        firstNameEmp:params.firstNameEmp,
        lastNameEmpP:params.lastNameEmpP,
        lastNameEmpM:params.lastNameEmpM,
        CIEmp:params.CIEmp,
        emailEmp:params.emailEmp,
        sexoEmp:params.sexoEmp,
        numCelEmp:params.numCelEmp,
        dirEmp:params.dirEmp,
        photoImgEmp:params.photoImgEmp,
        nacionalityEmp:params.nacionalityEmp,
        civilStatusEmp:params.civilStatusEmp,
        professionEmp:params.professionEmp,
        institutionDegreeEmp:params.institutionDegreeEmp,
        ObserEmp:params.ObserEmp,
        fechaNacEmp:params.fechaNacEmp
    })
    res.status(200).json({message:'empleado actualizado'})
})

router.delete('/empleado',(req,res)=>{
    let params=req.query
    if(params.id==null){
        res.status(300).json({
            "msn":"faltan parametros"
        })
        return;
    }
    EMPLE.deleteOne({_id: params.id},(err, docs)=>{
        if(err){
            res.status(300).json({
                "msn":"no se logro borrar el dato"
            })
            return;
        }
        res.status(200).json(docs)
        return;
    })
})
module.exports=router