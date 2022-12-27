import React from "react";
import { StyledActorCard } from "./ActorCard.styled";

const ActorCard = ({ name, gender, country, birthday, image, deathday }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="" />
      </div>
      <h4>Name: {name} </h4>
      <h4>{gender ? `Gender: ${gender}` : null}</h4>
      <p>{country ? `Comes From ${country.name}` : "No Country Known"} </p>
      <p>{birthday ? `Born on ${birthday}` : null}</p>
      <p className="deathday">{deathday ? `Died on ${deathday}` : "Alive"}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
