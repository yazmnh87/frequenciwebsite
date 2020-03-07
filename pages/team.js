import React from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import Tam from '../public/Tamara_hall_headshot_img.jpeg'
import Nate from '../public/nate_gardner_headshot_img.jpeg'

const Container = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
height: 100vh;
width: 100%;
border: 1px solid red;
`

const TeamMember = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border: 1px solid blue;

img{
    height: 200px;
    width:200px;
    border-radius: 50%;
    border:1px solid lime;
}
`
const TitleContainer = styled.div`
display: flex;
align-items: center;
width:100%;
border:1px solid red;

.main{
    margin: auto;
    font-size: 24px;
}
`

const Content = styled.div`
display: grid;
height:100%;
align-items: center;
grid-template-columns: 200px 400px;
grid-gap:0px;
border:1px solid purple;

.imgContainer{
    display: flex;
    align-items:center;
    height:100%;
    border:1px solid purple;
}

.contentConatiner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:100%;
    border:1px solid blue;
}

.name{
    font-weight: 700;
    font-size: 20px;
}

`

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
                <img src={Tam}/>
                </div>
                <div className="contentConatiner">
                <span className="name">Tamara Hall</span>
                <span className="title">Founder & CEO</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquid sapiente earum delectus cumque dolore inventore alias tempora laudantium obcaecati eos tenetur labore, dignissimos culpa corrupti provident voluptates consequatur quo.</p>
                </div>
                </Content>
            </TeamMember>
            <TeamMember>
            <img src={Nate}/>
            </TeamMember>
            <TeamMember>

            </TeamMember>
        </Container>
        </>
    )
}

export default Team;