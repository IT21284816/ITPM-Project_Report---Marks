const mongoose= require("mongoose");
const studSchema = new mongoose.Schema({
    groupNumber:{
        type:String,
        required:true
    },
    report01Marks:{
        type:String,
        required:true
    },
    report01Feedback:{
        type:String,
        required:true
    },
    proposalMarks:{
        type:String,
        required:true
    },
    proposalFeedback:{
        type:String,
        required:true
    },
    report02Marks:{
        type:String,
        required:true
    },
    report02Feedback:{
        type:String,
        required:true
    },
    logBookMarks:{
        type:String,
        required:true
    },
    logBookFeedback:{
        type:String,
        required:true
    },
    finalReportMarks:{
        type:String,
        required:true
    },
    finalReportFeedback:{
        type:String,
        required:true
    }

   
});
const students=new mongoose.model("students",studSchema);
module.exports=students;
