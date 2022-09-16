import React from "react";

const Card = ({ cards }) => {
  return (
    <>
      {cards.map((curr, index) => {
        return (
          <div className="grid_card">
            <img src={curr.img} alt="assignment pic" />
            <p>{curr.discription}</p>
          </div>
        );
      })}
    </>
  );
};
export default Card;
