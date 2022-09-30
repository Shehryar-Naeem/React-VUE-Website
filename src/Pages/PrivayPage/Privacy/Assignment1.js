import React from "react";
// import SliderComp from "./ReactSlider";
// import cgpaImage from "../../../Images/vulogo.png";
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
// import SubjectLine from "./SubjectLine";
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
                <p><b style={{fontSize:"1.5rem"}}>Privacy Policy</b></p>
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
            <div className="left_side_privacy_policy">
             
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>Privacy Policy for <span style={{color:"#0064BB",fontWeight:"bold",cursor:"pointer"}}>www.virtualstudysolutions.blogspot.com</span></p>

              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>If you require any more information or have any questions about our privacy policy, please feel free to contact us by emai:</p>
              <form>
              <div className="form_inputs">
                <label className="input_label"><i className="fa fa-pencil-square-o"></i><span>Name</span></label>
                <br/>
                <input type="text"/>
              </div>

              <div className="form_inputs">
                <label className="input_label"><i className="fa fa-envelope-o"></i><span>Email Address</span><span style={{fontSize:"0.8rem",color:"#ff0000"}}>important</span></label>
                <br/>
                <input type="text"/>
              </div>

              <div className="form_inputs">
                <label className="input_label"><i className="fa fa-keyboard-o"></i><span>Content</span><span style={{fontSize:"0.8rem",color:"#ff0000"}}>important</span></label>
                <br/>
                <textarea type="text"/>
              </div>
              <button>submit</button>
              </form>

              <p className="discritpion">
              At <span>www.virtualstudysolutions.blogspot.com</span>, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by <span>www.virtualstudysolutions.blogspot.com</span> and how it is used. 
              </p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}><b>Log Files</b></p>
              <p>Like many other Websites</p>

              <p className="discritpion1">
              <span>www.virtualstudysolutions.blogspot.com</span> makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable. 
              </p>


              <p style={{paddingTop:"2rem",fontSize:"1.2rem",lineHeight:"2"}}><b>Cookies and Web Beacons</b></p>
              <p className="discritpion1">
              <span>www.virtualstudysolutions.blogspot.com</span>  does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser. 
              </p>

              <p style={{paddingTop:"2rem",fontSize:"1.2rem",lineHeight:"2"}}><b>DoubleClick DART Cookie</b></p>
              <p className="discritpion1">
              .:: Google, as a third party vendor, uses cookies to serve ads on 
              <span>www.virtualstudysolutions.blogspot.com</span>.:: Google's use of the DART cookie enables it to serve ads to users based on their visit to <span>www.virtualstudysolutions.blogspot.com</span> and other sites on the Internet.  
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
