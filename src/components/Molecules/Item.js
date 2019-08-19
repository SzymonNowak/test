import styled from 'styled-components'
import React from 'react';
const IMG = styled.img`
  max-width: 70%;
  height: auto;
  box-shadow:0 0 10px white;
  border-radius: 20px;
  display: block;
`;


const Info = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
`;


const Container = styled.div`
position:relative;
&:hover {
    opacity: 1;
  }

`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 70%;
  border-radius:50px;
  opacity: 0;
  transition: .5s ease;
  background-color: white;

  &:hover {
    opacity: 1;
  }

`;

const StyledH1= styled.h1`
 text-transform: uppercase;
`;

const Item = (props) => {
    return(
      <Container>
        <IMG src={require(`../../assets/Photos/${props.url}`)} alt={props.title}/>
        <Wrapper>
          <Info>
            <StyledH1>{props.title}</StyledH1>
           <h2> Cena: {props.price}</h2> 
          </Info>
        </Wrapper>
        
      </Container>
    
    )
}

export default Item;