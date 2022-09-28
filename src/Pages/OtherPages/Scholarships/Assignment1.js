import React, { useEffect, useState } from "react";
// import picture from "../../../Images/assignment.jpeg";
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
const getYear = new Date().getFullYear();
const AssignmentComponent = ({picture}) => {
  const [cards,setCards]=useState([])
  const [currPage,setCurrentPage]=useState(1)
  const [postsPerPage]=useState(6)

  const indexOfLastPost= currPage*postsPerPage;
  const indexOfFirstPost= indexOfLastPost-postsPerPage;
  const currPosts=cards.splice(indexOfFirstPost,indexOfLastPost)

  const paginate=(PageNumber)=>setCurrentPage(PageNumber) 
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

  useEffect(()=>{
    loadCard()
  },[])
  const loadCard= async()=>{
    const card = await axios.get("http://localhost:3003/cards");
    setCards(card.data)
  }
  console.log(cards.length);
  return (
    <>
      <section className="assignment_one_container">
        <div className="left_side">
          <div className="left_side_top">
            <div className="left_side_top_text_btn">
              <span className="left_side_top_text">
                Articles By "SCHOLARSHIPS"
              </span>
              <span className="left_side_top_dropdown_btn"></span>
            </div>
            <div className="left_side_top_logo">
              <span className="left_side_bar"></span>
              <div className="left_side_btn">
                <span>
                  <i className="fa fa-th" aria-hidden="true"></i>
                </span>
                <span>
                  <i className="fa fa-th-list" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          {/* {loading && <h1>loading</h1>}
          {error && <h1>Error</h1>} */}
          <div className="grid_container">
        
                  <Card  cards={currPosts}/>
          </div>
          <Pagination postsPerPage={postsPerPage} totalPost={cards.length} paginate={paginate}/>
        </div>
        <RightSide getYear={getYear} picture={picture}/>
        {/* <div className="right_side">
          <RightsideCard
            topic={`spirng ${getYear} Assignment`}
            image={picture}
            title={`All subjects Assignment Solution spring ${getYear}`}
          />

          <RightsideCard
            topic={`spirng ${getYear} Assignment`}
            image={picture}
            title={`All subjects Assignment Solution spring ${getYear}`}
          />
          <RightsideCard
            topic={`spirng ${getYear} Assignment`}
            image={picture}
            title={`All subjects Assignment Solution spring ${getYear}`}
          />
          <TitlePost topic={"Show love on link us on facebook"}/>
          <div className="right_card_container_show_love">
            <div className="image_portion">
            <img src={picture} alt="AssignmentOic" />
            </div>
            <div className="text_portion">
              <span>Virtual Study solution</span>
              <span >
                <i className="fa fa-facebook"></i>
                like page
              </span>
              <span>6k likes</span>
            </div>
          </div>
          <TitlePost topic={`Latest Post`}/>
          <div className="right_post_container">
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
            <LatestPostLinks link={`CS502 Asssignment 1 solution spring ${getYear}`}/>
          </div>
          <TitlePost topic={`select you subject code`}/>
          <div className="right_courseCode_area">
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
            <span>CS301</span>
          </div>
          <div className="right_courseNavigation_area">
            <span> <Link to="">Trending</Link></span>
            <span><Link to="comments">commments</Link></span>
            <span><Link to="archive">Archive</Link></span>
          
          </div>
          <div className="right_trending_area"> 
          <Routes>
            <Route path="" element={<TrendingSection getYear={getYear}/> }/>
            <Route path="comments" element={<Comment/>}/>
            <Route path="archive" element={<Archive getYear={getYear}/>}/>
          </Routes>
            
             
          </div>
        </div> */}
      </section>
    </>
  );
};

export default AssignmentComponent;
