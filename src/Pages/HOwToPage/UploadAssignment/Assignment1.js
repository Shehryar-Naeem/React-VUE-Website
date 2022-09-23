import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/upload.png";
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
                  How to upload an assignment in{" "}
                  <span style={{ textTransform: "uppercase" }}>vulms</span> -
                  Tutorials
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
                title={`How to upload assignment in vlums`}
                className={`black_subject_line_text`}
              />
              <p>
                Here we have <b>Complete tutorial </b> of{" "}
                <b>How to Upload Assignment</b> solution in <b>VULMS.</b> This
                Tutorial of New Students who have just taken admission in
                Virtual University of Pakistan and don't know how to submit
                their assignment solution in VULMS.
              </p>
              <p>
                Don't worry we got you covered. Today we will discuss step by
                step instructions of{" "}
                <u>how to upload your assignment solution in VULMS</u>
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span>vue all subject mid term past paper collection</span>
              <p className="submit_announced">
                But First, when your assignment is announced to be submitted,
                first you will need to download the instructions document,
                explaining how to prepare and solve your assignment. Previously
                we shared{" "}
                <span>How to Make a Assignment - Instructions and Help</span>{" "}
                How To Upload Assignment in VULMS - Tutorial | Virtual Study
                Solutions
              </p>
            </div>
            <div className="left_side_upload_tutorial">
              <SubjectLine
                title={`step by step tutorial - to upload assignment to vulms`}
                className={`black_subject_line_text`}
              />
              <SubjectLine
                title={`step-1:`}
                className={`green_subject_line_text`}
              />
              <ul>
                <li>
                  Open web browser and enter <span>www.vulms.vu.edu.pk</span>
                </li>
                <li>
                  Enter Your Roll Number and Student ID and password given to
                  you at the time of admission.{" "}
                </li>
              </ul>
              <div className="align_img">
                <img src={cgpaImage} alt="step" />
              </div>
              <p className="pic_caption">
                How to upload an assginment in vulms - step 1
              </p>
              <SubjectLine
                title={`step 2:`}
                className={`green_subject_line_text`}
              />
              <ul>
                <li>
                  After successfully&nbsp;login to VULMS, you can see the
                  courses you have in the Semester.
                </li>
                <li>
                  Click the Assignment Tab of the Course which has a
                  notification of new assignment.
                </li>
              </ul>
              <div className="align_img">
                <img src={cgpaImage} alt="step" />
              </div>
              <p className="pic_caption">
                How to upload an assginment in vulms - step 1
              </p>
              <SubjectLine
                title={`step 3:`}
                className={`green_subject_line_text`}
              />
              <p className="click_info">
                Now You Click on <b>"Submit"</b> Button show the pic below
              </p>
              <div className="align_img">
                <img src={cgpaImage} alt="step" />
              </div>
              <p className="pic_caption">
                How to upload an assginment in vulms - step 1
              </p>
              <SubjectLine title={`step 4:`} 
              className={`green_subject_line_text`}/>
                  <p className="click_info">
                Now You Click <b>"Browse"</b> Button and then select the file from your computer's local drive.
              </p>
              <div className="align_img">
                <img src={cgpaImage} alt="step" />
              </div>
              <p className="pic_caption">
                How to upload an assginment in vulms - step 1
              </p>
              <SubjectLine title={`step 5:`}
              className={`green_subject_line_text`}/>
              <p className="click_info">
                After selecting the file. you click the  <b>"Submit it"</b> button to finally submit the solution File. Then a Message <b>"Assignment Submitted Successfully"</b> will be shown.
              </p>
              <div className="align_img">
                <img src={cgpaImage} alt="step" />
              </div>
              <p className="pic_caption">
                How to upload an assginment in vulms - step 1
              </p>
            </div>
            <div className="recommended_tutorials">
              <SubjectLine
                title={`Recommended tutorials:`}
                className={`black_subject_line_text`}
              />
              <ul>
                <li>What is Network Topology and its Types - Complete tutorial</li>
                <li>DevC++ installation and Usage Complete Guidelines </li>
                <li>C++ Complete Tutorial</li>
              </ul>
              <p>You can also Download <span>(Solved MCQs, Short Notes, Solved Past Papers</span>, E-Books, Recommended Books, FAQs,Short Question Answer & more).</p>
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
