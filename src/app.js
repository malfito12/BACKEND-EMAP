const express=require('express')
const cors=require('cors')
const app=express();

//settings
app.set('port',process.env.PORT || 8000);


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

//routes
app.use('/api', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api', require('./routes/cargos'))
app.use('/api', require('./routes/asistencias'))
app.use('/api', require('./routes/empleados'))

module.exports=app;