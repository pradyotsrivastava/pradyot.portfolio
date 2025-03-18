import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React from "react";
import styled from "styled-components";
import CertificationCard from "../Cards/CertificationCard";
import { certification } from "./data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    100.26deg,
    rgba(0, 102, 255, 0.05) 42.33%,
    rgba(150, 0, 225, 0.05) 127.07%
  );
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  gap: 12px;
`;

const StyledTimelineItem = styled(TimelineItem)`
  display: flex;
  flex-direction: ${(props) => (props.isEven ? "row-reverse" : "row")};
`;

const index = () => {
  return (
    <Container id="certification">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          A commitment to continuous learning, showcasing my dedication to
          mastering industry-recognized skills.
        </Desc>
        <TimelineSection>
          <Timeline>
            {certification.map((certification, index) => (
              <StyledTimelineItem key={index} isEven={index % 2 === 0}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== certification.length - 1 && (
                      <TimelineConnector style={{ background: "#854CE6" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <CertificationCard certification={certification} />
                  </TimelineContent>
                </TimelineItem>
              </StyledTimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
