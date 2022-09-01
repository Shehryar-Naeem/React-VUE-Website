import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({url,icon,text}) => {
  return (
    <>
      <li>
        <Link to={url}>
          <span className="icon">{icon}</span>
          <span className="title">{text}</span>
        </Link>
      </li>
    </>
  );
};
export default ListItem;
