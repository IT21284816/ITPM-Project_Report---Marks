const express=require("express");
const router = express.Router();
const students=require("../models/studSchema");


//send data post method
router.post("/addstud", async (req, res) => {
    const {
        groupNumber,
        report01Marks,
        report01Feedback,
        proposalMarks,
        proposalFeedback,
        report02Marks,
        report02Feedback,
        logBookMarks,
        logBookFeedback,
        finalReportMarks,
        finalReportFeedback
    } = req.body;

    // Check if any required field is missing
    if (!groupNumber || !report01Marks || !report01Feedback || !proposalMarks || !proposalFeedback || !report02Marks || !report02Feedback || !logBookMarks || !logBookFeedback || !finalReportMarks || !finalReportFeedback) {
        return res.status(422).json("Please fill up all the data.");
    }

    try {
        // Check if the student already exists based on groupNumber
        const prestud = await students.findOne({ groupNumber: groupNumber });

        if (prestud) {
            return res.status(422).json("This student is already present.");
        } else {
            const addstudent = new students({
                groupNumber,
                report01Marks,
                report01Feedback,
                proposalMarks,
                proposalFeedback,
                report02Marks,
                report02Feedback,
                logBookMarks,
                logBookFeedback,
                finalReportMarks,
                finalReportFeedback
            });

            await addstudent.save();
            return res.status(201).json(addstudent);
        }
    } catch (err) {
        return res.status(422).json(err);
    }
});


//get student Data
router.get("/getstud", async(req,res)=>{
    try{
        const studdata= await students.find();
        res.status(201).json(studdata);
    }catch(err){
        res.status(422).json(err)
    }
})

//get signle student Data
router.get("/getstud/:id", async(req,res)=>{
    try{
       const {id}=req.params;
       const singlestud=await students.findById({_id:id});
       res.status(201).json(singlestud);
    }catch(err){
        res.status(422).json(err);
    }
})


//Delete student Data
router.delete("/deletestud/:id", async(req,res)=>{
    try{
       const {id} = req.params;
       const deltestud=await students.findByIdAndDelete({_id:id});
       res.status(201).json(deltestud);
    }catch(err){
        res.status(422).json(err);
    }
})

// update student data
router.patch("/updatestud/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatestud = await students.findByIdAndUpdate(id,req.body,{
            new:true
        });

        res.status(201).json(updatestud);

    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports=router;