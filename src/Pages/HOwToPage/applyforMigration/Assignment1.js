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
                  Apply for Migration and Transfer in Virtual University (VU)
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
            <div className="left_side_how_to_solve_MCQs">
              <SubjectLine
                title={`How to Solve msqs fast and correct`}
                className={`black_subject_line_text`}
              />
              <p className="learn_fast">
              Dear Students, Today we will learn here <b>how to solve MCQ's</b> Fast enough with <b>Maximum Possible Correct Answers</b>. In this Article we will discuss some very important points related to Examination. So Read with full attention. First get yourself out from the bubble of desperate times desperate measures. You should have a very clear picture of how you are going to handle your exam before the exam.
              </p>
              <div className="align_img">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <p className="pic_caption">vue all subject mid term past paper collection</p>
              <p className="question">As You Know, In MCQ type questions it’s not the question that makes the examination tough it’s the 4 options that create chaos in our mind. We all have enough theory knowledge to crack any exam but as the trend has changed so, we need objective approach to solve objective type problems.</p>
              <p className="recommended"><b>Recommended : </b> <span>MGT101 Final Term Papers spring 2016</span></p>
            </div>
            <div className="left_side_guideline_to_solve_mcqs">
              <SubjectLine
                title={`step by step guideline tot solve mcqs fast`}
                className={`black_subject_line_text`}
              />
              <p className="important_discuss">In this tutorial we will discuss following important points:</p>
              <ul>
                <li>Think First Act later</li>
                <li>Method of elimination</li>
                <li>don't see the options yet</li>
                <li>let me fill the blanks</li>
                <li>combined approach</li>
              </ul>
            </div>
            <div className="left_side_think_first_act_later">
              <SubjectLine
                title={`think first act later`}
                className={`black_subject_line_text`}
              />
              <p className="discription">Inside the examination hall after reading a particular question. Few questions often come in our mind. Is this topic is from outside the syllabus? Do I have heard of this topic/term before? , Which subject is this question from? Let’s say we already have hundreds of question to solve in the&nbsp;examination and&nbsp;our mind creating questions after&nbsp;reading a question is not good. To handle this type of problem make a habit or train your brain in such a way that it asks the questions first after reading a particular MCQ rather than questions coming into your brain so, what are the questions you need to ask? First ask yourself just after reading the question which subject this question is from? Once you get the answer ask again which topic? Now after answering these two questions your brain will only look for answers from the topics of this subject only rather than throwing the stones in dark.</p>
              <p className="recommended"><b>Recommended : </b><span>MGT101 solved material mega folder</span></p>
            </div>
            <div className="left_side_method_of_eliminate">
            <SubjectLine
                title={`method of eliminate`}
                className={`black_subject_line_text`}
              />
              <p className="discription">In all almost all objective type questions two options can be eliminated after reading the question. The approach is simple , read the question once then read all the four options carefully then pick out two options that can’t be answer of the question. If we eliminate two options we have to search for answer among the remaining two only.</p>
              <p className="recommended"><b>Recommended : </b><span>MGT101 Current and past final term paper 2016</span></p>
            </div>
            <div className="left_side_dont_see_option_yet">
            <SubjectLine
                title={`Don't see the option yet`}
                className={`black_subject_line_text`}
              />
              <p className="discription">In this approach first read the question carefully. Then without reading the options try to think of an answer. If a topic surround the questions comes into your mind in the very first moment after reading the question now, see the options and look for the option that matches with your mind picked answer/topic. How this approach helps? These days objective questions and there options are designed in such a way that even if you have knowledge of that particular question after reading the all four options you will get confused. And this confusion will create question in your mind Do I really have studied this topic in-depth?</p>
              <p className="recommended"><b>Recommended : </b><span>MGT101 Final term solved papers mega collection</span></p>
            </div>
            <div className="left_side_let_me_fill_the_blanks">
            <SubjectLine
                title={`let me fill the blanks`}
                className={`black_subject_line_text`}
              />
              <p className="discription">In this approach try to consider a particular question as a fill in the blank type question rather than a MCQ. Read the question carefully then virtually fill answer to this question in your brain. Now read the options and try to pick one. You may think that this approach is similar to Don’t see the options yet but it’s slightly more concentrated towards the correct option.</p>
              <p className="recommended"><b>Recommended : </b><span>MGT101 Final term solved papers mega collection</span></p>
            </div>
            <div className="left_side_combined_approach">
            <SubjectLine
                title={`combined approach`}
                className={`black_subject_line_text`}
              />
              <p className="discription">
              In this approach of solving MCQ’s you need to apply all the weapons you have. First use Don’t see the options yet then apply Method of elimination. By using combined approach you will end up with one option rather than two in case of only applying method of elimination.
              <br/>
              <br/>
              Practice few mcq’s based upon the 5 approaches and judge with approach(s) works best for you and try to apply them in your final exam. Do let us know in the comments below how it goes
              </p>
              <p className="recommended"><b>Also Read : </b><span>MGT101 Final term solved papers mega collection</span></p>


              <p className="discription2">You Can Download <b>Solved Mid/Final Term Papers</b>, Short Notes, Lecture Wise Questions Answers Files, <b>Solved MCQs</b>, Solved Quizzes ,<b> Solved Mid/Final Term Subjective Papers</b> , <b>Solved Mid Term Objective Papers</b> From This Discussion For <b>Preparation Mid/Final Term Papers.</b><br/><br/>For important helping material related to the subject ( <span>Solved MCQs, Assignment, Short Notes, Solved Past papers</span> E-books, Recommended Books <span>FAQs, Help & Tutorials, Short Questions Answer</span> & more). Your must view all the featured discussion in this subject group </p>
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
