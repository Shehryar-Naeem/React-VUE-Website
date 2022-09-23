import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/CGPA.jpg"
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
                What is The Difference Between CGPA and EFFECTIVE CGPA
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
            <div className="left_side_all_subject_section"> 
              <SubjectLine
                title={` What is CGPA and EFFECTIVE CGPA`}
                className={`black_subject_line_text`}
              />
              <p>
                Dear Students,we will help you to understand the <strong>Difference between CGPA and Effective CGPA</strong>
              CGPA stands for Cumulative grade point average. CGPA includes the number of credit hours at VU for a letter grade even if a grade of “F” was earned. Whereas <strong>Effective CGPA</strong> is the total <strong>CGPA</strong> without counting failure courses.
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span>vue all subject mid term past paper collection</span>
            </div>
            <div className="left_side_video_download_section">
              <SubjectLine
                title={`Definition of cgpa:`}
                className={`green_subject_line_text`}
              />
              <span className="text">
                CGPA stand for  Cumulative grade point average.
              </span>
              
            </div>
            <div className="types_of_cgpa">
              <SubjectLine title={`types of cgpa`}
              className={`black_subject_line_text`}/> 
              <p>
                There are two types of <strong style={{textTransform:"uppercase"}}>cgpa</strong> in <strong style={{textTransform:"uppercase"}}>vu</strong>
              </p>
              <ol>
                <li>CGPA</li>
                <li>Effective CGPA</li>
              </ol>
              <SubjectLine title={`1. CGPA`} className={`green_subject_line_text`}/>
              <p>
              CGPA = Sum(Credit Hrs for course X Grade Point obtained in the course) / Sum(credit Hrs)
              </p>
              <SubjectLine title={`2. Effective CGPA`} className={`green_subject_line_text`}/>
              <p>Effective CGPA is the total CGPA without counting failure courses (F grade subjects).</p>
            </div>
            <div className="difference_cgpa_effectiveCgpa">
              <SubjectLine title={`difference between cpga and effective cpga`}
              className={`black_subject_line_text`}/>
              <p className="cpga_weight">CGPA is the weighted mean value of all grade points and Effective CGPA is the total CGPA without counting failure courses (F grade subjects).  </p>
              <p className="grade">CGPA includes F grade and Effective CGPA does not include F grade.</p>
              <p className="read"><strong>You can also read: </strong><span>how to calculate cpga</span></p>
              <p>(Explanation: GPA and CGPA includes the number of credit hours for a letter grade even if a grade of “F” was earned).</p>
              <p>Any improved grade will substitute “F” and “D” grades of the previous Semester for calculating CGPA but “F” and “D” grades will form part of the transcript.</p>
              <strong>Recommended past papers:</strong>
              <ul>
                <li>All Subjects Mid Term Papers solved by moaaz</li>
                <li>All Subjects Final Term Papers solved by moaaz</li>
              </ul>
              <p>We also provide ( Solved MCQs, Assignments, Short Notes, Solved Past Papers, E-Books, Recommended Books, FAQs, Help &amp; Tutorials , Short Questions Answers &amp; more).&nbsp;</p>
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
