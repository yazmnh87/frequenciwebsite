import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'

const Container = styled.div`
display: flex;
justify-content: center;
height:100vh;
width:100%;
`

const Title = styled.span`
font-family: ${props=> props.theme.fonts.primary};
font-size:50px;
color: black;
margin: 10px 0 0 0;
`

const About = props => {
    return (
        <>
        <Navbar />
        <Container>
            <Title>About</Title>
        </Container>
        </>
    )
}

export default About;