const express = require('express');
const router= express.Router();
const scategorie = require('../models/scategorie');


router.post("/",async(req,res) => {

    const {nomscategorie,imagescat,categorieID}=req.body
    try {
       const scat1= new scategorie({nomscategorie:nomscategorie,imagescat:imagescat,categorieID:categorieID}); 
       await scat1.save();
       res.status(200).json(scat1)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
})

router.get("/",async(req,res) => {
    try {
        const scat=  await scategorie.find()
        res.status(200).json(scat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.get("/:id",async(req,res) => {
    try {
         const scat= await scategorie.findById(req.params.id)
        res.status(200).json(scat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

router.delete("/:id",async(req,res) => {
    try {
        await scategorie.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"suppression effectuée avec succée"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.put("/:id",async(req,res)=>{
    try {
        const scat=await scategorie.findByIdAndUpdate(
        {"_id":req.params.id, },
        { $set:req.body, } ,
        
    { new: true }
    )
    res.status(200).json(scat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
    
    }) 
module.exports=router;