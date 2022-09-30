import React from "react";
import SliderComp from "./ReactSlider";
import cgpaImage from "../../../Images/changeProgram.png";

import changeProgram1 from "../../../Images/ChangeProgram1.png"


import onlineMoney3 from "../../../Images/EarnMoney3.png";
import onlineMoney4 from "../../../Images/EarnMoney4.png";

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
                  How to Change Your VU Study Program - Complete Guide
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
            <div className="left_side_change_studyProgram">
              <SubjectLine
                title={`How to change your VU Study Program`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Dear VU Students ! Here we will discuss
                <b>how to change your study program</b>, in if you are studying
                from Virtual University of Pakistan and somehow you have came to
                know that you should change your study program then don't worry.
                we will guide you through this. Keep Reading...
              </p>
              <div className="img_container">
                <img src={cgpaImage} alt="assignment" />
              </div>
              <span className="pic_caption">
                How to Change Your VU Study Program - Complete Guide
              </span>
              <p className="recommended">
                <b>Recommended : </b>
                <span>Virtual University Acadamic calender spring 2017</span>
              </p>
            </div>
            <div className="left_side_instruction_changing_program">
              <SubjectLine
                title={`How to change your Study Program Instructions:`}
                className={`black_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Here you can read step by step instructions to change your VU
                Study Program.
              </p>
              <SubjectLine
                title={`
                Change Your Study Program Step 1:`}
                className={`green_subject_line_text`}
              />
              <p className="discription_link">
                First of All You go to <span>www.lms3.vu.edu.pk</span> and Login
                with your VULMS ID & Password.
              </p>

              <SubjectLine
                title={`Change Your Study Program Step 2:`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Than Login your VU LMS and go to Student Services and Select
                Study Program Conversion.
              </p>

              <SubjectLine
                title={`Change Your Study Program Step 3:`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                You will see this image, shown below:
              </p>
              <div className="img_container">
                <img src={changeProgram1} alt="onlineMoney" />
              </div>
              <span className="pic_caption">
              Change Your Study Program VULMS Page Preview
              </span>

              <SubjectLine
                title={`Change Your Study Program Step 4:`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Fill in the Form.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               <b>Current Degree Program</b>:  Bachelors, Associate Degree Program, BS etc .
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               <b>Current Study Program</b>: for example BSc Computer Science etc.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               <b>New Degree Program</b>: for example Associate Degree Program, Bachelor, BS.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               <b>New Study Program</b>: for example MIT, BS 4 year etc.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               <b>In the End you write Reason of Study Program: </b>for example Why you want to change Study Program.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               <b>Reason Example:</b>
              </p>
              <blockquote style={{paddingLeft:"5rem",fontSize:"1.5rem",color:"rgba(0,0,0,0.3)",lineHeight:"2"}} ><span style={{fontSize:"2rem",color:"rgba(0,0,0,0.5)",lineHeight:"2"}}>" </span>i want to go with computer science and software programming. I had selected Web Design and Development due to some miss guides.As my interest is in computer science and programming and i want to do masters in computer science. so i m selecting it.</blockquote>


              <SubjectLine
                title={`Change Your Study Program Step 5:`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  padding:"2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               Your status will be shown Pending so you need to pay the fee.
              </p>
              <p style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}> <b>Study Program Conversion Fee : </b><span style={{color:"#ff0000"}}>Rs.2000</span></p>

                <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               Pay the fee voucher and upload this Paid Voucher. 
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
               Your Study Program will be Changed in few days with the confirmation Email. keep an eye on your email till then. 
              </p>
              <p className="recommended"><b>Recommended : </b><span>Pakistani Universities to be the Part of CPEC Consortium of Business Schools</span></p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
              If this tutorial was helpful. Please share with your friends. in case of any query or question you can ask us in comments below. Sharing is Caring.Thank you.
              </p>
            </div>
            <div className="left_side_find_scam_sites">
              <SubjectLine
                title={`How to Find Fake, Fraud or Scam Sites`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                First of all, you need to find out:
              </p>
              <ul>
                <li>How long they have been doing the business </li>
                <li>Read online reviews of the site.</li>
                <li>Watch for poor grammar and spelling mistakes</li>
              </ul>
              <span
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Take the help of
              </span>
              <button className="download_btn">Download</button>
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                If the domain of the website/company is newly created for
                example between 2017 to 2019, then it is more likely to be fake
                in most cases. To avoid joining and doing business with them.
                It's for your own good.
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                If you live in Pakistan I am sure you might have received the
                Benazir Support SMS. The scammer has been noticed to make many
                spelling mistakes.
              </p>
            </div>
            <div className="left_side_should_known_to_learn">
              <SubjectLine
                title={`10 Things you should know to Earn Money Online`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Let's come to the point. In this article, we will discuss the
                following Topics to help you understand
              </p>
              <div className="img_container">
                <img src={onlineMoney3} alt="online Money" />
              </div>
              <p className="pic_caption">
                10 Things you should know to Earn Money Online in Pakistan
              </p>

              <ol>
                <b>
                  <li>Which Fields to choose to Work Online? </li>
                  <li>How and Where to Learn Anything For Free </li>
                  <li>
                    How to Earn Money Online After Getting a Skill Online{" "}
                  </li>
                  <li>How to Recieve Payment in Pakistan (Solutions) </li>
                  <li>Why you should be an Entrepreneur </li>
                  <li>
                    Advantages of Failure and How to convert it into success{" "}
                  </li>
                  <li>Know your Fears - Log Kya Kahain Gy </li>
                  <li>How to Find - What's your Passion </li>
                  <li>Where to Ask for Solution When You're Stuck </li>
                  <li>
                    How to Motivate Yourself Every Day to Achieve Your Goal
                  </li>
                </b>
              </ol>
              <SubjectLine
                title={`1. Which Fields to choose to Work Online?`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                As you know Computer Science has a good scope and students may
                find very good job opportunities in the market, given that they
                have completed their degree programs from a good university and
                marks.{" "}
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                The opportunities are expected to grow more in the coming years.
                The most demanding fields in the modern market are mentioned
                below for students to learn and make money online{" "}
              </p>
              <ul>
                <li>Web Development</li>
                <li>SEO Article Writing and Site Auditing</li>
                <li>Android and iOS Apps Development</li>
                <li>Graphics Designing</li>
                <li>E-Commerce and Affiliate Marketing</li>
              </ul>

              <SubjectLine
                title={`2. How and Where to Learn Anything For Free`}
                className={`black_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                There are many amazing websites on the internet these days where
                you can learn web development, but of course, web development
                needs patience and hard work.
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                You can't learn it without practice. You need to do the same
                practice as we all deal with Mathematics that you have to learn
                with practice.
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                Web Development is no exception.
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                }}
              >
                These are the following resources where you can become a master
                of it:
              </p>
              <ul>
                <li>Udacity</li>
                <li>Udemy</li>
                <li>Coursera</li>
                <li> YouTube</li>
                <li>Lynda</li>
                <li>Google Advanced Search</li>
              </ul>

              <SubjectLine
                title={`How to Use Google Advanced Search`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  fontSize: "1.5rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                  color: "#ff0000",
                }}
              >
                <b>Must Read</b>
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                As we all have been using computers since our childhood and of
                course we use google these days for searching for anything on
                the internet. There are some advanced commands that can help you
                find the desired thing you want.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                Here are some of the useful and important commands for Students.
              </p>
              <blockquote
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "2rem",
                  color: "rgba( 0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                " SEO Guide filetype: pdf
              </blockquote>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                When you type the above commands in google search, all the
                results that are shown are the PDF files.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                With the same command, you can also find the PowerPoint
                Presentation files with this command
              </p>
              <blockquote
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "2rem",
                  color: "rgba( 0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                " First Law of Motion filetype: ppt
              </blockquote>
              <p className="recommended">
                <b>Recommended: </b>
                <span>
                  Plagiarism Checker X - Plagiarism Checker Software for
                  Students
                </span>
              </p>

              <SubjectLine
                title={`3. How to Earn Money Online After Getting a Skill Online`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0",
                  lineHeight: "2",
                }}
              >
                As some of us would know the Struggle of getting a job. it is
                the hardest thing as you dare? but don't worry. we are here to
                discuss your options being a student in Pakistan with some set
                of skills and earning money online is not a dream far away.
              </p>

              <SubjectLine
                title={`Use Your Skills as a Freelancer`}
                className={`green_subject_line_text`}
              />

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                These are the most trusted platforms to Earn money Online as a
                Freelancer:
              </p>
              <ul>
                <li>
                  <span>Fiverr</span>
                </li>
                <li>
                  <span>Freelancers</span>
                </li>
                <li>
                  <span>Guru</span>
                </li>
                <li>
                  <span>Upwork</span>
                </li>
              </ul>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                Try your luck on these websites until you get a job, and
                understand how to be a top rated seller on the platform.
              </p>

              <SubjectLine
                title={`Facebook Groups`}
                className={`green_subject_line_text`}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                If you're a great On-Page SEO writer, then finding a job on
                Facebook is very easy. Because let me tell you that great
                writers are always in demand.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                You have to use this sample to find a job on Facebook if you
                have become an expert on On-Page SEO writing.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                Website admins are always Looking for a good writer that can
                understand the psychology of people to write amazing content.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                <b>Application Sample: </b>
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                I'm Looking For a Job in SEO Article Writing
              </p>
              <p className="article_link">
                I'm an SEO writer and articles have been published on my popular
                websites i.e., ( <span>Virtual Study Solutions</span> ).
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                I know how to write for the search engines with the latest
                On-page SEO practices and for the visitors because providing the
                great user experience is critical and essential to google.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                The sample will be provided on request.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                <b>Above Sample's Overview:</b>
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                <b>Title</b> Giving an impressing title is important because
                people are so much busy, they don't like to read the whole post.
                By writing a simple title makes your post stands out from the
                crowd.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                <b>Slash:</b> It is also critical because it separates the post.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                <b>Body:</b> It is the short paragraph where you will impress
                the people. Start with who you're (Please don't write your name
                because people don't care much about your name, education, and
                degree, they just want what is for me), show your portfolio
                where your articles have been published to impress more and end
                with an impressive line.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                Space within the Paragraph: It's also important because people
                like to read a shorter paragraph.
              </p>

              <SubjectLine
                title={`4. How to Recieve Payment in Pakistan (Solutions)`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                The best payment methods in Pakistan are mentioned below:
              </p>
              <ul>
                <li>Payoneer</li>
                <li>UBL Debit Card</li>
              </ul>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                <b>Payoneer:</b> It’s to make, a card is sent to the home that
                you have to activate. It has a yearly fee of 30$, and you can
                buy anything.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                <b>UBL Debit Card:</b> UBL has eradicated the UBL Wiz Card, but
                you can buy UBL Debit Card for any international transaction.
                You can use it on Google Ad, Facebook Ad, and many other
                services to promote your website or business online.
                <b>UBL Debit Card</b> It’s also a card that you can get for
                free.
              </p>

              <SubjectLine
                title={`5. Why you should be an Entrepreneur`}
                className={`black_subject_line_text`}
              />

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                Becoming an entrepreneur is the most difficult thing because
                students think that there are no opportunities in the country
                like Pakistan.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                But there are many examples of people with success being an
                Entrepreneur, there so many opportunities that have no limits.
              </p>
              <p className="recommended">
                <b>Recommended: </b>
                <span>
                  How to Verify Your Phone IMEI to Avoid Blocking in Pakistan{" "}
                </span>
              </p>

              <SubjectLine
                title={`6. Advantages of Failure and How to convert it into success`}
                className={`black_subject_line_text`}
              />

              <p
                style={{
                  fontSize: "1.2rem",
                  padding: "2rem 0 0 0",
                  lineHeight: "2",
                }}
              >
                Early stages of <u>working Online in Pakistan to earn money</u>{" "}
                when you fail after making a gig on Fiverr or your website is
                generating zero traffic.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                You might feel like nothing is working, and you will give up.
                but,
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                You have to try and try until you get success.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                As Allah says in Quran:
              </p>

              <blockquote
                style={{
                  padding: "2rem 0",
                  lineHeight: "2",
                  fontSize: "2rem",
                  color: "rgba( 0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                " Man will not get anything unless he works hard
              </blockquote>
              <p
                style={{
                  textAlign: "right",
                  fontSize: "1.5rem",
                  lineHeight: "2",
                }}
              >
                (Surah al-Najm, 53:39).
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0",
                }}
              >
                There is no doubt about the fact that man cannot make any
                progress without effort and hard work. For example, one who
                studies whole-heartedly becomes a scholar. Similarly, a farmer
                who plows the farm, sows seeds in it and waters them, is soon
                rewarded with crops. On the other hand, whoever is lazy and
                indolent and does not do any work, is faced with woes and
                worries. Indolence and irresponsibility results in poverty and
                grief and Islam dislike these things very much. Islam regards
                hard work as a duty.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
                <b>Keep in mind following advantages of failures:</b>
              </p>
              <ul>
                <li>You get experience</li>
                <li>You learn from mistakes</li>
                <li>You get closer to Allah when tears roll down cheeks</li>
                <li>Failure gives you a challenge</li>
                <li>It teaches you of being human and humble</li>
                <li>You learn more from failures than success:</li>
                <li>Reminder to stay focused</li>
              </ul>

              <SubjectLine
                title={`7. Know your Fears - Log Kya Kahain Gy`}
                className={`black_subject_line_text`}
              />

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0 0 0",
                }}
              >
                Fear is the Cost of Imagination. It's one of the worst enemies
                that kill dreams of people every day. Don't let it overcome or
                devalue your dreams. You are stronger than that.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0 0 0",
                }}
              >
                We spend the rest of our life to make others happy.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0 0 0",
                }}
              >
                We waste our life to be the apple of others' eye.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0 0 0",
                }}
              >
                We become what others want.
              </p>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0 0 0",
                }}
              >
                Every field has a scope, every field can give you great rewards
                if you have talent, passion, skills and hardworking capacity.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  padding: "2rem 0 0 0",
                }}
              >
                Research says; Skilled Employers Think Fresh Graduates Lack.
              </p>

              <ul>
                <li>Verbal Communication (83.63%)</li>
                <li>Positive Attitude (71.93%)</li>
                <li>Team Working (64.91%)</li>
                <li>Critical Thinking (59.06%)</li>
                <li>Self Confidence (59.06%)</li>
                <li>Written Communication (57.31%)</li>
                <li>Drive & Resilience (57.31%)</li>
                <li>Stress Tolerance (47.37%)</li>
                <li>Adaptability (46.20%)</li>
                <li>Time Management (45.61%)</li>
                <li>Self-Awareness</li>
                <li>Integrity (43.86%)</li>
              </ul>
              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                It's the same case in even the students of{" "}
                <b>top medical colleges</b> and <b>engineering universities</b>{" "}
                lack the above skills.
              </p>
              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                It's not a big deal though. These skills can easily be learned
                from Google, YouTube and free books available on the internet.
                Take the Step if you think you also lack these skills.
              </p>
              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                <b>Type of Fears You should Overcome</b>
              </p>
              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Common Fears found in students who stand between You and Your
                Success are given below:
              </p>
              <ul>
                <li>Log Kya Kahain Gy</li>
                <li>Fear of Death</li>
                <li>Fear Not to Make Mistakes</li>
              </ul>
              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                <b>How to Get Rid of Fears</b>
              </p>

              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Take a small step, just start right now.
              </p>
              <ul>
                <li>Don't talk about it much</li>
                <li>Talk with an Expert</li>
                <li>Fear Not To Take an Initiative</li>
                <li>Nobody's going to hurt you for asking a Question</li>
                <li>Burn Paper by Writing on a Piece of Paper</li>
                <li>Raise Questions on your fears</li>
              </ul>

              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Be fearless but be smart. Don't do Stupid Thing in the name of
                fearlessness. Give direction to your strength in positive ways.
              </p>

              <SubjectLine
                title={`8. How to Find - What's your Passion`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                First of All Focus on these things to find your passion so that
                you can select your field:
              </p>

              <ul>
                <li>Time Flies Like a Butterfly in the Sky</li>
                <li>Not Get Bored When You Do</li>
                <li>You Can Work For 365 Days Without Getting Paid</li>
                <li>You Can Read 500 Books on Your Passion Topic</li>
                <li>Remember Childhood Memories to Find a Clue</li>
              </ul>

              <SubjectLine
                title={`9. How to Find Solution When You're Stuck`}
                className={`black_subject_line_text`}
              />
              <p
                style={{
                  paddding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Here are the following platforms where you can ask a question
                and get your answers.
              </p>
              <ul>
                <li>Quora</li>
                <li>Google</li>
                <li>Facebook Groups</li>
              </ul>

              <SubjectLine
                title={`10. How to Motivate Yourself Every Day to Achieve Your Goal`}
                className={`black_subject_line_text`}
              />

              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Thanks to modern technology and the internet, Motivating
                Yourself has become very easy. You don't have to sit and wait
                for someone to give you a lecture or direction to achieve your
                goals.
              </p>
              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                I remember that time when I used to watch motivational videos on
                YouTube initially, I used to say "Ye to West Hi Keh RHA Hai, Koi
                Faida Nhi Hota," but when you change this attitude and start
                taking them seriously.
              </p>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Every Body Speaks his Experiences What he has gone through or
                what he has seen people go through and if you look at people
                with focus you will learn many things from their success and
                failures.
              </p>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Consider them your teacher, and you say yourself you know
                nothing, then you will see that things will start changing.
              </p>

              <div className="img_container">
                <img src={onlineMoney4} alt="earn money" />
              </div>
              <span className="pic_caption">Motivation</span>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Here are the names of few best Motivational speakers available
                online on YouTube and other social media platforms.
              </p>
              <ul>
                <li>Qasim Ali Shah [Urdu Language]</li>
                <li>Sandeep Maheshwari [Hindi Language]</li>
                <li>Tony Robins [English Language]</li>
              </ul>
              <p className="recommended">
                <b>Recommended : </b>
                <span>How to improve your grade after a poor midtrem exam</span>
              </p>

              <p
                style={{
                  padding: "2rem 0 0 0",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                I hope this Guide for Students will be helpful for you to{" "}
                <b>Earn Money Online in Pakistan</b> . If you have any
                questions, ask in the comments section below, I would love to
                help you. Don't forget to share this article with your friends.
                Thank You.
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
