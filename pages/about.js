import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { BreakpointMobile } from "../components/common/GlobalStyle";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Title = styled.span`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 50px;
  color: black;
  margin: 10px 0 0 0;
  @media only screen and (max-width: ${BreakpointMobile + "px"}) {
      /* margin:auto; */
      font-size:30px;
      text-align: center;
  }
`;

const Body = styled.p`
margin:10px 50px 0 50px;
text-align: center;
font-size:26px;
font-family: ${props=> props.theme.fonts.secondary};

@media only screen and (max-width: ${BreakpointMobile + "px"}) {
    font-size: 22px;
}
`

const About = props => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>find your frequenci</Title>
        <Body>
          Backed by scientific research, frequenci is here to help you build and
          maintain positive habits, enhance personal wellness and achieve an
          overall better quality of life. By utilizing regular prompts frequenci
          empowers even the busiest people to improve their mind health in the 6
          key areas known to have the greatest impact on happiness, enthusiasm,
          resilience, and optimism. Join us today and tune in to your own
          frequenci: Mobile App COMING SOON!
        </Body>
      </Container>
    </>
  );
};

export default About;
