import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 50%;
  margin-bottom: 30px;
  max-width: 870px;
  margin: auto;


`;

export const Input = styled.input`
  max-width: 430px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 59px;
  box-sizing: border-box;
  outline: none;
  @media (max-width: 900px) {
    height: 44px;
   
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 59px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  
`;

export const Text = styled.p`
  font-size: 19.3px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
    max-width: 300px;
  }
`;