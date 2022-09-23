import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/UseSoftware.png";
import loomVideo from "../../../Images/loom.mp4"
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
                  How to use Virtual University Exam Software
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
            <div className="left_side_use_exam_software">
              <SubjectLine
                title={`How to use the exam software`}
                className={`black_subject_line_text`}
              />
              <p className="guide_intro_sec">
              Dear Students, Here You can read complete guide of how to use Virtual University Exam software. This Guide is for Newly inducted Students<span>. Previously we shared VU Overseas Exam Software Installation Guideline</span>
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="caption_pic">How to use virtual University exam software</span>
              <p className="recommended"> <b>Recommended : </b><span>CS201 VIVA Preparation Helping Material</span></p>
            </div>
            <div className="left_side_duration_of_paper">
              <SubjectLine
                title={`duration of paper`}
                className={`black_subject_line_text`}
              />
              <ul>
                <li>
                  Mid term : 60 minutes
                </li>
                <li>
                  Final term : 120 minutes
                </li>
              </ul>
              <p className="login_slip">You need to Login the exam software by entering Student ID and Exam Password(mention on your "Exam Entrance Slip"</p>
              <SubjectLine
                title={`Please Note:`}  
                className={`green_subject_line_text`}
              />
              <ul>
                <li>
                Exam Software shall automatically close when the prescribed time is over. You&nbsp;are advised&nbsp;to&nbsp;save your data frequently in order to prevent any data loss.&nbsp;
                </li>
                <li>
                In case you are asked by the examiner to close your paper on technical grounds,&nbsp;you must&nbsp;close it through browser close button [x] and NOT through the “Finish”button.
                </li>
              </ul>
              <SubjectLine
                title={`warning:`}
                className={`green_subject_line_text`}
              />
              <p className="avoid_info">
                In order to avoid any kind of data loss or other problem, take care of the following
              </p>
              <ul className="avoid_points">
                <li>Do not close the browser window.</li>
                <li>Do not press browser back button. Instead, use the exam software navigation buttons. </li>
              </ul>
            </div>
            <div className="left_side_software_demo">
            <SubjectLine
                title={`Virtual University exam software demo`}
                className={`black_subject_line_text`}
              />
              <div className="video_of_use_software"> 

              <video controls poster={cgpaImage} >
                <source src={loomVideo}></source>
              </video>
              </div>
              <p className="thanks_notes">If this was helpful Please share with your friends. Thank you</p>
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
                  <li>item</li>
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
              <li>
                <i class="fa fa-google-plus-official" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
        <RightSide getYear={getYear} picture={picture} />
      </section>
    </>
  );
};

export default AssignmentComponent;
