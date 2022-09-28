import React from "react";
import SliderComp from "./ReactSlider";
import winrar from "../../../Images/winrar.png";
import loomVideo from "../../../Images/loom.mp4";
import visualStudiostep1 from "../../../Images/visualstep1.png";
import visualStudiostep2 from "../../../Images/visualstep2.png";
import visualStudiostep3 from "../../../Images/visualstep3.png";
import visualStudiostep4 from "../../../Images/visualstep4.png";
import visualStudiostep5 from "../../../Images/visualstep5.png";
import visualStudiostep6 from "../../../Images/visualstep6.png";
import visualStudiostep7 from "../../../Images/visualstep7.png";
import visualStudiostep8 from "../../../Images/visualstep8.png";
import visualStudiostep9 from "../../../Images/visualstep9.png";
import visualStudiostep10 from "../../../Images/visualstep10.png";

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
                  How to download and install visual studio and Run dot Net or
                  C# Applications
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
            <div className="left_side_installation_visualstudio">
              <SubjectLine
                title={`How to Download and install visual studio`}
                className={`black_subject_line_text`}
              />
              <p className="discription">
                Dear Students, in this article we will discuss{" "}
                <b>
                  How to Download and Install Visual Studio and Run dot Net or
                  C# Applications
                </b>
                . Microsoft Visual Studio is an integrated development
                environment (IDE) from Microsoft. It is used to develop computer
                programs for Microsoft Windows.We are here to facilitate your
                learning, so read the complete article.{" "}
                <span>
                  Download Adobe Photoshop CC 2021 For Lifetime [Free]
                </span>
              </p>
              <p>
                Visual Studio is used for all applications built on the .Net
                platform. you can easily develop, debug and run applications
                using Visual Studio on your computer. Previously we discussed{" "}
                <span>
                  How to Install and Configure JDK - Java Development Kit Step
                  By Step Guideline
                </span>
              </p>

              <SubjectLine
                title={`How to download and install visual studio in urdu/hindi`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                You can watch the video for Complete Guidelines in Urdu/ Hindi
              </p>
              <div className="video">
                <video controls poster={winrar}>
                  <source src={loomVideo}></source>
                </video>
              </div>
            </div>
            <div className="left_side_visualstudio_features">
              <SubjectLine
                title={`Visual Studio Key Features`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                The key features of Visual Studio are given below:{" "}
              </p>
              <ol>
                <li>Creation of an application in any dot Net language</li>
                <li>Creation of any application type</li>
                <li>Debug Applications on the fly</li>
                <li>Extensions</li>
              </ol>

              <SubjectLine
                title={`1. Creation of an application in any .Net language`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                The Visual Studio IDE can be used to create an application in
                any .Net language. Hence, a developer can use C#, VB.Net or even
                F# to develop an application.
              </p>

              <SubjectLine
                title={`2. Creation of any application type`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                The Visual Studio IDE can be used to create an application of
                any type. (Web-based application or Windows Forms-based
                application).
              </p>

              <SubjectLine
                title={`3. Debug Applications on the fly`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Applications can be tested as they are being built. The IDE
                allows one to run the program at any point of time during the
                development process. Hence, a developer can check for any errors
                during the development phase itself.
              </p>

              <SubjectLine
                title={`4. Extensions`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                The IDE has the facility to install third-party extensions. An
                example can be Subversion, which is used for source code
                repository management. Subversion is used to upload code to a
                central repository. This is done so that a copy of the code will
                always exist. Visual Studio has the facility to integrate with
                such software from the IDE itself. Hence, a developer can work
                with code repositories from the IDE itself.
              </p>
              <p className="recommended">
                <b style={{ color: "#38762B" }}>Recommended : </b>
                <span>DevC++ Installation and Usage Complete Guidelines</span>
              </p>
            </div>
            <div className="left_side_visual_installation_guide">
              <SubjectLine
                title={`Download and Install Visual Studio Step by Step Guideline`}
                className={`black_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                You can read the step-by-step instruction to successfully
                download and install visual studio.
              </p>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 1:</b>
              </p>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Visual Studio can be downloaded from the link below:
              </p>

              <p className="link">https://www.visualstudio.com/downloads</p>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                On the next page, You can select between
              </p>

              <ul>
                <li>Visual Studio 2017 Community Edition</li>
                <li>
                  Visual Studio 2017 Professional Edition (30 Day Free Trial)
                </li>
              </ul>
              <div className="img_container">
                <img src={visualStudiostep1} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 2:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Click on the file that you have been downloaded (.exe file)
              </p>
              <div className="img_container">
                <img src={visualStudiostep2} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 3:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                In the next window that prompts on your screen, click on the
                continue button
              </p>
              <div className="img_container">
                <img src={visualStudiostep3} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 4:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Visual Studio will start downloading the initial files. Download
                speed may vary as per your internet connection speed so don't
                worry. sit back and wait for process to complete.
              </p>

              <div className="img_container">
                <img src={visualStudiostep4} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 5:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                After the download is completed, In the next window, click on
                the install button.
              </p>

              <div className="img_container">
                <img src={visualStudiostep5} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 6:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                In the next window screen,
              </p>

              <ol>
                <li>Select Option of ".Net desktop development"</li>
                <li>Click on the install button.</li>
              </ol>
              <div className="img_container">
                <img src={visualStudiostep6} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 7:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                After the download is completed, In the next window, click on
                the install button.
              </p>

              <div className="img_container">
                <img src={visualStudiostep7} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 8:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Once the download is finished, you will be asked to reboot the
                computer.
              </p>

              <div className="img_container">
                <img src={visualStudiostep8} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 9:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                When the reboot process is finished, open the Visual Studio IDE
                by Application icon shown on the desktop or start menu.
              </p>

              <ol>
                <li>Select a theme of your choice</li>
                <li>Click Start Visual Studio</li>
              </ol>

              <div className="img_container">
                <img src={visualStudiostep9} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.5rem",
                }}
              >
                <b>Step 10:</b>
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Now Your Virtual Studio IDE is ready to use. You can navigate to
                the File menu to create new Dot Net or C# applications.
              </p>

              <div className="img_container">
                <img src={visualStudiostep10} alt="visualstudiostep1" />
              </div>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Enjoy Visual Studio. Thank You.
              </p>
              <p className="recommended">
                <b style={{ color: "#38762B" }}>Recommended : </b>
                <span>
                  How to Download and Install Sublime Text 3 in Windows
                </span>
              </p>
            </div>
            <div className="left_side_frequently_ask_question">
              <SubjectLine
                title={`Frequently Asked Questions related to Visual Studio`}
                className={`black_subject_line_text`}
              />

              <SubjectLine
                title={`Does C# come with Visual Studio?`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Built-in languages include C, C++, C++/CLI, Visual Basic .NET,
                C#, F#, JavaScript, TypeScript, XML, XSLT, HTML, and CSS.
                Support for other languages such as Python, Ruby, Node.js, and M
                among others is available via plug-ins. Java (and J#) were
                supported in the past.
              </p>

              <SubjectLine
                title={`How do I run a .NET core project code in Visual Studio?`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                <b>NET Core:</b>
              </p>
              <ol>
                <li>Open a project: Open Visual Studio Code.</li>
                <li>
                  Initialize a C# project: Open the Integrated Terminal from
                  Visual Studio Code by selecting View Integrated Terminal from
                  the main menu.
                </li>
                <li>Resolve the build assets:</li>
                <li>Run the "Hello World" program: Type dotnet run.</li>
              </ol>

              <SubjectLine
                title={`How do I open a .NET project in Visual Studio?`}
                className={`green_subject_line_text`}
              />

<p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                To open an existing project or solution file
              </p>
              <ol>
                <li>In Microsoft Visual Studio, click File menu Open Project/Solution (or click File menu Open Project).</li>
                <li>Click Open.</li>
              </ol>


              <SubjectLine
                title={`What is the difference between Visual Studio and Visual Studio code?`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                <b>Visual Studio Code</b> is an editor while <b>Visual Studio</b> is an IDE. <b>Visual Studio Code</b> is cross-platform and fast, while <b>Visual Studio</b> is Windows/Mac only and not fast. Note that Visual Studio for Mac is available now but is a different product compared to <b>Visual Studio</b> (Windows).
              </p>

              <SubjectLine
                title={`How do I run an EXE file in Visual Studio?`}
                className={`green_subject_line_text`}
              />

<p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                In Visual Studio, select File - Open - Project. In the Open Project dialog box, select All Project Files, if not already selected, in the dropdown next to Filename. Navigate to the .exe file, select it, and select Open.
              </p>


              <SubjectLine
                title={`How do I import a Visual Studio project code?`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Importing files from a Microsoft Visual Studio project
              </p>
              <ol>
                <li>Close any open projects.</li>
                <li>From the File menu, select Import - Import from Visual Studio 6.0 Project or Import from Visual Studio . ...</li>
                <li>Use the file selector to locate the Valid Code file.</li>
                <li>Enter a name for the new project and click OK.</li>
                <li>Select the correct Configuration in the Configuration toolbar.</li>
              </ol>

              <SubjectLine
                title={`How much does Visual Studio cost?`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                <b>Visual Studio Pricing:</b>
              </p>

              <p
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Visual Studio offers three paid standard subscription options: Visual Studio Professional ($1,999/first year per user), and Visual Studio Test Professional ($2,169/first year per user), and Visual Studio Enterprise ($5,999/first year per user).
              </p>
              <p className="recommeded"><b style={{color: "#38762B"}}>Recommended : </b><span>How to Make Use Case Diagram using Microsoft Visio - UML Use Case Diagram Tutorial</span></p>
              <p
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
              Thanks for reading the complete article about How to <u>Download and Install Visual Studio and Run dot Net or C# Applications</u>. If you are facing any difficulty or query in the download and installation process let us know in the comments section.
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
