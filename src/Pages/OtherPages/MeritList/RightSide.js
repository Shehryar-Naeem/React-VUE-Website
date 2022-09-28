import React from "react"
import { Link, Route, Routes } from "react-router-dom";
import Archive from "./Archive";
import Comment from "./Comment";
import LatestPostLinks from "./LatestPostLink";
import RightsideCard from "./RightSIdeCards";
import TitlePost from "./TitlePost";
import TrendingSection from "./TrendingSection";

const RightSide =({getYear,picture})=>{
    return(
        <>
            <div className="right_side">
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
        </div>
        </>
    )
}
export default RightSide;