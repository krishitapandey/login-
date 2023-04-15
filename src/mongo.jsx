const  mongoose =require('mongoose');
const DB ="mongodb+srv://krishita:kiskid123@cluster0.ygfl7qi.mongodb.net/Linkedin?retryWrites=true&w=majority";

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then (()=>
{
  console.log("connect")
})

const newSchema =new mongoose.Schema(
    {
        email:
        {
            type:String,
            required:true
        },
        password:
        {
            type:String,
            required:true
        }
    }
)

//define a collection of data and export and model is a keyboard to define our collection
const User = mongoose.model("User ",newSchema)
module.exports =User 