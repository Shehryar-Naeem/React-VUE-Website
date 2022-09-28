import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/DevC++.png"
import step1 from "../../../Images/step1.png";
import step2 from "../../../Images/step2.png";
import step3 from "../../../Images/step3.png";
import step4 from "../../../Images/step4.png";
import step5 from "../../../Images/step5.png";
import step6 from "../../../Images/step6.png";
import step7 from "../../../Images/step7.png";
import step8 from "../../../Images/step8.png";
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
                  DevC++ Installation and Usage Complete Guidleines
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
            <div className="left_side_installation_and_guidelines"> 
              <SubjectLine
                title={`DEVC++ Installation and usage guidelines`}
                className={`black_subject_line_text`}
              />
              <p style={{padding:"2rem 0",lineHeight:"2",fontSize:"1.2rem"}}>
              Here we have <b>Complete Guidelines </b>Step by Step Tutorial of <b>Dev C++ Installation and Usage.</b> Dear Virtual University students, You can Free Download the <b>DevC++</b>  tool from the Downloads page of CS201 over the <b>VULMS</b> Bloodshed Dev-C++ is a full-featured Integrated Development Environment (IDE) for the C/C++ programming language.
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="pic_caption">vue all subject mid term past paper collection</span>
            </div>
            <div className="left_side_dev_version_recommendation">
              <SubjectLine
                title={`DEVC++ Recommended version`}
                className={`black_subject_line_text`}
              />
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:"2"}}>There you will find three different versions of DevC++ such as: </p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>DevC++ Version in VULMS</p>
              <br/>
              <br/>
              <ul>
                <li>DevC++ Version 4.9.9.2</li>
                <li>DevC++ Version 5.1.0.0</li>
                <li>DevC++ Version 5.9</li>
              </ul>
              <p className="recommendation"><b>Recommended : </b><span>C++ programming Basic Concept And Questions</span></p>
              <br/>

              <b style={{fontSize:"1.2rem",lineHeight:"2"}}>DevC++ Version 4.9.9.2</b>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>We Recommend that you should Download and install .DevC++  version 4.9.9.2 if 32-bit OS is installed on your system </p>
              <br/>
              <b style={{fontSize:"1.2rem",lineHeight:"2"}}>DevC++ Version 5.1.0.0</b>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>Download and install DevC++ version 5.1.0.0 if your OS is 64-bit. </p>
              <br/>
              <b style={{fontSize:"1.2rem",lineHeight:"2"}}>DevC++ Version 5.9</b>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>The version 5.9 is the latest version and is compatible with both 32-bit and 64-bit operating systems. Therefore most recommended version is DevC++ Version 5.9.</p>
              <p className="recommendation"><b>Recommended : </b><span>Dev C++ Problem with 64bit and its solution</span></p>
            </div>
            <div className="left_side_dev_installation_guide">
              <SubjectLine title={`DEVC++ installation guide`}
              className={`black_subject_line_text`}/>
              <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Following are the URLs where you can download the setup for these version: </p>
              <SubjectLine title={`Download Link For DevC++ 4.9.9.2`} className={`green_subject_line_text`}/>
              <p className="set_up">devcpp-4.9.9.2_32 bit setup.rar</p>

              <SubjectLine title={`Download Link For DevC++ 5.1.0.0`} className={`green_subject_line_text`}/>
              <p className="set_up">devcpp-5.1.0.0_64 bit setup.rar</p>

              <SubjectLine title={`Download Link For DevC++ 5.9`} className={`green_subject_line_text`}/>
              <p className="set_up">devcpp-5.9 setup.rar</p>
            </div>
            <div className="left_side_installation_guide">
              <SubjectLine title={`DEV C++ installation guide`} className={`black_subject_line_text`}/>
              <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>After Downloading DevC++ setup, you should follow the instructions/guidelines provided in the following documents:</p>
              <br/>
              <p className="guide">Devcpp installation guide</p>
            </div>
            <div className="left_side_dev_installation_steps">
                <SubjectLine title={`DevC++ installation step 1:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Double click on the file devcpp_setup.exe  and Click on “Run” button.</p>
                <div className="img_container">
                  <img src={step1} alt="step1"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 1</span>


                <SubjectLine title={`DevC++ installation step 2:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Click on "Ok" button</p>
                <div className="img_container">
                  <img src={step2} alt="step2"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 2</span>

                <SubjectLine title={`DevC++ installation step 3:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Click on "Ok" button</p>
                <div className="img_container">
                  <img src={step3} alt="step3"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 3</span>


                <SubjectLine title={`DevC++ installation step 4:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Click on "I Agree" button</p>
                <div className="img_container">
                  <img src={step4} alt="step4"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 4</span>


                <SubjectLine title={`DevC++ installation step 5:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Click on "Next" button</p>
                <div className="img_container">
                  <img src={step5} alt="step5"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 5</span>


                <SubjectLine title={`DevC++ installation step 6:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Click on "install" button</p>
                <div className="img_container">
                  <img src={step6} alt="step6"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 6</span>


                <SubjectLine title={`DevC++ installation step 7:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Wait untill the green bar Complete</p>
                <div className="img_container">
                  <img src={step7} alt="step7"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 7</span>


                <SubjectLine title={`DevC++ installation step 8:`} className={`black_subject_line_text`}/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>Click on "Finish" button</p>
                <div className="img_container">
                  <img src={step8} alt="step4"/>
                </div>
                <span className="pic_caption">DevC++ installation guide step 8</span>
                <br/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>You are Done ! Your Dev C++ 4.9.9.2 has been installed successfully. Now start writing compiling and running programs and enjoy programming.</p>
                <br/>
                <p className="recommendation"><b>Recommended : </b><span>How to fix DevC++ In Windows 8 G++.exe Error</span></p>


                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}><b>Please note :</b> The installation procedure of all the DevC++ versions is almost the same as provided in the document “DevCpp installation guide”.</p> 
                <br/>
                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>All the necessary guidelines for setting up and using DevC++ are available in the above mentioned documents.</p>

                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>If you still face any issue related to DevC++, you are most welcome to discuss it on MDB or through the email. at cs201@vu.edu.pk.</p>

                <p className="recommendation"><b>Recommended : </b><span>C++ programming Tutorial</span></p>

                <p style={{padding:"2rem 0 0 0",lineHeight:"2",fontSize:"1.2rem"}}>If You Liked this Tutorial of Dev c++ Installation and usage guide. Share it with your fellow students. Like us on facebook and Subscribe us below.</p>
                <p style={{lineHeight:"2",fontSize:"1.2rem"}}>Thank your</p>
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
