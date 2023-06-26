const express=require("express")
const connectDB=require("./config/connectDB")

const app=express()
app.use(express.json())
connectDB()
const port=5000

app.use("/api/contact",require("./routes/contact"))
app.listen(port,(err)=>{
err?console.log(err):console.log(`sercer is running on port ${port}`)

})