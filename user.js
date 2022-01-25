const mongoose = require("mongoose");
const conn_str = "mongodb://sushma123:sushma123@cluster0-shard-00-00.mnx3y.mongodb.net:27017,cluster0-shard-00-01.mnx3y.mongodb.net:27017,cluster0-shard-00-02.mnx3y.mongodb.net:27017/tcet-esd?ssl=true&replicaSet=atlas-wfxgoo-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected successfully..."))
.catch( (error) => console.log(error) );


const userSchema = new mongoose.Schema({
    name: String,
	age: Number,
	city: String
})

const userObject = new mongoose.model("users", userSchema);
exports.User = userObject;