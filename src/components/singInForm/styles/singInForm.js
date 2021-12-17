import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 670px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 7px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 38px 68px 40px;
  margin-bottom: 100px;
  margin-top: 20px;
  
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 1px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;

`;


export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  outline: none;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 12px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Space = styled.div`
  background: transparent;
  width: auto;
  height: 10px;
  
`;

export const BlueText = styled.div`
  font-size: 13px;
  line-height: normal;
  color: #0071eb;;

`;

export const Face = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 55px;


`;
export const LoginFace = styled.p`
 
  font-size: 13px;
  line-height: normal;
  color: #737373;;
  font-weight: 500;

`;


export const IconFace = styled.img`
  width: 27px;
  margin-right: 6px;

`;


