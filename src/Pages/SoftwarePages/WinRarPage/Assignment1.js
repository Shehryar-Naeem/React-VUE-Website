import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/winrar.png";
import step3 from "../../../Images/winrarstep3.jpg"
import step4 from "../../../Images/winrarstep4.jpg"
import step5 from "../../../Images/winrarstep5.jpg"
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
                  How to Download and install Winrar complete Guideline
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
            <div className="left_side_download_and_install_winrar">
              <SubjectLine
                title={`How to download and install winrar`}
                className={`black_subject_line_text`}
              />
              <p className="discription">
              Dear Students, Today we will Learn how to<b> Download and Install Winrar in window 7</b>. In this Tutorial we will guide you with step by step instructions of how to Download and Install Winrar in You PC if you are using windows 7. Previously we shared <span>DevC++ Installation and Usage Complete Guidelines</span>
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="pic_caption">
                vue all subject mid term past paper collection
              </span>
            </div>
            <div className="left_side_what_is_winrar">
              <SubjectLine
                title={`What is WinRar`}
                className={`black_subject_line_text`}
              />
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>Winrar is a product of Prolab. It is a freeware product. You can use this software to compress or minimize the size of your file.&nbsp;It is kind of zip folder. This software makes a folder with the extension <b>.rar</b></p>
              <p className="recommendation">
                <b>Also Read : </b>
                <span>How to keep Your Laptop Cool in Summer</span>
              </p>
            </div>
            <div className="left_side_features_of_winrar">
              <SubjectLine
                title={`Features of Winrar`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                  Winrar has many usefull Features such as: 
              </p>
              <ul>
                <li>It is Easy to install and easy to use.</li>
                <li>It is user friendly.</li>
                <li>You can open many type of files like RAR, ZIP, WinZip, CAB, ARJ, LZH, ACE, TAR, GZip, UUE, ISO, BZIP2, Z and 7-Zip many more.</li>
                <li>It is good if you want to send the file through internet.</li>
                <li>It takes Less memory space in hard disk and low memory allocation in CPU.</li>
                <li>It is ideal for any type of file like multimedia file, text files, videos, songs, private documents.</li>
                <li>You can create the password for your rar file. This will create a full privacy document.</li>
              </ul>
              <p className="recommendation"><b>Recommended : </b><span>Child Friendly Tools to Teach programming to kids</span></p>
            </div>
            <div className="left_side_winrar_download_install_windows">
              <SubjectLine
                title={`How to download and install winrar in windows 7`}
                className={`black_subject_line_text`}
              />
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>If You are using window 7 and don't know how to download and install Winrar in your PC. Dont worry we will guide you with step by step instructions of how to Download and Install Winrar in windows 7.</p>
              <SubjectLine title={`Step by Step Tutorial`} className={`black_subject_line_text`}/>
              <p className="recommendation" style={{padding:"2rem 0"}}><b>Step 1: </b> First of all Download Winrar from here <span>Winrar official website</span></p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}><b>Step 2 : </b>Now Double Click on the application on <b>Winrar.exe</b> file.</p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>Select the appropriate path to install the winrar on your system i.e., C Drive</p>
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}><b>Step 3 : </b>Now Click on <b>install </b>Button.You can See the image below</p>
              <div className="img_container">
                <img src={step3} alt="step_3"/>
              </div>
              <span className="pic_caption">Download and install Winrar Application in Windows 7 step-3</span>

               <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}><b>Step 4 : </b>Now select the format Your want to include for winrar. You can see the image below</p>
              <div className="img_container">
                <img src={step4} alt="step_3"/>
              </div>
              <span className="pic_caption">Download and install Winrar Application in Windows 7 step-4</span>

              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}><b>Step 5 : </b>When your winrar application Installation is completed fully and ready to use You will see the image below. Click <b>Done</b> and enjoy.</p>
              <div className="img_container">
                <img src={step5} alt="step_3"/>
              </div>
              <span className="pic_caption">Download and install Winrar Application in Windows 7 step-5</span>
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}} >If You want to Download the Winrar Application in your PC. Please Visit the&nbsp;Official&nbsp;website of Prolab. Winrar&nbsp;is free to download with no hidden charges.</p>

              <SubjectLine title={`Download link for winrar application`} className={`green_subject_line_text`}/>
              <p className="link">Winrar official website</p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>If this Tutorial was helpful. Please share with your friends. Thank You</p>
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
