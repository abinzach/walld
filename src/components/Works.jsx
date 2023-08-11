import React, { useState } from "react";
import styled from "styled-components";
import Interior from "./interior";
import ProductDesign from "./ProductDesign";
import Architecture from "./architecture";

const data = [
  "architecture",
  "interior ",
  "archviz",
  "graphic design",
  
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  z-index:1;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  z-index:5;
 

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px grey;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: transparent;
    -webkit-text-stroke: 1px grey;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: grey;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-text-stroke: 1px black;
  }
 
  &:hover {
    
    ::after {
      animation: moveText 2s linear both;
      

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  z-index:0;
`;

const Works = () => {
  const [work, setWork] = useState("architecture");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "architecture" ? (
            <Architecture />
          ) : work === "Development" ? (
            <Interior />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
