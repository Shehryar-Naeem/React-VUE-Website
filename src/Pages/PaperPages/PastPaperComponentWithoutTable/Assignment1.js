import React from "react";
// import picture from "../../../Images/assignment.jpeg";
import LoomVideo from "../../../Images/loom.mp4";
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
import TableComponent from "./tableComponent";
const getYear = new Date().getFullYear();
const AssignmentComponent = ({ picture }) => {
  // const [cards, setCards] = useState([]);
  // const [currPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(6);

  // const indexOfLastPost = currPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currPosts = cards.splice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (PageNumber) => setCurrentPage(PageNumber);
  // console.log(currPosts);
  /*
  ********for redux ************
  const dispatch = useDispatch();
  const showCard = useSelector((state) => state.showCard.cards);
  const { loading, cards, error } = showCard;
  useEffect(() => {
    dispatch(showCardAction());
  }, []);
  */

  // useEffect(() => {
  //   loadCard();
  // }, []);
  // const loadCard = async () => {
  //   const card = await axios.get("http://localhost:3003/cards");
  //   setCards(card.data);
  // };
  // console.log(cards.length);
  return (
    <>
      <section className="pastpaper_container">
        <div className="left_side_Container">
          <div className="left_side">
            <div className="left_side_header">
              <span className="text">
                {" "}
                All subject mid term past papers collection
              </span>
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
            <div className="left_side_all_subject_section">
              <p>
                You can read or download below, all subjects solved VU mid term
                paper collection. for virtual university students of pakistan.{" "}
                <span>vue all subject mid term past paper</span> collection for
                students.
              </p>
              <SubjectLine
                title={`all subject mid term past paper collection`}
                className={`black_subject_line_text`}
              />
              <div className="img_container">
                <img src={picture} alt="assignment" />
              </div>
              <span>vue all subject mid term past paper collection</span>
            </div>
            <div className="left_side_video_download_section">
              <SubjectLine
                title={`watch the video `}
                className={`green_subject_line_text`}
              />
              <div className="left_side_video">
                <video controls poster={picture}>
                  <source src={LoomVideo} type="video/mp4"></source>
                </video>
              </div>
              <span>
                All subject mid term papers collection by virtual solution
                excellence
              </span>
            </div>
            {/* <TableComponent />
            <TableComponent />
            <TableComponent />
            <TableComponent />
            <TableComponent />
            <TableComponent /> */}
            <div className="left_side_past_paper_table">
              <SubjectLine
                title={`vu mid term past paper all subjects`}
                className={`black_subject_line_text`}
              />

              <table>
                <thead>
                  <tr>
                    <td>subject code</td>
                    <td>download links</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>

                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>ACC-311 mid term paper solve by VUE</td>
                    <td>download</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mid_term_past_paper_file">
              <SubjectLine
                title={`having trouble opening mid term paper files?`}
                className={`green_subject_line_text`}
              />
              <SubjectLine
                title={``}
                className={`green_subject_line_text_lower`}
              />
              <p>
                There are few software’s which are mandatory to be installed in
                your computer/Mobile, to open these files without any trouble:
              </p>
              <span>
                Important software for opening .zip .rar and .pdf file
              </span>
              <table>
                <thead>
                  <tr>
                    <td>file name</td>
                    <td>download link</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>WinRAR for PC Windows</td>
                    <td>
                      <span className="button">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>PDF for PC Windows</td>
                    <td>
                      <span className="button">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>WinRAR for Android</td>
                    <td>
                      <span className="button">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>WinRAR for Android</td>
                    <td>
                      <span className="button">Download</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="left_side_last_discription">
              <p>
                Thanks for reading this article. we hope this article about{" "}
                <b>All Subjects Mid Term Papers Solved by Moaaz</b> was helpful
                for you. Share with your friends. Thank You.
              </p>
            </div>
          </div>
          <div className="left_side_social_side">
            <span>share to:</span>
            <div className="left_side_social_btn">
              <span className="like_btn">Like</span>
              <span className="tweet_btn">tweet</span>
              <span className="toggle">share
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
        </div>
        <RightSide getYear={getYear} picture={picture} />
      </section>
    </>
  );
};

export default AssignmentComponent;
