const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
//uri = "mongodb+srv://sau:JX2ppXt7t7TMa6YG@cluster0.d4vbz2e.mongodb.net/Cluster0?retryWrites=true&w=majority";
const connectdb = (uri)=>{
    console.log("connected");
return mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,

});
}
module.exports = connectdb;