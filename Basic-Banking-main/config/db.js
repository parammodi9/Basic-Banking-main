const mongoose = require('mongoose');

const connectDB = async()=>{

    try{

        const conn = await mongoose.connect('mongodb+srv://admin:9115Param@cluster0.yjaaz.mongodb.net/BankingDB?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
        console.log(`DB connected ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }

}

module.exports = connectDB;