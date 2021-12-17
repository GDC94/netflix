
import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/button.js';
import arrow from '../../images/icons/arrow.png';

export default function ButtonForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ButtonForm.Input = function ButtonFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

ButtonForm.Button = function ButtonFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src={arrow} alt="Try Now" />
    </Button>
  );
};

ButtonForm.Text = function ButtonFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

ButtonForm.Break = function ButtonFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};