import React from "react";
import assignmentPic from "../../Images/assignment.jpeg"

const getYear = new Date().getFullYear();
const Assignmentone= "Assignment 1"
const AssignmentOne = () => {
  return (
    <>
      <section className="assignment_one_container">
        <div className="left_side">
          <div className="left_side_top">
            <div className="left_side_top_text_btn">
              <span className="left_side_top_text">
                Articles By "Asssignment No 1 Solution 1"
              </span>
              <span className="left_side_top_dropdown_btn"></span>
            </div>
            <div className="left_side_top_logo">
              <span className="left_side_bar"></span>
              <div  className="left_side_btn">
                <span>
                  <i class="fa fa-th" aria-hidden="true"></i>
                </span>
                <span>
                  <i class="fa fa-th-list" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="grid_container">
            <div className="grid_card">
              <img src={assignmentPic} alt="assignment pic"/>
              <p>CS501 {Assignmentone} Solution spirng {getYear}</p>
            </div>
            <div className="grid_card">
              <img src={assignmentPic} alt="assignment pic"/>
              <p>CS501 {Assignmentone} Solution spirng {getYear}</p>
            </div>
            <div className="grid_card">
              <img src={assignmentPic} alt="assignment pic"/>
              <p>CS501 {Assignmentone} Solution spirng {getYear}</p>
            </div>
            <div className="grid_card">
              <img src={assignmentPic} alt="assignment pic"/>
              <p>CS501 {Assignmentone} Solution spirng {getYear}</p>
            </div>
            <div className="grid_card">
              <img src={assignmentPic} alt="assignment pic"/>
              <p>CS501 {Assignmentone} Solution spirng {getYear}</p>
            </div>
            <div className="grid_card">
              <img src={assignmentPic} alt="assignment pic"/>
              <p>CS501 {Assignmentone} Solution spirng {getYear}</p>
            </div>
          </div>
        </div>
        <div className="right_side">
          <div className="right_side_top">
            <span className="right_side_top_text">spirng {getYear} Assignment</span>
            <span className="right_side_top_bar"></span>
          </div>
          <div className="right_card_container">
            <img src={assignmentPic} alt="AssignmentOic"/>
            <span>All subjects Assignment Solution spring {getYear}</span>
          </div>
          <div className="right_side_top">
            <span className="right_side_top_text">spirng {getYear} Assignment</span>
            <span className="right_side_top_bar"></span>
          </div>
          <div className="right_card_container">
            <img src={assignmentPic} alt="AssignmentOic"/>
            <span>All subjects Assignment Solution spring {getYear}</span>
          </div>
          <div className="right_side_top">
            <span className="right_side_top_text">spirng {getYear} Assignment</span>
            <span className="right_side_top_bar"></span>
          </div>
          <div className="right_card_container">
            <img src={assignmentPic} alt="AssignmentOic"/>
            <span>All subjects Assignment Solution spring {getYear}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentOne;
