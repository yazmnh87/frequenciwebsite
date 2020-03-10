import React, {useState} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 50px;
width: 100%;
border:1px solid black;

.icon{
margin-top: 10px;
color: black;
}

.menuContainer{
    height: 50px;
    width: 30px;
    margin-right: 15px;
    /* border: 1px solid red; */
}

.menuContainer:hover{
   & ul{
        display: block;
    }
    
}

ul{
    background-color:#fff;
    display: none;
    position: absolute;
    list-style: none;
    padding:0;
    top:35px;
    right: 0;
    width: 200px;
    border:1px solid black;
}

ul li{
    
    position: relative;
    width: 100%;
    height: 50px;
    left: 0;
    /* border:1px solid red; */
    box-sizing: border-box;
    
}

ul li:hover{
    background-color:#000;
    & a{
        color: #fff;
    }
}

ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 100%;
    width: 100%;
    font-size: 20px;
    font-family:${props=> props.theme.fonts.secondary};
    font-weight:700;
    color:#000;
    border-bottom:1px solid black;
    /* border:1px solid blue; */
}
`

export const Navbar = props => {
    const router = useRouter();
    const [menu, setMenu] = useState(false)
    return (
        <Container>
            <div className="menuContainer">
            <FontAwesomeIcon className="icon" size="2x" icon={faBars}/>
                <ul>
                    <li><Link href="/home"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/team"><a>Team</a></Link></li>
                </ul>  
            </div>  
        </Container>
    )
}