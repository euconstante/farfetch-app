import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Home: React.FC = () => {
  const handleButtonClick = () => {
    alert("Button clicked");
  };

  return (
    <div>
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
      </div>
    </div>
  );
};

export default Home;
