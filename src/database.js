const mongoose=require('mongoose')

// console.log(process.env.MONGODB_URI)

const URI=process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';
// mongoose.connect(URI,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// });

const databasename='crud'
// mongoose.connect("mongodb://127.0.0.1:27017/"+databasename,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// })

mongoose.connect("mongodb+srv://malfito12:vivabraun123@dbcluster.yhudn.mongodb.net/EMAP?retryWrites=true&w=majority"/*+databasename*/,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

const connection=mongoose.connection

connection.once('open',()=>{
    console.log('DB is connected')
})
module.exports=mongoose