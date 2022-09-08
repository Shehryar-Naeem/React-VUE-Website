import React, { useEffect, useState } from "react";
// import picture from "../../../Images/assignment.jpeg";
import LoomVideo from "../../../Images/loom.mp4";
import Card from "./Card";
// import { useDispatch, useSelector } from "react-redux";
// import { showCardAction } from "../../../Action/Action";
// import RightsideCard from "./RightSIdeCards";
// import TitlePost from "./TitlePost";
// import LatestPostLinks from "./LatestPostLink";
// import TrendingSection from "./TrendingSection";
// import { Link, Route, Routes } from "react-router-dom";
// import Archive from "./Archive";
// import Comment from "./Comment";
import axios from "axios";
import Pagination from "./PaginationNumbers";
import RightSide from "./RightSide";
import SubjectLine from "./SubjectLine";
import TableComponent from "./tableComponent";
const getYear = new Date().getFullYear();
const AssignmentComponent = ({ picture }) => {
  const [cards, setCards] = useState([]);
  const [currPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currPosts = cards.splice(indexOfFirstPost, indexOfLastPost);

  const paginate = (PageNumber) => setCurrentPage(PageNumber);
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

  useEffect(() => {
    loadCard();
  }, []);
  const loadCard = async () => {
    const card = await axios.get("http://localhost:3003/cards");
    setCards(card.data);
  };
  console.log(cards.length);
  return (
    <>
      <section className="pastpaper_container">
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
            x
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
          <TableComponent/>
          <TableComponent/>
          <TableComponent/>
          <TableComponent/>
          <TableComponent/>
          <TableComponent/>

        </div>
        <RightSide getYear={getYear} picture={picture} />
      </section>
    </>
  );
};

export default AssignmentComponent;
