import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { BreakpointMobile } from "../components/common/GlobalStyle";
import Tam from "../public/Tamara_hall_headshot_img.jpeg";
import Nate from "../public/nate_gardner_headshot_img.jpeg";
import Bill from "../public/william_violette_img.jpg";
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr);
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
  /* border: 1px solid purple; */

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
    width: 100%;
    /* border: 1px solid blue; */
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
    /* border:1px solid blue; */
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
    .name {
      padding: 10px 0 0 0;
    }
    .title {
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
                Tamara Hall,BSN, MBA, retired healthcare executive is now
                focused on giving back and bringing health and wellness tools to
                market. Outside of pursuing business investments and
                philanthropic endeavors, Tamara likes spending time with her
                grandchildren, gardening, outdoors and working with new
                start-ups.
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
                Nate is a native of Salt Lake City, Utah, where he graduated
                from Westminster College in 2018. He is a sports fanatic,
                especially baseball, and has a goal to visit every MLB stadium
                (13/30 so far). Nate is passionate about mind health and hopes
                to help others maximize their personal wellness.
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
                Bill Violette is from South Jordan, UT where he works as a full
                time freelance software developer. Outside of
                pursuing greatness within his career as a developer Bill spends
                his time working as a hobbyist mechanic rebuilding cars, playing
                golf and enjoying the mountains of utah.
              </p>
            </div>
          </Content>
        </TeamMember>
      </Container>
    </>
  );
};

export default Team;
