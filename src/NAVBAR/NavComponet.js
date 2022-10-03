import React, { useState } from "react";
import { Link } from "react-router-dom";

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
const NavComponent = () => {
  const [ctime, setCtime] = useState(getTime);
  const [toggle, setToggle] = useState(false);
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
            <span onClick={() => setToggle(!toggle)}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </div>
          <span className="timer">
            {getMonth} {getDate},{getYear} {ctime}
          </span>
          <ul className={toggle ? "menu_items" : "menu_items hidden"}>
            <li><Link to="/ouraimpage">Our Aim</Link></li>
            <li>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
            <li><Link to="/aboutus_blog_page">About Us</Link></li>
            <li><Link to="/contactus_blog_page">Contact Us</Link></li>
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
    </>
  );
};

export default NavComponent;
