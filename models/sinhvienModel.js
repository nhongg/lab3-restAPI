const mongoose=require('mongoose');
const sinhvienSchema=new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
});
const db2=mongoose.connection.useDb('db2');
const sinhvien=db2.model('student',sinhvienSchema);
module.exports=sinhvien;