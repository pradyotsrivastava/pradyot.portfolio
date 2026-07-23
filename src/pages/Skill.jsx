import React from "react";
import styled from "styled-components";
import { skills } from "../data/skills";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
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
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 48px;
  justify-content: center;
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  transition: color 0.3s ease;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: color 0.3s ease, border-color 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const SkillBlock = styled.div`
  width: 100%;
  max-width: 520px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  isolation: isolate;
  transition: transform 0.35s ease, box-shadow 0.35s ease,
    border-color 0.35s ease, background-color 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    background-color: ${({ theme }) => theme.card_light};
    border-color: #a855f7;
    box-shadow: 0 12px 32px rgba(133, 76, 230, 0.28),
      0 4px 16px rgba(23, 92, 230, 0.18);
    filter: none;
    -webkit-filter: none;
  }

  &:hover ${SkillTitle} {
    color: ${({ theme }) => theme.text_primary};
  }

  &:hover ${SkillItem} {
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const Skill = () => {
  return (
    <Container id="skills" className="w-full">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here’s a glimpse into the skills I’ve mastered and continue to refine
          on my journey as a developer over the past 3 years
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <SkillBlock key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage src={item.image} alt="" />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillBlock>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skill;
