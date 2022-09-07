import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavMenuComponent = () => {
  const [toggle2, setToggle2] = useState(false);

  return (
    <>
      <section className="nav_menu">
        <div className="toggle">
          <span onClick={() => setToggle2(!toggle2)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </div>
        <div className="left_side">
          <span className={toggle2 ? "home_btn" : "home_btn hidden"}>
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          <ul className={toggle2 ? "nav_item" : "nav_item hidden"}>
            <li>
              <Link to="/">
                Assignments
                <span>
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </span>
              </Link>
              <ul>
                <li>
                  <Link to="/assignment/assignment1">Assignment N0 1</Link>
                </li>
                <li><Link to="/assignment/assignment2">Assignment N0 2</Link></li>
                <li><Link to="/assignment/assignment3">Assignment N0 3</Link></li>
              </ul>
            </li>
            <li>
              GDB
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li>GDB1</li>
                <li>GDB2</li>
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
export default NavMenuComponent;
