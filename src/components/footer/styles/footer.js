import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 930px;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 34px 43px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 14px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Button = styled.select`
  margin-top: 22px;
  margin-bottom: 17px;
  font-size: 16px;
  color: #DFDEDE;
  width: 80%;
  height: 50px;
  background: transparent;
  padding-left: 10px;
  outline: none;
  transition: box-shadow 0.6s;
  
`;

export const Option = styled.option`
  font-size: 16px;
  color: #757575;
  
`;


export const Text = styled.p`
  font-size: 13px;
  color: #757575;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;