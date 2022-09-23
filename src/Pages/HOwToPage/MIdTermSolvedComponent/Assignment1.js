import React from "react";
import SliderComp from "./ReactSlider";
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
                  All subject mid term past papers collection
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
                title={`all subject mid term past paper collection`}
                className={`black_subject_line_text`}
              />
              <p className="download_instruction">
                You can read or download below, all subjects solved VU mid term
                paper collection. for virtual university students of pakistan.{" "}
                <span>vue all subject mid term past paper</span> collection for
                students.
              </p>
              <div className="img_container">
                <img src={picture} alt="assignment" />
              </div>
              <span>vue all subject mid term past paper collection</span>
            </div>
            <div className="left_side_video_download_section">
              <SubjectLine
                title={`instruction for mid term paper`}
                className={`green_subject_line_text`}
              />
              <span className="text">
                All subject mid term papers collection by virtual solution
                excellence
              </span>
              <ul className="list_container">
                <li>Make the Ms.Word File On Desktop</li>
                <li>Then go to The end of The Subjective Questions.</li>
                <li>
                  Copy and Paste All Subjective Questions to the word file one
                  by one .
                </li>
                <li>Puts some space between Questions for the Answers.</li>
                <li>
                  After that reading the Questions 3 to 4 time to keep in mind
                  that which Questions has come.
                </li>
                <li>Now start Solving MCQs.</li>
                <li>
                  In MCQs There is always Answer of your Questions if u found
                  any MCQs related to Your Questions Copy it and its correct
                  option and paste it under the question.
                </li>
                <li>
                  So with this Process your MCQ’s and Some of Subjective Answer
                  will solved in the same time and You don’t have to find them
                  again and again while solving MCQs.
                </li>
                <li>Now Solve rest of the Paper with your own mind.</li>
                <li>be Focused. You will surely get Maximum marks.</li>
              </ul>
              <p className="note_Sec">
                <span>Please Note:</span> Don't Make MS.Word File in those
                papers in which you don't allow to use MS.Word.
              </p>
              <div className="recommenended">
                <span className="recom_sec">Recommenended:</span>
                <span className="link">
                  How to avoid plagiarism or zero marks in Assignments
                </span>
              </div>
              <p className="disc">
                You Can Download Solved Mid Term Papers, Short Notes, Lecture
                Wise Questions Answers Files, Solved MCQs, Solved Quizzes ,
                Solved Mid Term Subjective Papers , Solved Mid Term Objective
                Papers From Virtual Study Solutions For Preparation Mid Term
                Papers.
              </p>
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
