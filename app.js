const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const sinhvienRoute=require('./routes/sinhvienRoute');

const app=express();

mongoose.connect('mongodb+srv://anhntkph42900:1234566@cluster0.tfolv4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("ket noi thanh cong voi server");
}).catch((err)=>{
    console.error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/',sinhvienRoute);
app.set('view engine','ejs');
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log("server dang chay o cong 5000");
});
