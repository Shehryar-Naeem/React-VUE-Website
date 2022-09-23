import React from "react";
import TitlePost from "./TitlePost";

const RightsideCard = ({ topic, image, title }) => {
  return (
    <>
    <TitlePost topic={topic}/>
      <div className="right_card_container">
        <img src={image} alt="AssignmentOic" />
        <span>{title}</span>
      </div>
    </>
  );
};
export default RightsideCard;
