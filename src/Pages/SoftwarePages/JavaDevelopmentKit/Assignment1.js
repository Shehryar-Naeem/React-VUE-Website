import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/javedevelopmentkit.jpg";
import javastep1 from "../../../Images/javastep1.png";
import javastep2 from "../../../Images/javestep2.png";
import javastep3 from "../../../Images/javatep3.png";
import javastep4 from "../../../Images/javestep4.png";
import javastep5 from "../../../Images/javastep5.png";
import javastep6 from "../../../Images/javastep6.png";
import javastep7 from "../../../Images/javastep7.png";
import javastep8 from "../../../Images/javastep8.png";
import javastep9 from "../../../Images/javastep9.png";
import javastep10 from "../../../Images/javastep10.png";
import javastep11 from "../../../Images/javastep11.png";
import javastep12 from "../../../Images/javastep12.png";
import javastep13 from "../../../Images/javastep13.png";
import javastep14 from "../../../Images/javastep14.png";
import javastep15 from "../../../Images/javastep15.png";
import javastep16 from "../../../Images/javastep16.png";
import javastep17 from "../../../Images/javastep17.png";
import javastep18 from "../../../Images/javastep18.png";
import javastep19 from "../../../Images/javastep19.png";

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
                  How to install and Configure JDK-Java Development kit step by
                  step guideline
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
            <div className="left_side_java_development_kit_jdk">
              <SubjectLine
                title={`Java development kit-jdk`}
                className={`black_subject_line_text`}
              />
              <p className="discription">
                Dear Students, In this Tutorial we will Learn
                <b>
                  {" "}
                  How to install and configure JDK (Java Development Kit) in
                  Step by Step Guideline
                </b>
                . Moreover, we will also discuss{" "}
                <b>how to write Java programs in Notepad</b>. We are here to
                facilitate your learning, so read the complete article. T. We
                are here to facilitate your learning, so read the complete
                article. The Java Development Kit (JDK) is not optional for Java
                developers.{" "}
                <span>
                  Download Adobe Photoshop CC 2021 For Lifetime [Free]
                </span>
                It is absolutely mandatory. You can read all the step by Step
                Guidelines followed by screenshots to help you in Installation
                and Configuration of&nbsp;Java Development Kit (JDK). Previously
                we shared{" "}
                <span>
                  How to Download and Install Visual Studio and Run dot Net or
                  C# Applications
                </span>
              </p>

              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="pic_caption">
                Java development kit-JDK Installation and Configuration
              </span>
              <p className="recommendation">
                <b style={{ color: "#38762B" }}>Recommendation: </b>
                <span>DevC++ Installation and Usage Complete Guidelines</span>
              </p>
            </div>
            <div className="left_side_installation_configuration">
              <SubjectLine
                title={`Step by step guideline for java development kit-jdk installation and configuration`}
                className={`black_subject_line_text`}
              />
              <SubjectLine
                title={`Step 1:`}
                className={`green_subject_line_text`}
              />
              <span className="note">Download latest version of JDK | </span>
              <button className="download_btn">Download</button>

              <div className="img_container">
                <img src={javastep1} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 1
              </span>

              <div className="img_container">
                <img src={javastep2} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 1.2
              </span>

              <SubjectLine
                title={`step 2:`}
                className={`green_subject_line_text`}
              />
              <span className="note">
                Run JDK setup file, a Window will prompt.
              </span>
              <div className="img_container">
                <img src={javastep3} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2
              </span>

              <span className="note">
                <b>Now : </b>Hit next to start installation...
              </span>

              <div className="img_container">
                <img src={javastep4} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2.1
              </span>
              <span className="note">
                <b>Now : </b>Click Next...
              </span>
              <div className="img_container">
                <img src={javastep5} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2.2
              </span>

              <div className="img_container">
                <img src={javastep7} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2.3
              </span>

              <div className="img_container">
                <img src={javastep8} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2.3
              </span>

              <div className="img_container">
                <img src={javastep9} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2.4
              </span>

              <div className="img_container">
                <img src={javastep10} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2.5
              </span>

              <div className="img_container">
                <img src={javastep11} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 2.6
              </span>

              <SubjectLine
                title={`step 3:`}
                className={`green_subject_line_text`}
              />
              <p className="notes">
                <span>Now go to start menu </span>
                <b>-</b> <span>run and execute cmd (command prompt)</span>
              </p>

              <div className="img_container">
                <img src={javastep10} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 3
              </span>

              <span className="note">
                <b>Now : </b>Go to bin directory (folder) of JDk
              </span>

              <div className="img_container">
                <img src={javastep11} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 3.1
              </span>

              <SubjectLine
                title={`step 4:`}
                className={`green_subject_line_text`}
              />

              <span className="note">Go to Control Panel and run system.</span>

              <div className="img_container">
                <img src={javastep12} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 4
              </span>

              <p className="notes">
                <b>Note: </b>{" "}
                <span>
                  Atlernate method is right click My Computer and hit
                  Properties.
                </span>
              </p>

              <div className="img_container">
                <img src={javastep13} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 4.1
              </span>

              <p className="notes">
                <b>Note: </b>{" "}
                <span>
                  A new window will prompt. Select the advance tab and hit
                  environment variables.
                </span>
              </p>

              <div className="img_container">
                <img src={javastep14} alt="assignment" />
              </div>

              <div className="img_container">
                <img src={javastep15} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 4.2
              </span>

              <p className="notes">
                <b>Note: </b> <span>Another window will prompt</span>
              </p>

              <div className="img_container">
                <img src={javastep16} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 4.3
              </span>

              <p className="notes">
                <b>Note: </b> <span>Another window will prompt</span>
              </p>

              <div className="img_container">
                <img src={javastep17} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 4.4
              </span>

              <SubjectLine
                title={`step 5:`}
                className={`green_subject_line_text`}
              />

              <span className="note">
                Copy the path of bin directory under JDK installation directory
              </span>

              <div className="img_container">
                <img src={javastep18} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 6
              </span>

              <SubjectLine
                title={`step 6:`}
                className={`green_subject_line_text`}
              />

              <span className="note">
                Paste copied path at end of the variable value field. Remember
                prefix: <b>sign </b>before pasting the copied path.
              </span>

              <div className="img_container">
                <img src={javastep19} alt="assignment" />
              </div>
              <span className="pic_caption">
                JDk Installation and Configuration step 5
              </span>

              <p className="notes">
                <b>Now: </b> <span>Click ok and You are Done.</span>
              </p>

              <p className="notes">
                <b>Recommended: </b>{" "}
                <span>
                  How to Download and Install Sublime Text 3 in Windows.
                </span>
              </p>
            </div>
            <div className="left_side_how_write_javacode">
              <SubjectLine
                title={`How to write java programs in notepad`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 ",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Now You can easily write Java programs in Notepad. To write Java
                Programs in Notepad the following steps are involved:
              </p>
              <ul>
                <li>Open Notepad</li>
                <li>Write Java code</li>
                <li>
                Click on the "File" menu
                </li>
                <li>
                Select "Save as" option
                </li>
                <li>
                Then write your filename with .java. For example, your file name is <b>"</b><b>HelloWorldApp"</b>. So you have to write it as<b> "HelloWorldApp.java</b><b>"</b>
                </li>
              </ul>
              <p className="please_notes"><span>Please Note: </span> File Name with java extension must be enclosed in double quotes.</p>
              <br/>
              <p className="please_notes"><b>Recommended:</b><span>How to Download and Install Winrar Complete Guide</span></p>
              <br/>
              <p className="please_notes">If the <u>Java Development Kit (JDK) Installation and Configuration Step By Step Guideline</u> provided by ( <span>Virtual Study Solutions</span>) was helpful. Please Share it with your friends. You can also like our Facebook Page or Subscribe Us below for Updates. Thank You.</p>
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
