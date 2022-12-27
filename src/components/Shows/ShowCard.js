import React from "react";
import { Link } from "react-router-dom";
import { StyledShowCard } from "./ShowCard.styled";

const ShowCard = ({
  name,
  id,
  lang,
  image,
  summary,
  isStarred,
  onStarClick,
}) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";
  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="" />
      </div>
      <h4>Name: {name}</h4>
      <h4>Language: {lang}</h4>
      <h4>Id: {id}</h4>
      <p>{summaryAsText}</p>
      <div className="btns">
        <Link to={`show/${id}`}>Read More..</Link>
        <button
          onClick={onStarClick}
          style={isStarred ? { color: "orange" } : { color: "gray" }}
        >
          &#9733;
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
