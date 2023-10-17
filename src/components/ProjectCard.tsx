// src/components/ProjectCard.tsx

import React, { useState } from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  background-color: ${(props) => (props.isFavorite ? "red" : "transparent")};
  color: ${(props) => (props.isFavorite ? "white" : "black")};
  border: 1px solid red;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
`;

const ProjectCard: React.FC<{ title: string }> = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <CardContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <FavoriteButton onClick={handleFavoriteClick} isFavorite={isFavorite}>
        &#10084; {/* Heart symbol */}
      </FavoriteButton>
    </CardContainer>
  );
};

export default ProjectCard;
