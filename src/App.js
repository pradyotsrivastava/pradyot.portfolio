import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import {
  About,
  Certifications,
  Education,
  Experience,
  Projects,
  Skill,
} from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import { darkTheme } from "./utils/theme";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body className="min-h-screen antialiased">
          <About />
          <Wrapper>
            <Skill />
            <Experience />
          </Wrapper>
          <Projects setOpenModal={setOpenModal} />
          <Wrapper>
            <Certifications />
            <Education />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
