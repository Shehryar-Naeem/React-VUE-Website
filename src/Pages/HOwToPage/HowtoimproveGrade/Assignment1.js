import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/improvegrade.jpg";
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
                  How to improve your grades after a Poor Midterm Exam
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
            <div className="left_side_improve_marks">
              <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                Dear students, today we will discuss how you can{" "}
                <b>improve your grades after a Poor mid term exam</b>. First of
                all sit back and relax. Now is the time when you should be calm
                and prepare a plan, get help from friends or classmates, talk to
                your teacher and focus all your efforts and energy toward study
                and good grades in your next exam.
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="caption_pic">
                How to get good grades after poor mid term exam
              </span>
            </div>
            <div className="left_side_improve_grade_after_midterm">
              <SubjectLine
                title={`improve your grade after a poor midterm exam.`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0",
                }}
              >
                Here is list of Tasks You should do after a Poor Mid Term Exam
                to improve your grades in Final Term Exam.
              </p>
              <ol>
                <li>Be Calm and Focus on Future Success.</li>
                <li>
                  Manage Your Routine to Double Study Time.Studying only
                  Remainig Book is not a Solution.
                </li>
                <li>Review the Mid Term Exam Questions and Concepts.</li>
                <li>
                  Make a Time Management Plan to Complete the Course in Time.
                </li>
                <li>Get Help from Friends, coursemates and Instructors.</li>
                <li>Discuss Paper Pattern with Your Course Instructor.</li>
              </ol>
              <br />
              <p className="calculation">
                <b style={{ textDecoration: "underline" }}>Also Read : </b>
                <span>How to Calculate your CGPA</span>
              </p>
              <SubjectLine
                title={`Be claim and focus on future success`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Worrying too much about the poor grades will only cause you to
                loose time and focus on your future success. Learn from your
                mistakes. Calculate how much time you spent studying before
                midterm and prepare a plan to get good grades in your coming
                final term exam.
              </p>
              <SubjectLine
                title={`Manage Your Routine to double study time`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                If you get <u>poor grades in your mid term exam</u>, its obvious
                that the effort you did to prepare for mid term exam wasn't
                enough. Its high time you need to manage your daily routine to
                double the recommended time for studying.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                After getting poor grades in mid term exam, many students start
                assuming that they didn't study enough but trust me, just
                feeling pity on yourself isn't going to help. Poor grades should
                be a wake up call for you.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Time management is now very important for you at this point. You
                have to find more time to dedicate to your study in order to
                achieve good grades in your coming final term exam.
              </p>
              <SubjectLine
                title={`studying only remaining book is not a solution`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                After getting poor grades in mid term exam many students tend to
                choose to study the remaining book with more focus. But to get
                good grades in final exam you need to study and understand all
                the course material.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Let me explain futher, the poor grades in mid term is pointing
                toward lack of understanding of half course. Jumping to the
                remaining course topics without understaning the previous
                fundamental course topics will not result in good grades in
                final term.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                It is as hard as it sounds, without falling behind your course
                schedule you should not waste anymore time and start studying
                right away.
              </p>
              <p className="difference">
                Also Read :{" "}
                <span>Difference between CGPA and Effective CGPA</span>
              </p>
              <br />
              <SubjectLine
                title={`Review the mid term exam questions and concepts`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Now you need to analyze what went wrong on the Mid term Exam.
                For that you should review questions and concepts on
                the&nbsp;Mid term exam. Although its not a easy thing to do
                replaying the whole process which may remind you of your poor
                preparation for Mid term exam. Be positive about it.
              </p>
              <br />
              <SubjectLine
                title={`Make a time management plan to complete the course in time`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Practically speaking, Making a time management plan is not
                always easy specially if you are doing it after getting poor
                grades in midterm exam.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Your mind could trick you into thinking that if you couldn't get
                good grades in half course how could you now be able to get high
                grades in full course in half time. Don't worry be calm.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Make a time management plan, draw a table and choose reading
                time, study time and practise time in your daily routine and
                stick to the schedule.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                You need to spend at least twice the time to study your course
                material
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Read the complete course and make notes. Review your lecture
                notes, perform practice excersices, and answer sample questions.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                During your Practice time, solve sample Questions similar to
                your mid term exam i.e., Past Papers or MCQs.
              </p>
              <p className="difference">
                Also Read :{" "}
                <span>How to select and complete final projects</span>
              </p>
              <br />
              <SubjectLine
                title={`Get help from friends, coursemates and instructors`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Next task for you is to get required help from your friend or
                your coursemate who got <u>good grades in midterm exam</u>. Help
                may also include speaking to other students to find out how they
                got successful in getting good grades.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Find and download past papers from our blog to practise MCQs and
                Long / short Question Answers.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Discuss difficult topics with your Course Instructor. Don't
                hesitate to ask questions to clear your concepts.
              </p>
              <br />
              <SubjectLine
                title={`discuss paper pattren with your course instructor`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Sometimes Course Instructor wants specific answer or values. If
                you failed to mention that specific answer or values that might
                explain your low grades in midterm Exam. Always write to the
                point answers , be specific in what you want to explain. Show
                interest in the topics and ask questions.
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Keep studying and focus your energy and time to get high grades
                in your coming Final Term exams.&nbsp;
              </p>
              <p
                style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Hope this article was helpfull. If You have any Questions share
                with us in comments section below.
              </p>
              <p  style={{
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}>Wish you Good Luck for your next Exam. Thank You.</p>
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
