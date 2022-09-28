import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/sublime.jpg";
import loomVideo from "../../../Images/loom.mp4";
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
                  How to Download and install sublime Text 3 in Windows
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
            <div className="left_side_download_sublime_in_window">
              <SubjectLine
                title={`How to download sublime text 3 in window`}
                className={`black_subject_line_text`}
              />
              <p className="discription">
                To write and edit your programming language code you need a text
                editor. for that purpose we recommend you to use{" "}
                <b>Sublime Text 3</b>
                <span> Sublime Text</span> is a lightweight text editor but has
                a bunch of features just close to an IDE. moreover,{" "}
                <b>Sublime Text 3</b> is free to download and install on your
                Windows PC. Previously we shared{" "}
                <span>
                  How to Install and Configure JDK - Java Development Kit Step
                  By Step Guideline
                </span>
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="pic_caption">
                vue all subject mid term past paper collection
              </span>
              <p className="discription">
                In order to download and install <i>Sublime Text 3</i> first,
                you need to download the Sublime Text installer for Windows from
                the <span>Sublime Text 3 </span> official website
              </p>
              <button className="download_btn">Download</button>
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                <b>Please Note:</b> If you are using Windows 64-bit on your PC
                then you will need to download the 64-bit installer, otherwise,
                you will just download the Windows(32-bit) Installer.
              </p>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Once you click on the download link, the dialog below will
                appear. Click on Save File to download and save the installer to
                your local drive.
              </p>
            </div>
            <div className="left_side_sublime_features">
              <SubjectLine
                title={`sublime text 3 features`}
                className={`black_subject_line_text`}
              />
              <ul>
                <li>GOTO ANYTHING </li>
                <li>GOTO DEFINITION </li>
                <li>MULTIPLE SELECTIONS </li>
                <li>COMMAND PALETTE </li>
                <li>POWERFUL API AND PACKAGE ECOSYSTEM </li>
                <li>CUSTOMIZE ANYTHING </li>
                <li>SPLIT EDITING </li>
                <li>CROSS-PLATFORM </li>
                <li>PERFORMANCE</li>
              </ul>
              <p className="recommendation">
                <b>Also Read : </b>
                <span>How to keep Your Laptop Cool in Summer</span>
              </p>
            </div>
            <div className="left_side_installation_sublime">
              <SubjectLine
                title={`How to install sublime text 3 in window`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                You can watch this tutorial on youtube on how to install sublime
                text 3 in windows from the video below
              </p>
              <div className="video">
                <video controls poster={cgpaImage}>
                  <source src={loomVideo}></source>
                </video>
              </div>
            </div>
            <div className="left_side_sublime_installation_guide">
              <SubjectLine
                title={`step by step tutorial to install sublime text 3 in windows`}
                className={`green_subject_line_text`}
              />
              <ol>
                <li>
                  Double click the setup file in order to launch the Sublime
                  Text Installer
                </li>
                <li>
                  Click on Next to move the next step of the installation. In
                  the next step, you can choose the directory where you want the
                  sublime text to be installed. The default directory for
                  sublime text is Local Drive C. However if you desire to have
                  sublime text installed in a different directory you can
                  specify the file path in the text entry field or click on the
                  file browser to select a folder.
                </li>
                <li>
                  After specifying the installation directory click on the Next
                  button in order to advance to the next step of the
                  installation.
                </li>
                <li>
                  Leave the checkbox unchecked and click Next to move to the
                  next step of the installation process for sublime text.
                </li>
                <li>
                  Sublime Text in now ready to install. Click on Install to
                  start installing Sublime Text 3 locally on your
                  computer.Depending on the processing power and memory of your
                  computer, sublime text might take a few seconds to a few
                  minutes to install. Once the installation is complete, click
                  on the Finish button as shown below to close the installer
                  window.
                </li>
                <li>
                  Sublime Text should now have been installed in your computer.
                  In order to launch and use your sublime text, Tap the Windows
                  key and then use the Windows Search bar to search for the
                  launcher. Type sublime text in the text input field as shown
                  below. Once the Sublime Text 3 launcher appears, click on the
                  name to launch sublime text.
                </li>
                <li>This would launch the sublime text window</li>
                <li>
                  Sublime Text is now successfully installed on your Windows
                  computer. You can now start writing your programming language
                  code.
                </li>
              </ol>
              <p className="recommendation">
                <b>Also Read : </b>
                <span>DevC++ installation and Usage complete Guideline</span>
              </p>
              <br/>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>
                If you face any Problem during download and installation of <b>Sublime Text 3</b> in Windows please post your problem in the comments sections below.
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
