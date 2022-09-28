import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/mathSoftware.png";
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
                  Download MATH Type software for VU Students
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
            <div className="left_side_download_math_software">
              <SubjectLine
                title={`Download math type software`}
                className={`black_subject_line_text`}
              />
              <p className="discription">
                Currently, <b>MathType</b> is available as a free add-in and can
                be used in <b>Microsoft Word </b>
                <b>Excel </b>
                <b>PowerPoint </b>
                <u>Download MATH Type Software</u> , Microsoft Word contains
                some <b>math creation tools</b> built right in, MathType is
                different because it is more accessible.
              </p>
              <p className="discription">
                <b>Virtual university (VU)&nbsp;</b> students can now facilitate
                by downloading <b>Math Type</b> 5 software and student. Welcome
                to <b>virtual university (VU) software download</b> services.
                Read <span>How to use Virtual University Exam Software</span>
              </p>
              <p className="discription">
                We also have huge collection of online software which Include
                computer science soft, networking, programming languages,
                graphics, media converters, Systems Programming software, Linux
                software and many more.
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="pic_caption">
                Download math type software for VU students
              </span>
            </div>
            <div className="left_side_why_need_math_software">
              <SubjectLine
                title={`Why you need math type software`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                During Assignment Season , Virtual University Student often feel
                difficulty to write math equation in word document. By
                downloading Math Type they can easily type math equations in
                word document and submit your assignment in required format.
                Moreover Math Type is also used to insert math equations in GDB
                answer. we are also going to discuss how to insert math
                equations in GDB.
              </p>
              <SubjectLine
                title={`Important software for students`}
                className={`green_subject_line_text`}
              />
              <p className="link">
                <span>DevC++ Installation and Usage Complete Guidelines</span>
              </p>
              <p className="link">
                <span>
                  Install and Configure JDK - Java Development Kit Step By Step
                  Guideline
                </span>
              </p>
              <p className="link">
                <span>
                  Plagiarism Checker X - Plagiarism Checker Software for
                  Students
                </span>
              </p>

              <p className="link">
                <span>
                  Download and Install Visual Studio and Run dot Net or C#
                  Applications
                </span>
              </p>
            </div>
            <div className="left_side_insert_math_feature">
              <SubjectLine
                title={`How to insert math equation in GDB`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 ",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                To insert math equations in GDB answer, following are the
                guidelines:
              </p>
              <ol>
                <li>
                  User must <span>Download and install Math Type software</span>{" "}
                  to generate the various math equations.
                </li>
                <li>
                  Launch the Math Type and go to the Preferences Tab in menu bar
                  and click on “Cut and Copy Preferences” and match the settings
                  as per given below screenshot and click “Ok”.{" "}
                </li>
                <li>
                  Note: In previous versions of Math Type, go to Preferences Tab
                  in menu bar and click on “Translators” and match the settings
                  as per given below screenshot and click “Ok”{" "}
                </li>
                <li>
                  Now generate required math equation, and simply copy it by
                  pressing (Ctrl+C). It will copy Math Equation Script instead
                  of actual equation, if step 2 is properly followed.{" "}
                </li>
                <li>
                  After copying Equation from Math Type, simply paste the
                  equation script into GDB answer interface in{" "}
                  <span>VULMS </span>and press “Post Message” button.{" "}
                </li>
                <li>
                  Verify Math type GDB answer and its details from the given
                  interface in <span>VULMS</span> under GDB section.
                </li>
              </ol>
            </div>
            <div className="left_side_mathtype">
              <SubjectLine
                title={`is there a free version of mathtype for students?`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                The MathType add-on is free and can be used in Microsoft Word,
                Excel, and PowerPoint. In spite of the fact that Microsoft Word
                includes some math creation tools automatically, MathType is
                more accessible.
              </p>
              <SubjectLine
                title={`How to activite mathtype for free?`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                To <b>unlock/register MathType</b>, click the Unlock/Register
                command in Word. After you open the MathType tab, click the
                Inline link to open the MathType , then in the MathType's Help
                menu, click Unlock/Register.
              </p>

              <SubjectLine
                title={`What is the latest version of MathType?`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Latest Version of Mathtype is v7.4 available to download and use
                for students.
              </p>

              <table style={{border:"2px solid black"}}>
                <thead>
                  <tr>
                    <td colSpan={2}>
                      <b>
                        MathType 7.4 running on Windows 10 displaying the
                        quadratic formula
                      </b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Stable release</td>
                    <td>7.0 / September 23, 2019</td>
                  </tr>
                  <tr>
                    <td> Operating system</td>
                    <td>Microsoft Windows macOS</td>
                  </tr>
                  <tr>
                    <td> Available Language</td>
                    <td>English, French, German, Japanese, and Chinese</td>
                  </tr>
                  <tr>
                    <td> Software Type</td>
                    <td>Formula editor</td>
                  </tr>
                </tbody>
              </table>

              <SubjectLine
                title={`Download math type from here`}
                className={`green_subject_line_text`}
              />
              <button className="download_btn">Download</button>
              <p className="recommendation">Haveing trouble? Read: <span>How to Download math Type easily</span></p>
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
