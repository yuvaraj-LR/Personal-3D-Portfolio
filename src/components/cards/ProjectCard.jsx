import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 550px;
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
`;
const Image = styled.img`
  width: 100%;
  min-height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  padding: 6px 0 20px;
  font-size: 21px;
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
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
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
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Skill = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  padding: 5px;
  border: 1px solid ${({theme}) => theme.card_outline};
  border-radius: 5px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 10px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Title>{project.title}</Title>
      <CardContainer>
        <div>
          <Tags>
            {
              project.tags.map((tag, i) => (
                <Skill key={i}>{tag}</Skill>
              ))
            }
          </Tags>
          <Details>
            <Description>{project.description}</Description>
          </Details>
        </div>

        <ButtonContainer>
          <Button href={project.github} target="_blank">
            View Code
          </Button>
          <Button href={project.webapp} target="_blank">
            Live App
          </Button>
        </ButtonContainer>
      </CardContainer>
    </Card>
  );
};

export default ProjectCard;
