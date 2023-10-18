// pages/work.tsx

import React from "react";
import styled from "@emotion/styled";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const WorkHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
`;

const WorkContent = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 1rem 0;
`;

const SectionHeading = styled.h2`
  font-size: 20px;
  margin: 1rem 0;
`;

const WorkPage: React.FC = () => {
  const handleButtonClick = () => {
    alert("Button clicked");
  };

  return (
    <WorkContainer>
      <WorkHeading>Our Work</WorkHeading>
      <WorkContent>
        Explore our impressive portfolio of projects and collaborations. We take
        pride in the quality of our work and the value we bring to our clients.
      </WorkContent>
      <SectionHeading id="companies">Companies</SectionHeading>
      <WorkContent>
        Learn about the companies weve partnered with and the solutions weve
        provided.
      </WorkContent>
      <SectionHeading id="projects">Projects</SectionHeading>
      <WorkContent>
        {/* Explore the various projects weve undertaken, showcasing our expertise
        and capabilities.
        <h1>Welcome to Your Portfolio</h1>
        <p>
          This is the homepage of your portfolio. You can add your introduction
          and other content here.
        </p>
        <ProjectCard title="Project 1" />
        <ProjectCard title="Project 2" />
        <div>
          <Button variant="primary" onClick={handleButtonClick}>
            Primary Button
          </Button>
          <Button variant="default" onClick={handleButtonClick}>
            Default Button
          </Button>
          <Button variant="secondary" onClick={handleButtonClick}>
            Secondary Button
          </Button>
        </div> */}
      </WorkContent>
    </WorkContainer>
  );
};

export default WorkPage;
