import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import img from '../../../images/misc/home-bg.jpg';
import joker from '../../../images/misc/joker1.jpg';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, 
        rgba(0, 0, 0, 0.705), 
        rgba(153, 153, 153, 0.021), 
        rgba(0, 0, 0, 0.972)), 
        url(${({ src }) => (src === 'joker1' ? joker : img)})  top left / cover
    no-repeat;
    @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  } 
`;

export const Container = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 56px;
    height: 64px;
    padding: 18px 0;
`;

export const Frame = styled.div`
   
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.904);
  font-weight: 650px;
`;


export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Logo = styled.img`
    width: 100px;
    margin-top:35px;

    @media (max-width: 1000px){
        width: 88px;
    }
`;

export const Top = styled.img`
  width: 30px;
    
`;
export const Ranking = styled.div`
  display: flex;
  align-items: center;

`;
export const Rank = styled.p`
  color: #fff;
  margin-left: 15px;
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 128px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 16px;
  border-radius: 3px;
  padding: 7px 17px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 30px;


  @media (max-width: 1000px){
        width: 104px;
        font-size: 15px;
        padding: 5px 8px;
    }

`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Link = styled.p`
  margin-left: 15px;
  margin-top: 45px;
  font-size: 15px;
  color: #ffffff92;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  transition: .4s;
  &:hover {
    color: #ffffff7f;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;


export const TextHome = styled.p`
  margin-left: 40px;
  margin-top: 45px;
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: .4s;
  &:hover {
    color: #ffffff7f;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;


export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 34px;
  height: 34px;
  cursor: pointer;
  margin-top: 35px;
  border-radius: 4px;
`;


export const PictureSmall = styled.img`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 4px;
`;

export const Bell = styled.img`
  width: 28px;
  margin-top: 35px;
  margin-left: 18px;

`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 20px;
  width: 138px;
  top: 71px;
  right: 1px;
  border-radius: 10px;
  
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 16px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link} {
      cursor: pointer;
    } 
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;


export const SearchInput = styled.input`
  margin-top: 35px;
  background-color: rgba(64, 64, 64, 0.5);
  color: #242323;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '240px' : '0px')};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
 margin-top: 35px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Information = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #80808076;
  color: #f6f4f4;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 3px;
  max-width: 210px;
  font-weight: bold;
  font-size: 17px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #3f3e3e76;
  }
`;


export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 3px;
  max-width: 150px;
  font-weight: bold;
  font-size: 17px;
  margin-top: 10px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

