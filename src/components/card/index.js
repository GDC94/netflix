import React from'react';

import {
  Container,
  Group,
  Title,


  Entities,
  Image

} from './styles/Card';







export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps}/>;
};


Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

