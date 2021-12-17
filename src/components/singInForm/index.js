import React from 'react';
import { 
  Container, 
  Error, 
  Base, 
  Title, 
  Text, 
  TextSmall, 
  Link, 
  Input, 
  Submit, 
  Space, 
  BlueText, 
  IconFace, 
  Face, 
  LoginFace } from './styles/singInForm';

export default function SingInForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SingInForm.Error = function SingInFormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

SingInForm.Base = function SingInFormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

SingInForm.Title = function SingInFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SingInForm.Text = function SingInFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SingInForm.TextSmall = function SingInFormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

SingInForm.Link = function SingInFormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

SingInForm.Input = function SingInFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

SingInForm.Submit = function SingInFormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

SingInForm.Space = function SingInFormSpace({ children, ...restProps }) {
  return <Space {...restProps}>{children}</Space>;
};

SingInForm.BlueText = function SingInFormBlueText({ children, ...restProps }) {
  return <BlueText {...restProps}>{children}</BlueText>;
};


SingInForm.Face = function SingInFormFace({ children, ...restProps }) {
  return <Face {...restProps}>{children}</Face>;
};

SingInForm.IconFace = function SingInFormIconFace({ ...restProps  }) {
  return <IconFace {...restProps}/>
};

SingInForm.LoginFace = function SingInFormLoginFace({ children, ...restProps }) {
  return <LoginFace {...restProps}>{children}</LoginFace>;
};

