const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const ejs = require("ejs")
const server = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

dotenv.config()

server.use(cors())
server.use(express.static(path.join(__dirname,"public")))
server.use(bodyParser.urlencoded({extended:false}));
server.use(cookieParser())
PORT = process.env.PORT
server.set("view engine","ejs")

server.get("/", (req,res)=>{
    res.render("index")
})
server.listen(PORT, (err)=>{
    if(err){
        console.log("cannot connect");
    }console.log(`server is running on ${PORT}`);
})