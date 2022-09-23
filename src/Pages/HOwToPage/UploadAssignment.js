import React from "react";
import assignmentPic from "../../Images/Assignment2Pic.jpg";
// import AssignmentComponent from "./PastPaperComponent/Assignment1";
import AssignmentComponent from "./UploadAssignment/Assignment1";



const UploadAssignment=()=>{
    return (
        <>
            <AssignmentComponent picture={assignmentPic}/>
        </>
    )
}

export default UploadAssignment;