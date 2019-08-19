import React, { Component } from 'react';
import styled from 'styled-components'

    const Wrapper = styled.div`
    margin-left:160px;
    margin-bottom: 100px;
    margin-top:100px;

    @media (max-width:1500px) {
    margin-left:200px;
    /* margin-right:75px; */

    }
    @media  (max-width:1111px) {
    margin-left:200px;
    }
    @media  (max-width:768px) {
    margin-left:30%; 
    margin-right:20px; 
    }
`;
    const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap:60px;

    @media screen and (max-width:1500px) {
        grid-template-columns: repeat(2, 1fr);
    grid-gap:40px;

    }
    @media screen and (max-width:1111px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;



const GridTemplate = ({children}) => {
    return (
        <Wrapper>
            <Grid>
                {children}
            </Grid>
        </Wrapper>
    )
}

export default GridTemplate;