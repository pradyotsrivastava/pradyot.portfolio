import React, { useState } from "react";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "./data";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./ProjectsStyle";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const toggleOptions = ["LIVE", "IN PROGRESS", "NEXT", "MERN", "REACT"];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          A collection of projects that reflect my passion for building
          impactful and innovative solutions.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          )}
          {toggleOptions.map((option) => (
            <>
              <Divider />
              <ToggleButton
                key={option}
                active={toggle === option}
                value={option}
                onClick={() => setToggle(option)}
              >
                {option.toUpperCase()}
              </ToggleButton>
            </>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
