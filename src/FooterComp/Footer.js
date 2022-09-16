import React from "react";
const getYear = new Date().getFullYear()
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="about_sec">
          <div className="about_top">
            <span className="first_span">About Authors</span>
            <span className="second_span"></span>
          </div>
          <div className="list_sec">
            <ul>
              <li>
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>Nabeel Mughal</span>
              </li>
              <li>
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>Unknown</span>
              </li>
            </ul>
            <p>
              virtual study Excellence. Powered by <span>Blogger</span>
            </p>
          </div>
        </div>
        <div className="followers_sec">
          <div className="followers_top">
            <span className="first_span">Followers</span>
            <span className="second_span"></span>
          </div>
          <div className="followers_id_sec">
            <span><i class="fa fa-user" aria-hidden="true"></i></span>
            <span><i class="fa fa-male" aria-hidden="true"></i></span>
            <span><i class="fa fa-female" aria-hidden="true"></i></span>
            <span><i class="fa fa-user" aria-hidden="true"></i></span>
            <span><i class="fa fa-male" aria-hidden="true"></i></span>
            <span><i class="fa fa-female" aria-hidden="true"></i></span>
            <span><i class="fa fa-user" aria-hidden="true"></i></span>
            <span><i class="fa fa-male" aria-hidden="true"></i></span>
            <span><i class="fa fa-female" aria-hidden="true"></i></span>
            <span><i class="fa fa-user" aria-hidden="true"></i></span>
            <span><i class="fa fa-male" aria-hidden="true"></i></span>
            <span><i class="fa fa-female" aria-hidden="true"></i></span>
            <span><i class="fa fa-user" aria-hidden="true"></i></span>
            <span><i class="fa fa-male" aria-hidden="true"></i></span>
            <span><i class="fa fa-female" aria-hidden="true"></i> </span>
          </div>
          <button>Follow</button>
        </div>
        <div className="categories_sec">
          <div className="categories_top">
            <span className="first_span">Main Categories</span>
            <span className="second_span"></span>
          </div>
          <div className="list_item">
            <ul>
              <li>Assignments</li>
              <li>C++</li>
              <li>Final term papers</li>
              <li>Mid term papers</li>
              <li>Mid term solved questions</li>
              <li>Mid term solved MCQs</li>
              <li>Short Notes</li>
              <li>Softwares</li>
              <li>Virtual University updates</li>
              <li>Mid term solved questions</li>
              <li>Youtube Videos</li>
            </ul>
          </div>
        </div>
        <div className="contact_sec">
          <div className="contact_top">
            <span className="first_span">Contact Us</span>
            <span className="second_span"></span>
          </div>
          <form>
            <div>
              <label>Name</label>
              <input type="text" defaultValue="value"/>
            </div>
            <div>
              <label>Email*</label>

              <input type="text" />
            </div>
            <div>
              <label>Message*</label>
              <textarea type="text"></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
      <hr/>
      <footer>
        <span>Ⓒ{getYear}. All right reserved</span>
        <span>Powered by</span>
      </footer>
    </>
  );
};

export default Footer;
