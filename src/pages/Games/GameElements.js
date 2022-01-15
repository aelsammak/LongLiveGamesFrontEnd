import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Separator = styled.span`
  margin-left: 20px;
  margin-right: 20px;
`;

export const GameDiv = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
`

export const Title = styled.h1`
  position: relative;
  top: 8vh;
  color: #fff;
  font-size: 5rem;
  font-weight: 500;
  text-align: center;
  text-shadow: #000 0px 0px 3px,   #000 0px 0px 3px,   #000 0px 0px 3px,
  #000 0px 0px 3px,   #000 0px 0px 3px,   #000 0px 0px 3px;
`

export const Line = styled.hr`
  position: relative;
  top: 10vh;
  background-color: #7A63FF;
  margin: auto; 
  width: 40%;
  height: 5px;
  border: 0.1px solid black;
`