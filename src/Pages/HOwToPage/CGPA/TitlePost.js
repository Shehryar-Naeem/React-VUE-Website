import React from "react";

const TitlePost = ({topic}) => {
  return (
    <>
      <div className="right_side_top">
        <span className="right_side_top_text">{topic}</span>
        <span className="right_side_top_bar"></span>
      </div>
    </>
  );
}

export default TitlePost;