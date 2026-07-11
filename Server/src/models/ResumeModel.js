const mongoose = require("mongoose");
const ResumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    originalFileName: {
        type: String,
        required: true
    },
    filePath: {
        type : String,
        required: true
    },
    extractedText: {
        type: String,
    },
    analysis: {
        atsScore: Number,
        missingSkills: [],
        suggestions: []
    }},
    {
        timestamps: true
    }
);

const Resume = mongoose.model("Resume", ResumeSchema);
module.exports = Resume