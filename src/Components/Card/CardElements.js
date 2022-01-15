import styled from "styled-components";
import {Link} from "react-scroll";

export const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "playbtn";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${(props) => props.imgUrl});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.73rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background-clip: text;
  -webkit-background-clip: text;
  color: #fff;
`;

export const CardDescription = styled.p`
  align-items: center;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px;
`;

export const CardButton = styled(Link)`
    border-radius: 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: #5930e5;
    padding: 22px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    text-shadow: #000 0px 0px 2px,   #000 0px 0px 2px,   #000 0px 0px 2px,
  #000 0px 0px 2px,   #000 0px 0px 2px,   #000 0px 0px 2px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`