import React from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import background from '../public/frequency_graphic_pic.jpg'

const Container = styled.div`
display: flex;
justify-content: center;
height: 100vh;
width: 100%;
background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;
`

const Title = styled.span`
font-size: 65px;
color: #fff;
font-weight: 800;
position: relative;
top: 20%;
`

const Home = props => {
    return (
        <>
        <Navbar />
        <Container>
            <Title>frequenci</Title>
        </Container>
        </>

    )
}

export default Home;