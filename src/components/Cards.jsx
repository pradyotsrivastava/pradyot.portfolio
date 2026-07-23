import React from "react";
import styled from "styled-components";

/* —— Experience —— */
const ExpDocument = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const ExpDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ExpSpan = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExpPoints = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExpPoint = styled.li`
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExpCard = styled.div`
  width: 650px;
  border-radius: 10px;
  padding: 16px 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  background: ${({ theme }) => theme.card};

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &:hover ${ExpDocument} {
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    padding: 12px;
    gap: 10px;
    width: 300px;
  }
`;

const ExpTop = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const ExpImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 4px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const ExpBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const ExpRole = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ExpCompany = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExpDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const ExpSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 4px;
  border-top: 1px solid ${({ theme }) => theme.text_primary + 18};
`;

const ExpSkillsLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const ExpItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExpSkill = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 18};
  padding: 4px 10px;
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 3px 8px;
  }
`;

export const ExperienceCard = ({ experience }) => {
  const desc = experience?.desc;
  const isBulletList = Array.isArray(desc);

  return (
    <ExpCard>
      <ExpTop>
        <ExpImage src={experience.img} alt="" />
        <ExpBody>
          <ExpRole>{experience.role}</ExpRole>
          <ExpCompany>
            {experience.company}
            {experience.location ? ` · ${experience.location}` : ""}
          </ExpCompany>
          <ExpDate>{experience.date}</ExpDate>
        </ExpBody>
        {experience.doc && (
          <a href={experience.doc} target="_blank" rel="noreferrer">
            <ExpDocument src={experience.cert} alt="Certificate" />
          </a>
        )}
      </ExpTop>
      <ExpDescription>
        {isBulletList ? (
          <ExpPoints>
            {desc.map((point) => (
              <ExpPoint key={point}>{point}</ExpPoint>
            ))}
          </ExpPoints>
        ) : (
          desc && <ExpSpan>{desc}</ExpSpan>
        )}
        {experience?.skills?.length > 0 && (
          <ExpSkills>
            <ExpSkillsLabel>Skills</ExpSkillsLabel>
            <ExpItemWrapper>
              {experience.skills.map((skill) => (
                <ExpSkill key={skill}>{skill}</ExpSkill>
              ))}
            </ExpItemWrapper>
          </ExpSkills>
        )}
      </ExpDescription>
    </ExpCard>
  );
};

/* —— Education —— */
const EduDocument = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const EduDescription = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EduSpan = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const EduCard = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${EduDocument} {
    display: flex;
  }

  &:hover ${EduSpan} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  border: 0.1px solid #854ce6;
`;

const EduTop = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const EduImage = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const EduBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EduName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const EduDegree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EduDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const EduGrade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const EducationCard = ({ education: edu }) => {
  return (
    <EduCard>
      <EduTop>
        <EduImage src={edu.img} alt="" />
        <EduBody>
          <EduName>{edu.school}</EduName>
          <EduDegree>{edu.degree}</EduDegree>
          <EduDate>{edu.date}</EduDate>
        </EduBody>
      </EduTop>
      <EduGrade>
        <b>Grade: </b>
        {edu.grade}
      </EduGrade>
      <EduDescription>
        <EduSpan>{edu.desc}</EduSpan>
      </EduDescription>
    </EduCard>
  );
};

/* —— Certification —— */
const CertDocument = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const CertDescription = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CertSpan = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const CertCard = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${CertDocument} {
    display: flex;
  }

  &:hover ${CertSpan} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const CertTop = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const CertImage = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const CertBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CertRole = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const CertCompany = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CertDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const CertificationCard = ({ certification: cert }) => {
  return (
    <CertCard>
      <CertTop>
        <CertImage src={cert.img} alt="" />
        <CertBody>
          <CertRole>{cert.role}</CertRole>
          <CertCompany>{cert.company}</CertCompany>
          <CertDate>{cert.date}</CertDate>
        </CertBody>
        {cert.doc && (
          <a href={cert.doc} target="_blank" rel="noreferrer">
            <CertDocument src={cert.cert} alt="Certificate" />
          </a>
        )}
      </CertTop>
      <CertDescription>
        {cert?.desc && <CertSpan>{cert?.desc}</CertSpan>}
      </CertDescription>
    </CertCard>
  );
};

/* —— Project card —— */
const ProjButton = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const ProjCard = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  &:hover ${ProjButton} {
    display: block;
  }
`;

const ProjImage = styled.img.attrs({ referrerPolicy: "no-referrer" })`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const ProjTags = styled.div`
  width: 100%;
  min-height: 84px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    min-height: 78px;
  }
`;

const ProjTag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const ProjDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const ProjTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjDate = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const ProjDescription = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ProjMembers = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const ProjAvatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

export const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <ProjCard
      onClick={() => setOpenModal({ state: true, project })}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ")
          setOpenModal({ state: true, project });
      }}
    >
      <ProjImage src={project.image} alt="" />
      <ProjTags>
        {project.tags?.map((tag) => (
          <ProjTag key={tag}>{tag}</ProjTag>
        ))}
      </ProjTags>
      <ProjDetails>
        <ProjTitle>{project.title}</ProjTitle>
        <ProjDate>{project.date}</ProjDate>
        <ProjDescription>{project.description}</ProjDescription>
      </ProjDetails>
      <ProjMembers>
        {project.member?.map((member) => (
          <ProjAvatar key={member.img} src={member.img} alt="" />
        ))}
      </ProjMembers>
    </ProjCard>
  );
};
