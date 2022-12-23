import React from "react";
import IMG_NOT_FOUND from "../../images/no-image.png";
import { FlexGrid } from "../styled";
import ActorCard from "./ActorCard";

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => {
        return (
          <ActorCard
            key={person.id}
            name={person.name}
            gender={person.gender}
            country={person.country}
            birthday={person.birthday}
            image={person.image ? person.image.medium : IMG_NOT_FOUND}
            deathday={person.deathday}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ActorGrid;
