import React from "react";
// import SubjectLine from "../../PaperPages/PastPaperComponent/SubjectLine";
// import AboutUs from "../../../Images/about.png"
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
                <p><b style={{fontSize:"1.5rem"}}>Contact Us</b></p>
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
            <div className="left_side_about_page">
             
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>It is our policy to respond to any infringement notices and take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. If your copyrighted material has been posted Here We Will Remove It As Soon As Possible 24-36 hours.</p>

              <p style={{fontSize:"1.2rem",lineHeight:"2",padding:"2rem 0 0 0",color: "#38761d"}}><b><span >For any Request / Query Contact Us:</span></b></p>

              <p style={{fontSize:"1.2rem",lineHeight:"2",padding:"2rem 0 0 0"}}><b>Using the Contact Form Below:</b></p>

              <p style={{fontSize:"1.2rem",lineHeight:"2",padding:"2rem 0"}}><b>Contact Us: </b></p>

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
