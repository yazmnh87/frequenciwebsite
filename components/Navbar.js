import React, {useState} from 'react';
import styled from 'styled-components';
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
margin-right: 10px;
color: black;
}

ul{
    display: block;
    position: absolute;
    list-style: none;
    top:35px;
    width: 100px;
    border:1px solid lime;
}

ul li{
    position: relative;
    width: 100%;
    height: 30px;
    left: 0;
    border:1px solid red;
    box-sizing: border-box;
    
}

ul li a{
    height: 100%;
    width: 100%;
    border:1px solid blue;
}
`

export const Navbar = props => {
    const [menu, setMenu] = useState(false)
    return (
        <Container>
            <FontAwesomeIcon onMouseOver={()=>setMenu(true)} onMouseLeave={()=> setMenu(false)} className="icon" size="2x" icon={faBars}/>
            {menu ?
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Team</a></li>
                </ul>
            :
            null    
        }
        </Container>
    )
}