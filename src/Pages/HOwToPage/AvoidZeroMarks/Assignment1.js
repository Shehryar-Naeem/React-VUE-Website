import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/avoidplagiarism.png";
// import loomVideo from "../../../Images/loom.mp4";
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
                  How to avoid plagiarism or zero marks in assignments
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
            <div className="left_side_avoid_getting_zero_marks">
              <SubjectLine
                title={`How to avoid getting zero marks in assignment`}
                className={`black_subject_line_text`}
              />
              <p className="avoid_plagiarism">
                Dear Students, In this article we will discuss some very
                <b>useful tips to</b>
                <b>avoid&nbsp;Plagiarism&nbsp;or Zero marks</b> by instructor{" "}
                <b>in Assignments</b>. As we all know Many students do hard
                worker in making their own assignments but they are getting Zero
                Marks.&nbsp;
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="caption_pic">
                How to avoid plagiarism or zero marks in Assignment
              </span>
              <p className="recommended">
                {" "}
                <b>Recommended : </b>
                <span>Child Friendly Tools to Teach Programming to kids</span>
              </p>
            </div>
            <div className="left_side_theise_step">
              <SubjectLine
                title={`follow thesis step`}
                className={`black_subject_line_text`}
              />
              <p className="note">
                You can avoid this (Cheating, plagiarism or zero marks) by using
                following techniques
              </p>

              <p className="recommended">
                {" "}
                <b>Recommended : </b>
                <span>Child Friendly Tools to Teach Programming to kids</span>
              </p>
              <p className="issue_of_plagiarism">
                Always trust in Allah and do your own work honestly. hopefully
                there will be no issue of Plagiarism or Zero marks.
              </p>
              <ul>
                <li>
                  Try to use unique kind of formatting for your assignment.
                </li>
                <li>
                  Try to rephrase the sentences in your own word rather than
                  copy pasting from handouts or internet source or other
                  student's solved assignment.
                </li>
                <li>
                  Try to use correct and suitable synonyms for the typical words
                  used in definition or explanation taken from handouts, books
                  or any other source...
                </li>
                <li>
                  Try to Rephrase the definitions, Explanation &amp; sentences
                  in such a way that every 5th word should not be similar to the
                  handouts or any other source. You can use synonyms also.
                </li>
                <li>
                  After completing Assignment , Right click on Assignment file
                  and click on "properties" then click on "Summary" and make
                  sure that its your name is written in "Author field"
                </li>
              </ul>
              <p className="good_luck_wishes">
                Wish You Good Luck in Your Studies. Study Hard. Hope you find
                above information useful then remember me in your prayers.
              </p>
              <p className="recommended">
                <b>Share by : </b>
                <span>Hassan</span>
              </p>
              <p className="recommended">
                {" "}
                <b>Recommended : </b>
                <span>How to download and install winrar complete guide</span>
              </p>
              <br/>
              <p className="follow_info">If You liked reading this article Please Share it with your friends. You can also like our Facebook&nbsp;Page or Subscribe Us below for Updates. Thank You.</p>
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
