const express=require('express')
const router=express.Router()
const CARGO=require('../models/Cargo')
const EMPLE=require('../models/Empleado')

router.post('/cargo',async(req,res)=>{
    var cont=0;
    const params=req.body
    const empleado= await EMPLE.find()
    for(var i=0;i<empleado.length;i++){
        if(params.idEmp==empleado[i]._id){
            cont++;
            const cargo= new CARGO({
                id_bio:empleado[i].id_bio,
                firstNameEmp:empleado[i].firstNameEmp,
                lastNameEmpP:empleado[i].lastNameEmpP,
                lastNameEmpM:empleado[i].lastNameEmpM,
                nameCargo:params.nameCargo,
                cod_cargo:params.cod_cargo,
                des_cargo:params.des_cargo,
                t_perma:params.t_perma,
                haber_b:params.haber_b,
                nivel:params.nivel,
                estado:params.estado,
                gestion:params.gestion
            })
            cargo.save().then(()=>{
                res.status(200).json({message:"cargo resgitrado"})
            })
        }  
    }
    if(cont==0){
        res.json({message:"id no encontrado"})
    }
})

router.get('/cargo', async(req,res)=>{
    const cargo=await CARGO.find()
    const empleado=await EMPLE.find()
    const array=[]
    for(var i=0;i<empleado.length;i++){
        var cont=0;
        for(var j=0;j<cargo.length;j++){
            if(empleado[i].id_bio==cargo[j].id_bio){
                array.push({
                    id:empleado[i]._id,
                    id_bio:empleado[i].id_bio,
                    firstNameEmp:empleado[i].firstNameEmp,
                    lastNameEmpP:empleado[i].lastNameEmpP,
                    lastNameEmpM:empleado[i].lastNameEmpM,
                    cargoEmp:cargo[j].nameCargo
                })
                cont++;
                break
            }
        }
        if(cont==0){
            array.push({
                id:empleado[i]._id,
                id_bio:empleado[i].id_bio,
                firstNameEmp:empleado[i].firstNameEmp,
                lastNameEmpP:empleado[i].lastNameEmpP,
                lastNameEmpM:empleado[i].lastNameEmpM,
                cargoEmp:'No tiene'
            })
        }
    }
    res.json(array)
})

module.exports=router
