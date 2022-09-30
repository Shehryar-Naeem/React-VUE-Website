import React from "react";
// import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/vulogo.png";
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
                <p><b style={{fontSize:"1.5rem"}}>OurAim</b></p>
                <hr style={{marginTop:"0.5rem"}}/>
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
            <div className="left_side_our_aims">
              <SubjectLine
                title={`Our Aim`}
                className={`black_subject_line_text`}
              />
              <p style={{padding:"2rem 0",lineHeight:"2",fontSize:"1.2rem"}}>
              We are here with you hands in hands to facilitate your learning and do not appreciate the idea of copying or replicating solutions. 
              </p>
              <p style={{lineHeight:"2",fontSize:"1.2rem",textAlign:"center"}}><b>" Turn Virtual Study Solution into an Interactive Media of Learning "</b></p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <p className="pic_caption">Virtual Study solution</p>
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>Virtual Study Solution is a website created to overcome the disadvantages of distant learning education and virtual environment of such educational grooming where students cannot have a direct formal contact with their mentors and fellow students. </p>
              
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>Virtual Study Solution also provides a platform where thousands of students from different parts of Pakistan and world are able to interact virtually and can share and discuss information, their vision, knowledge and resources that can facilitate them in meeting their requirements for acquiring formal and professional education including completing assignments and tasks set by their institutes. </p>

              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>Virtual Study Solution facilitates its members in discussing and resolving conflicts and acquiring clarifications regarding different areas of their education by providing text e-books, notes, and helpful conversations in chat room as well as study groups. </p>

              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>We strongly recommend Students to turn this portal into an effective interactive channel for student’s community that can help in producing, sharing and acquiring healthy and valuable knowledge rather sharing readily developed solutions that could block the learning path of students in addition to the fact that these solutions could be wrong at times and could result in poor grades of other students thereby discouraging and lowering their morale.  </p>

              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>The Reason to respond to assignments, GDB's and online quize is to study comprehensively and utilizing online resources for understanding and acquiring knowledge. </p>

              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>Let us discuss, share and acquire knowledge rather than dropping ready solutions which have no benefit in long term. </p>

              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>We are here with you hands in hands to facilitate your learning and do not appreciate the idea of copying or replicating solutions.</p>

              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:""}}>Thanks</p>

              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>Thanks</p>
              <p className="link">www.virtualstudysolutions.blogspot.com</p>


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
