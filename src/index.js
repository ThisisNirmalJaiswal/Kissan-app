const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route.js")
const app = express();

app.use(express.json());


mongoose.set("strictQuery", true);

const URL = "mongodb+srv://nirmaljasval:8o1g7W6bqoshvXoN@cluster0.cv9nolo.mongodb.net/Kissan-app";

mongoose.connect(URL, {useNewUrlParser:true})
.then(()=>console.log("GO mongo GO!"))
.catch((err)=>console.log("ohh no I can't do it"));

app.use("/", route);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Your app is running on PORT "+ (3000||process.env.PORT));
});
