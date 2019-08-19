import React, {Component} from 'react';
import GridTemplate from '../templates/GridTemplate';
import styled from 'styled-components'
import {database} from '../assets/Photos/database';
import Item from '../components/Molecules/Item';

const Header = styled.div`
  grid-column: 1/4;
  text-align:center;
  margin-bottom:200px;
  letter-spacing: 5px;
  @media (max-width:1500px) {
    grid-column: 1/3;
    }
    @media  (max-width:1111px) {
      grid-column: 1/2;
      text-align:left;
    }
    @media  (max-width:768px) {
      text-align:left;
      margin-bottom:100px;
    }
`;

const Paragraph = styled.p`
  font-size:40px;
  margin-top: 30px;
  letter-spacing: 2px;
  @media (max-width:1500px) {
    font-size: 35px;
    }
    @media  (max-width:1111px) {
      font-size: 30px;
    }
    @media  (max-width:768px) {
      font-size: 25px;
    }
`;

const H = styled.h1`
font-size: 70px;
@media (max-width:1500px) {
  font-size: 50px;
    }
    @media  (max-width:1111px) {
      font-size: 40px;
    }
    @media  (max-width:768px) {
      font-size: 35px;
    }
`;

const Home = () => {
        return(
          <>
            <GridTemplate>
              <Header>
                <H>
                  Witamy
                </H>
                <Paragraph>
                  B&K Product to firma produkujaca torby, saszetki, plecaki, nerki.
                </Paragraph> 
                <Paragraph>
                  Prowadzimy również indywidualne projekty !!!
                </Paragraph>
              </Header>
            {database.map(item => 
                (
                  <Item
                    cardType="articles"
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    url={item.photo}
                  />
                )
              )
            }
            </GridTemplate>
            </>
    )
}

export default Home;