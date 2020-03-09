import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { BreakpointMobile } from "../components/common/GlobalStyle";
import Tam from "../public/Tamara_hall_headshot_img.jpeg";
import Nate from "../public/nate_gardner_headshot_img.jpeg";
import Bill from "../public/william_violette_img.jpg";
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100vh;
  width: 100%;
  /* border: 1px solid red; */
`;

const TeamMember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* border: 1px solid blue; */

  img {
    height: 155px;
    width: 155px;
    border-radius: 50%;
    object-fit: cover;
    /* border: 1px solid lime; */
  }

  @media only screen and (max-width: ${BreakpointMobile + "px"}) {
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  /* border: 1px solid red; */

  .main {
    font-weight: 700;
    font-family: ${props => props.theme.fonts.primary};
    margin: auto;
    font-size: 44px;
  }
`;

const Content = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  grid-template-columns: 200px 400px;
  grid-gap: 0px;
  /* border:1px solid purple; */

  .imgContainer {
    display: flex;
    align-items: center;
    height: 100%;
    /* border:1px solid purple; */
  }

  .contentConatiner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    /* border:1px solid blue; */
  }

  .name {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 800;
    font-size: 20px;
  }

  .title {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 500;
    font-size: 14px;
  }

  .description {
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 700;
    font-size: 15px;
  }

  @media only screen and (max-width: ${BreakpointMobile + "px"}) {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    grid-gap: 0px;

    .imgContainer {        
      /* border: 1px solid purple; */
    }

    .contentConatiner {
        display: flex;
        align-items: center;
        text-align: center;
        max-width: 85%;
      /* border: 1px solid blue; */
    }
    .name{
        padding: 10px 0 0 0;
    }
    .title{
        padding: 7px 0 0 0;
    }
  }
`;

const Team = props => {
  return (
    <>
      <Navbar />
      <TitleContainer>
        <span className="main">Team Members</span>
      </TitleContainer>
      <Container>
        <TeamMember>
          <Content>
            <div className="imgContainer">
              <img src={Tam} />
            </div>
            <div className="contentConatiner">
              <span className="name">Tamara Hall</span>
              <span className="title">Founder & CEO</span>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus aliquid sapiente earum delectus cumque dolore inventore
                alias tempora laudantium obcaecati eos tenetur labore,
                dignissimos culpa corrupti provident voluptates consequatur quo.
              </p>
            </div>
          </Content>
        </TeamMember>
        <TeamMember>
          <Content>
            <div className="imgContainer">
              <img src={Nate} />
            </div>
            <div className="contentConatiner">
              <span className="name">Nate Gardner</span>
              <span className="title">Project Manager</span>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus aliquid sapiente earum delectus cumque dolore inventore
                alias tempora laudantium obcaecati eos tenetur labore,
                dignissimos culpa corrupti provident voluptates consequatur quo.
              </p>
            </div>
          </Content>
        </TeamMember>
        <TeamMember>
          <Content>
            <div className="imgContainer">
              <img src={Bill} />
            </div>
            <div className="contentConatiner">
              <span className="name">Bill Violette</span>
              <span className="title">Developer</span>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus aliquid sapiente earum delectus cumque dolore inventore
                alias tempora laudantium obcaecati eos tenetur labore,
                dignissimos culpa corrupti provident voluptates consequatur quo.
              </p>
            </div>
          </Content>
        </TeamMember>
      </Container>
    </>
  );
};

export default Team;
