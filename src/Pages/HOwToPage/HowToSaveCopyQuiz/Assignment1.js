import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/quizPic1.png";
import quizpic2 from "../../../Images/quiz2.png"
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
                  How to Copy/Save/Solve Quiz Questions from VULMS - Tutorial
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
            <div className="left_side_save_and_copy_quiz">
              <SubjectLine
                title={`How to copy/save/solve quiz question from vulms`}
                className={`black_subject_line_text`}
              />
            <p className="save_copy_info">
              Dear Virtual University Students, Here we have Complete tutorial of <b>How to Copy/Save/Solve Quiz Questions from VULMS</b> with 3 different methods. As You may know VULMS blocked the option of Copying Quiz Questions. Don't worry follow the steps given below. previously we shared <span>How to Calculate CGPA</span>
              </p>
              <p className="quiz_note">We do not recommended to use this method in mid term grand quiz of spring 2020</p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="caption_pic">
                How to copy/save/ Quiz Question from VULMS
              </span>
              <p style={{color:"#38761D",fontSize:"1.2rem",fontWeight:"bold",lineHeight:"3"}}>Method 1:</p>
              <p style={{lineHeight:"3",fontSize:"1.2rem"}}>You can download a Extension on Chrome Web Store.</p>
              <p style={{lineHeight:"3",fontSize:"1.2rem"}}>Extension Name is : <b>"VU Allow Quiz Copy</b></p>
              <p style={{lineHeight:"3",fontSize:"1.2rem"}}> Or you can install it is</p>
              <p className="link">https://chrome.google.com/webstore/detail/vu-allow-quiz-copy</p>
            </div>
            <div className="left_side_save_and_copy_quiz_pattrem">
              <SubjectLine
                title={`How to allow copy/save quiz question from vulms`}
                className={`black_subject_line_text`}
              />
              <p className="note">
              Just install this extension on Chrome, you will see an icon on the top right side, click on that icon while solving quiz, Click on "Get Question!", you will get a popup, Copy Quiz Question from that popup.
              </p> 
              <div className="img_container"> 
              <img src={cgpaImage                                           } alt="guide"/>
              </div>
              <span className="img_caption">How to Copy/Save Quiz Questin from VULMS - step 1</span>
              <div className="img_container"> 
              <img src={quizpic2                                           } alt="guide"/>
              <span className="img_caption">How to Copy/Save Quiz Questin from VULMS - step 2</span>
              </div>
              <p style={{padding:"4rem 0 1rem 0"}}>Tutorial was share by : <b>Sheroze ahmed</b></p>
              <p className="recommended">
                {" "}
                <b>Recommended : </b>
                <span>Child Friendly Tools to Teach Programming to kids</span>
              </p>
            </div>
            <div className="left_side_method_2">
              <p style={{fontSize:"1.5rem",color:"#38762B",fontWeight:"bold",paddingBottom:"1rem"}}>Method 2</p>
              <SubjectLine title={`How to copy/save quiz question without extension`}
              className={`black_subject_line_text`}/>
              <p className="discription">There is another way to copy/save Quiz Questions without any extension.<br/>its commonly use for restriction your right click on browser, when you are unable to right click on browser windows tab.</p>
              <br/>
              <p className="follow_step">Please Follow the steps below:</p>
              <ul>
                <li>You should use <b>Chrome browser</b> to use this trick</li>
                <li>Go to customize and control google chrome/ <b>Tools and setting</b> option</li>
                <li>Go to <b>More Tools</b></li>
                <li>Click on Developer tools or use <b>Ctrl+Shift+I</b></li>
                <li>Developer tools open a separate dialog box</li>
                <li>By default its on Elements and Body tab</li>
                <li>Simple PRESS <b>Ctrl+F</b>   and find your Question text in body</li>
                <li>Finally you found the Text of Question and <b>Select your Desired Text</b> and copy and paste anywhere else i.e., notepad.</li>
              </ul>
              <p className="recommended"><b>Recommended : </b><span>How to solve MCQs Fast</span></p>
            </div>
            <div className="left_side_method_3">
            <p style={{fontSize:"1.5rem",color:"#38762B",fontWeight:"bold",paddingBottom:"1rem"}}>Method 3</p>
              <SubjectLine title={`How to copy/save quiz question without extension`}
              className={`black_subject_line_text`}/>
              <p style={{fontSize:"1.5rem",padding:"2rem 0"}}>Simple Method to solve your Quiz</p>
              <ol>
                <li>Add Extension in ur browser. Name Extension (Allow Copy ) . </li>
                <li>Download Handouts in pdf. </li>
                <li>Open pdf file press Ctrl+F. </li>
                <li>Open google. </li>
                <li>Open ur quiz and starts.</li>
                <li>Select most important words in Quiz Question and paste into Pdf file and search or copy complete question and paste into google. </li>
              </ol>
              <p className="please_note"><span>Please Note: </span>share process phele se complete kr ke rakhain ta ke apko quiz karne ma issue na ho or apki search krne ki speed achi hone chahiye. Duaon me yad rakhna.</p>
              <p className="imporve_note">Previously was shared <span>How to Improve Grades.</span><br/>If you liked this Tutorial about&nbsp;How to Copy/Save/Solve Quiz Questions from VULMS Please share it with Friends. Thanks</p>
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
