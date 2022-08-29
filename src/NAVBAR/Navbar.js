import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/VUELOGO.jpeg";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "November",
];

const setMonth = new Date().getMonth();
const getMonth = month[setMonth];
const getDate = new Date().getDate();
const getYear = new Date().getFullYear();
let getTime = new Date().toLocaleTimeString();


const NavBar = () => {
  const [ctime, setCtime] = useState(getTime);
  const [toggle,setToggle]= useState(false)
  const [toggle2,setToggle2] = useState(false)
  const updateTime = () => {
    getTime = new Date().toLocaleTimeString();
    setCtime(getTime);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <nav className="nav">
        <div className="sub_nav">
        <div className="toggle">
          <span onClick={()=>setToggle(!toggle)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </div>
          <span className="timer">
            {getMonth} {getDate},{getYear} {ctime}
          </span>
          <ul className={toggle?"menu_items":"menu_items hidden"  }>
            <li>Our Aim</li>
            <li>Privacy Policy</li>
            <li>DMCA</li>
            <li>Sitemap</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="icons">
          <ul>
            <li className="twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </li>
            <li className="facebook">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </li>
            <li className="youtube">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </nav>

      <div className="logoContainer">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>

      <section className="nav_menu">
        <div className="toggle">
          <span onClick={()=>setToggle2(!toggle2)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </div>
        <div className="left_side">
          <span className={toggle2?"home_btn":"home_btn hidden"}>
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          <ul className={toggle2?"nav_item":"nav_item hidden"}>
            <li>
              <Link to="/">
                Assignments
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              </Link>
              <ul>
                <li>Assignment N0 1</li>
                <li>Assignment N0 2</li>
                <li>Assignment N0 3</li>
              </ul>
            </li>
            <li>
              past paper
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li>Current final Term papers fall 2019</li>
                <li>Mid term papers solved by moaaz</li>
                <li>Final term papers solved by moaaz</li>
                <li>Final term papers by Waqar Siddhu</li>
                <li>Mid Term Papers Collection</li>
                <li>Final Term Papers Collection</li>
              </ul>
            </li>
            <li>short notes </li>
            <li>
              how to
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li>Mid Term Paper Solving Technique</li>
                <li>Difference b/w CGPA and Effective CGPA</li>
                <li>How to upload Assignment</li>
                <li>How to solve MCQS fast</li>
                <li>How to use Exam Software</li>
                <li>How ot Avoid Zero Marks</li>
                <li>How to Copy/Save Quiz</li>
                <li>How to calculate CGPA</li>
                <li>How to calculate Grades</li>
                <li>How to improve Grades</li>
                <li>How to Do Course Selection</li>
                <li>How to Change study Program</li>
                <li>How to Change study Program</li>
                <li>How to Apply for Migration/Transfer</li>
                <li>How to Exam Money Online</li>
              </ul>
            </li>
            <li>
              software
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li>DEV C++</li>
                <li>Sublime Text 3</li>
                <li>Winrar</li>
                <li>Math Type</li>
                <li>JAVA Development kit</li>
                <li>Microsoft Visual Studio</li>
              </ul>
            </li>
            <li>
              others
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li>Fashion and life Style</li>
                <li>C++ Programming</li>
                <li>Scholarships</li>
                <li>PM Laptop Scheme</li>
                <li>Merit List</li>
                <li>NTS</li>
                <li>Prize Bond</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="right_side">
          <input type="text" placeholder="Type Here to search..." />
          <span>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </section>
    </>
  );
};

export default NavBar;
