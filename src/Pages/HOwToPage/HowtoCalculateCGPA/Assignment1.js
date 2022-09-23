import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/calculatecgpa.png"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import pic from "../../../Images/assignment.jpeg";
// import picture from "../../../Images/assignment.jpeg";
// import Card from "./Card";
// import { useDispatch, useSelector } from "react-redux";
// import { showCardAction } from "../../../Action/Action";
// import RightsideCard from "./RightSIdeCards";
// import TitlePost from "./TitlePost";
// import LatestPostLinks from "./LatestPostLink";
// import TrendingSection from "./TrendingSection";
// import { Link, Route, Routes } from "react-router-dom";
// import Archive from "./Archive";
// import Comment from "./Comment";
// import axios from "axios";
import RightSide from "./RightSide";
import SubjectLine from "./SubjectLine";
// import { AssignmentData } from "./AssignmentData";
const getYear = new Date().getFullYear();
const AssignmentComponent = ({ picture }) => {
  return (
    <>
      <section className="pastpaper_container">
        <div className="left_side_Container">
          <div className="left_side">
            <div className="left_side_header">
              <div className="text_container">
                <span className="date_shower">21 july 2016</span>
                <span className="text">
                How to calculate CGPA
                </span>
              </div>
              <div className="search_btn">
                <span>A+</span>
                <span>A-</span>
                <span>
                  <i className="fa fa-print" aria-hidden="true"></i> print
                </span>
                <span>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>Email
                </span>
                <input type="text" placeholder="Find..." />
              </div>
            </div>
            <div className="left_side_what_is_cgpa"> 
              <SubjectLine
                title={` What is CGPA`}
                className={`black_subject_line_text`}
              />
              <p className="cgpa">
                <span>CGPA</span> stands for cumulative grade point average. The CGPA is a figure that reflects the grade point average for all classes you have taken and for classes for which you have received credit by means such as testing at your school/College/University.Previously we shared <span>WHAT IS THE DIFFERENCE BETWEEN CGPA AND EFFECTIVE CGPA</span>
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="img_caption">How to calculate cpga</span>
              <p className="discription">School/College/university policies vary in the way they evaluate credit for courses transferred to your current school from another. Your university's registrar will have information about your university's policy.</p>
            </div>
            <div className="left_side_how_to_calculate_your_cgpa">
              <SubjectLine
                title={`How to calculate your cgpa:`}
                className={`black_subject_line_text`}
              />
            <p className="calculation_info">you need to know the total number of grade points you have earned and the total number of credit hours you have attempted.The virtual university CGPA also follows the same pattern of calculation.</p>
            <br/>
            <p className="follow_points">Follow the below mentioned steps to calculate the CGPA:</p>
            <br/>
            <p className="step1">step 1.</p><br/>
            <p className="discription_step1">Determine the total number of credit hours you have attempted. For example, after two semesters you might have attempted 24 credit hours. This figure can be found on an official transcript from your school.</p>
            <br/>
            <br/>
            <p className="step2">step 2.</p><br/>
            <p className="discription_step2">Determine the total number of grade points you have earned. For example, you might have earned 72 grade points in two semesters. As with the number of credit hours attempted, this figure can be found on your school transcript.</p>
            <br/>
            <br/>
            <p className="step3">step 3.</p><br/>
            <p className="discription_step3">Enter the number of grade points earned and credit hours attempted into the CGPA formula: Grade points earned divided by credit hours attempted equals cumulative grade point average. Using the example figures, this would be: 72 grade points earned divided by 24 credit hours attempted equals cumulative grade point average.</p>
            <br/>
            <br/>
            <p className="step4">step 4.</p><br/>
            <p className="discription_step4">Enter the number of grade points earned and credit hours attempted into the CGPA formula: Grade points earned divided by credit hours attempted equals cumulative grade point average. Using the example figures, this would be: 72 grade points earned divided by 24 credit hours attempted equals cumulative grade point average.</p>
            <br/>
            <br/>
            <b className="remember">Remember</b><br/>
            <p className="discription_remember">The CGPA calculation tool provided here was designed to help you forecast your average and plan its progress. Calculations are strictly for information purposes. The responsibility for obtaining satisfactory grades in each of your courses and thus maintaining the required GPA is entirely yours. We encourage you to also use this tool to determine your eligibility for scholarships and bursaries and for graduate programs, or to chart a course for achieving your personal goals.</p>
            <br/>
            <br/>
            <b style={{fontSize:"1.2rem",lineHeight:"2"}}>Here we have the formula as well</b>
            <br/>
            <br/>
            <p>CGPA=SUMMATION(summation)</p>
            <br/>
            <br/>
            <p>(OF NUMBER OF CREDITS OF THE ith course of the</p>
            <br/>
            <br/>
            <p>nth semester and grade points of the ith course of the nth semester) /summation (summation) number of credits of the ith course of the n th semester</p>
            </div>
            <div className="left_side_what_is_gpa">
              <SubjectLine title={`what is gpa`}
              className={`black_subject_line_text`}/>
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>GPA is the ratio of the sum of the products of the number of credits of courses registered and the grade points corresponding to the grades scored in those courses, taken for all the courses, to the sum of the number of credits of all the courses in the semester.</p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>CGPA will be calculated in a similar manner, considering all the courses enrolled from first semester</p>
              <br/>
              <br/>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}><b>Restriction</b>The CGPA does not form part of the student record for the Faculty of Medicine and most graduate studies programs</p>


              <p className="important_note">For important helping material related to the subject ( <span>Solved MCQs, Assignments, Short Notes, Solved Past Papers, </span> , E-Books, Recommended Books, <span>FAQs, Help & Tutorials Short Questions Answers</span> & more). You must view all the featured discussion in this subject group.</p>
            </div>
          </div>
          <div className="left_side_social_side">
            <span>share to:</span>
            <div className="left_side_social_btn">
              <span className="like_btn">Like</span>
              <span className="tweet_btn">tweet</span>
              <span className="toggle">
                share
                <ul>
                  <li>facebook</li>
                  <li>twiter</li>
                  <li>print</li>
                  <li>Email</li>
                  <li>printerest</li>
                  <li>Gmail</li>
                  <li>linkedin</li>
                  <li>more</li>
                  <li>item``````</li>
                </ul>
              </span>
              <span className="status_show">12</span>
            </div>
          </div>

          <div className="slider">
            <div className="slider_topic">
              <span className="slider_text">zarra ye bhee check karein</span>
              <span className="slider_bar"></span>
            </div>
            <div className="carousel_container">
              <SliderComp />
            </div>
          </div>

          <div className="unknown_sec">
            <h1>Unknown</h1>
            <p>
              {" "}
              Your number one source for Virtual University Assignments
              Solution, Mid-Term/Final-Term Papers, Quiz, GDB, Final Projects
              And Much More For VU Students. We’re dedicated to giving you the
              very best of Help, with a focus on three Features, ie Assignment
              Solutions, Past Papers and Final Projects.
            </p>
            <ul>
              <li>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li><i class="fa fa-google-plus-official" aria-hidden="true"></i></li>
              <li><i class="fa fa-pinterest-p" aria-hidden="true"></i></li>
            </ul>
          </div>
        </div>
        <RightSide getYear={getYear} picture={picture} />
      </section>
    </>
  );
};

export default AssignmentComponent;
