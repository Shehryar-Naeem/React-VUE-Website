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
                <li><Link to="/currentfinaltermpaper">Current final Term papers fall 2019</Link></li>
                <li><Link to="/midtermsolvedpaper">Mid term papers solved by moaaz</Link></li>
                <li><Link to="/finaltermsolvedpaper">Final term papers solved by moaaz</Link></li>
                <li><Link to="/finaltermsolvedpaperwithpdf">Final term papers by Waqar Siddhu</Link></li>
                <li><Link to="/midtermpapercollection">Mid Term Papers Collection</Link></li>
                <li><Link to="/finaltermpapercollection">Final Term Papers Collection</Link></li>
              </ul>
            </li>
            <li><Link to="/shortnote">short notes </Link></li>
            <li>
              how to
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li><Link to="/midtermpapersolvingtechnique">Mid Term Paper Solving Technique</Link></li>
                <li><Link to="/cgpa">Difference b/w CGPA and Effective CGPA</Link></li>
                <li><Link to="/uploadassignment">How to upload Assignment</Link></li>
                <li><Link to="/howtosolvemcqs">How to solve MCQS fast</Link></li>
                <li><Link to="/howtouseexamsoftware">How to use Exam Software</Link></li>
                <li><Link to="/howtoavoidzeromarksorplagiarism">How ot Avoid Zero Marks</Link></li>
                <li><Link to="/howtosaveandcopyquiz">How to Copy/Save Quiz</Link></li>
                <li><Link to="/howtocalculatecpga">How to calculate CGPA</Link></li>
                <li><Link to="/howtoimprovegrade">How to improve Grades</Link></li>
                <li>How to Do Course Selection</li>
                <li>How to Change study Program</li>
                <li><Link to="/howtoapplyformigrationandtransfer">How to Apply for Migration/Transfer</Link></li>
                <li>How to Exam Money Online</li>
              </ul>
            </li>
            <li>
              software
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li><Link to="/howtoinstalldevc++">DEV C++</Link></li>
                <li><Link to="/howtoinstallsublimetextide">Sublime Text 3</Link></li>
                <li><Link to="/howtoinstallwinrar">Winrar</Link></li>
                <li><Link to="/howtodownloadmathsoftware">Math Type</Link></li>
                <li><Link to="/javadevelopementkit">JAVA Development kit</Link></li>
                <li><Link to="/howtoinstallandusevisualstudiocode">Microsoft Visual Studio</Link></li>
              </ul>
            </li>
            <li>
              others
              <span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul>
                <li>Fashion and life Style</li>
                <li><Link to="/c++programming">C++ Programming</Link></li>
                <li><Link to="/sholarshipsPage">Scholarships</Link></li>
                <li><Link to="/laptopScheme">PM Laptop Scheme</Link></li>
                <li><Link to="/meritlist">Merit List</Link></li>
                <li><Link to="/ntspage">NTS</Link></li>
                <li><Link to="/pricebondpage">Prize Bond</Link></li>
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
