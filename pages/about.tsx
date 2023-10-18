// pages/about.tsx

import React from "react";
import styled from "@emotion/styled";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const AboutHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
`;

const AboutContent = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 1rem 0;
`;

const SectionHeading = styled.h2`
  font-size: 20px;
  margin: 1rem 0;
`;

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <AboutHeading>About Us</AboutHeading>
      <AboutContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
        finibus libero. Proin aliquet arcu ac ex egestas, et viverra ligula
        tincidunt. Integer gravida, massa vel pellentesque scelerisque, justo
        metus suscipit massa.
      </AboutContent>
      <SectionHeading id="career">Career</SectionHeading>
      <AboutContent>
        Learn more about our career opportunities and what its like to work with
        us.
      </AboutContent>
      <SectionHeading id="projects">Projects</SectionHeading>
      <AboutContent>
        Explore our latest projects and collaborations that showcase our
        expertise.
      </AboutContent>
      <SectionHeading id="interests">Interests</SectionHeading>
      <AboutContent>
        Discover our teams interests and what inspires us to do great work.
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;
