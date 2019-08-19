import React, { Component } from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/routes';
import logo from '../../../assets/logo.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: black;
  position:relative;
  box-shadow: 0px 0px 10px white;
  z-index:3;
`;
const NavList = styled.ul`
    display:flex;
    width:30%;
    justify-content:space-around;
    list-style:none;
    @media screen and (max-width:768px) {
        position:absolute;
        right: 0px;
        height:92vh;
        top:85px;
        background-color: white;
        display:flex;
        flex-direction: column;
        align-items:center;
        transform:translateX(${({isVisible}) => (isVisible ? '0%' : '100%')});
        transition:  0.3s ease-in-out;
        box-shadow:0 0 40px black;
    }
    @media screen and (max-width:1011px) {
      width:45%;
    }
`;

const NavItem = styled.li`

`;
const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    letter-spacing:3px;
    color:white;
    font-weight: bold;
    font-size:14px;
    &.active {
    color: #c200ff;
    }
    @media screen and (max-width:768px) {
        color:black;
        &.active {
        color: #c200ff;
        }
    }

`;

const Burger =styled.div`
    display:none;    
    
    @media screen and (max-width:768px) {
     display:block;
     cursor: pointer;

  }   
`;

const Line1 =styled.div`
    width:25px;
    height:3px;
    background-color:white;
    margin:5px !important;
    transition: 0.3s;
    transform: ${props=> props.isVisible ? "rotate(-45deg) translate(-5px,6px)" : "none"};
`;
const Line2 =styled.div`
    width:25px;
    background-color:white;
    height:3px;
    margin:5px !important;
    opacity: ${props => props.isVisible ? "0" : "1"};
`;
const Line3 =styled.div`
    width:25px;
    background-color:white;
    height:3px;
    margin:5px !important;
    transition: 0.3s;
    transform: ${props=> props.isVisible ? "rotate(45deg)  translate(-5px,-6px)" : "none"};

`;
const ImgLogo = styled.img`
    @media screen and (max-width:768px) {
        max-width: 300px;
        max-height:250px;
    }
`;  



class NavBar extends Component {
    state = {
        isBurgerClicked : false,
    }

    handleBurgerCLick = () => {
        this.setState(prevState => ({
            isBurgerClicked: !prevState.isBurgerClicked,
        }))
    }

    render() {

    return(
        <Nav>
             <ImgLogo src={logo} />
            <NavList isVisible={this.state.isBurgerClicked}>
                <NavItem>
                    <StyledNavLink  to={routes.home}>Strona Głowna</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to={routes.contact}>Kontakt</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to={routes.about}>O Nas</StyledNavLink>
                </NavItem>
            </NavList>
            <Burger onClick={this.handleBurgerCLick} >
                <Line1 isVisible={this.state.isBurgerClicked}/>
                <Line2 isVisible={this.state.isBurgerClicked}/>
                <Line3 isVisible={this.state.isBurgerClicked}/>
            </Burger>
        </Nav>
    )
}
}



export default NavBar;