import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/migration.jpg";
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
                  Apply for Migration and Transfer in Virtual University (VU)
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
            <div className="left_side_migration_transfer">
              <SubjectLine
                title={`Apply for Migration and Transfer in Virtual University`}
                className={`black_subject_line_text`}
              />
              <p className="discription">
              Dear Students, in this article we will discuss how to <b>apply for Migration </b>and<b> Transfer of courses/credit hours </b>in <b>Virtual University (VU)</b>. Previously we shared <span>Virtual University Fee Structure per Semester.</span>
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <p className="pic_caption">How to Apply for Migration and Transfer in Virtual University (VU)</p>
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:""}}>If You have completed part of your study in another HEC recognized institution and wish to transfer your completed courses/credit hours to Virtual University of Pakistan, You will be accepted for admission by the Virtual University of Pakistan in accordance with the following conditions:</p>
              <ol>
                <li>Each student seeking admission on credit transfer basis shall apply through Admission Form which is available at VU website (<span>www.vu.edu.pk/apply</span>) at the time of admission of every semester.</li>
                <li> Transfer of credit hours to Virtual University of Pakistan (VU) will be considered on case to case basis by its Equivalence Committee that is authorized to review and approve the equivalence of courses completed at other recognized degree awarding institution.</li>
                <li> Courses completed at other institution's prior to transfer shall be shown in the same transcript as exempted issued by university but not counted towards GPA/CGPA requirements. Moreover, transfer student will not be eligible for merit position.</li>
              </ol>
            </div>
            <div className="left_side_requirement_for_migration">
              <SubjectLine
                title={`Requirements to Apply for Migration in VU`}
                className={`green_subject_line_text`}
              />
               <SubjectLine
                title={``}
                className={`green_subject_line_text`}
              />
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:"2"}}>There are some rules and requirements for migration in VU.</p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>For complete details you can check the link below: </p>
              <p className="link">http://www.vu.edu.pk/Admissions/TransferStudents.aspx</p>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>Here are some requirements that are required for migration purpose. </p>
              <ul>
                <li>The student is required to get NOC from his previous institute.</li>
                <li>The student is required to give the detail mark sheet for migration. (Including grading scheme)</li>
                <li>The student is required to give his content details of those subjects which he already passes out.</li>
              </ul>
              <p style={{fontSize:"1.2rem",lineHeight:"2"}}>When the student has all the above documents then he can apply for migration. A student can only apply for migration only when the admissions are open in Virtual University.  When admissions open then a student is required to apply online instead of applying by taking the form in hard copy form any campus. </p>
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:"2"}}>The student can also verify that he is eligible for course exemption / Migration or not by calling on a helpline. </p>
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:"2"}}>Contact # 042-111-880-880 </p>
              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:"2"}}>Or a student can email to Virtual University to the related department of the admission.</p>
              <br/>
              <p className="read_note"><b>Also Read: </b><span>VU Admission Schedule and Procedure Fall 2019 </span></p>
            </div>
            <div className="left_side_transfer_credit_Hours">
              <SubjectLine
                title={`Transfer of Credit Hours of Course(s) `}
                className={`black_subject_line_text`}
              />
              <ol>
                <li>Student who wishes to transfer their credit hours of courses to Virtual University of Pakistan shall be granted exemption to a maximum of 50 % of courses attended in another institute. </li>
                <li>Exemption shall be granted only by the Equivalence Committee of the university which are relevant to the degree at the University according to the following conditions: </li>
              </ol>
              <ul>
                <li> Course and credit hours shall conform to the program outlines of the Virtual University of Pakistan.</li>
                <li>Courses with less than B grade will not be considered.</li>
                <li>Course Exemptions are granted according to VU program scheme of study and candidate’s degree base academic background. Diploma, short course(s) or professional course(s)/ professional experience are not counted in this regard.</li>
              </ul>
              <SubjectLine
                title={`Course Exemptions for Bachelor’s Degree`}
                className={`black_subject_line_text`}
              />
              <SubjectLine
                style={{marginTop:"2rem"}}
                title={``}
                className={`black_subject_line_text`}
              />
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>Course Exemptions for Bachelor’s Degrees Holders having atleast 45% Marks. </p>
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>Candidates having a Bachelor’s degree with at least 45% marks from a recognized University and admitted to a BS program will be exempted on their request from the following subjects:</p>
              <ol>
                <li>English Comprehension (3 credits) </li>
                <li>Islamic Studies (1 credit) </li>
                <li>Pakistan Studies (2 credit)</li>
              </ol>
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>The following courses will be exempted for students, who have studied any of the following subjects at the graduation level.</p>
            </div>
            <div className="left_side_Graduate_table">
            <SubjectLine
                title={`B.A./B.Sc. Graduates`}
                className={`green_subject_line_text`}
              />
              <table>
                <thead>
                  <tr>
                    <td><b>No.</b></td>
                    <td><b>Subjects Studied</b></td>
                    <td><b>Subjects Exempted</b></td>
                    <td><b>Credits</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>General Mathematics</td>
                    <td>Calculus and Analytical geometry</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Mathematics A Course &</td>
                    <td>Calculus and Analytical geometry</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Mathematics B Course</td>
                    <td>Calculus II</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Differential Equation</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Linear Algebra</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Statistics</td>
                    <td>Statistics and probability</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>General physics</td>
                    <td>Circuit Theory and physics</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>Psychology / Applied Psychology</td>
                    <td>Psychology</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>

              <SubjectLine
                title={`B. Com. Graduates `}
                className={`green_subject_line_text`}
              />

              <table>
                <thead>
                  <tr>
                    <td><b>No.</b></td>
                    <td><b>Subjects Studied</b></td>
                    <td><b>Subjects Exempted</b></td>
                    <td><b>Credits</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>All B.Com Graduates</td>
                    <td>Financial Accounting</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Finanical Mangement</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Economics</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Business and Technical English Writing</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>

              <SubjectLine
                title={`Engineering Graduates`}
                className={`green_subject_line_text`}
              />
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>All B.E. degree holders from recognized universities shall be exempt from the following courses: </p>

              <ol>
                <li>Calculus and Analytical Geometry</li>
                <li>Multi Variable Calculus</li>
                <li>Differential Equations</li>
                <li>Linear Algebra</li>
                <li>Statistics and Probability</li>
                <li>Circuit Theory</li>
                <li>Introduction to Computing </li>
              </ol>

              <p style={{padding:"2rem 0 0 0",fontSize:"1.2rem",lineHeight:"2"}}>In addition, the following courses will be exempted for students who have qualified the specializations listed below:</p>
              
              <table>
                <thead>
                  <tr>
                    <td><b>No.</b></td>
                    <td><b>Subjects Studied</b></td>
                    <td><b>Subjects Exempted</b></td>
                    <td><b>Credits</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Electronics Engineering (all)/</td>
                    <td>Electronics</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Computer Engineering</td>
                    <td>Digital logic design</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Computer networks</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>data communication</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
              <p  style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}><b>Note:</b> If University is not allowing an exemption for that particular study program that you want then don’t apply for course exemption because your fee for course exemption will be waste.</p>
              <p className="read_note"><b>Also Read : </b><span>How to use Virtual University Exam Software</span></p>
              <p style={{padding:"2rem 0",fontSize:"1.2rem",lineHeight:"2"}}>we hope this article about How to Apply for Migration and Transfer in Virtual University (VU)was helpful for you, share it with your friends. Thank You.</p>
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
