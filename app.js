const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const categorieRouter = require("./routes/categories.route")
const scategorieRouter = require("./routes/scategories.route")
const articleRouter = require("./routes/articles.route")

app.use(express.json())
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Hello!")

})

// cnx a la base 
mongoose.connect(process.env.DATABASECLOUD)
.then(()=>console.log("connexion à la base réussie"))
.catch(err=>{console.log("erreur de connexion à la base",err)
process.exit()
})

app.use("/api/categories", categorieRouter)
app.use("/api/scategories", scategorieRouter)
app.use("/api/articles", articleRouter)

// definir la root
app.listen(process.env.PORT ,() =>{
    console.log(`server is listen  ${process.env.PORT}`)
    })


    module.exports = app;