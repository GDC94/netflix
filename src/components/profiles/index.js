import React from 'react';
import {
  Container,
  Title,
  List,
  Item,
  Picture,
  Name
} from './styles/profiles';
import loader from '../../images/misc/loading.gif';

import uno from '../../images/users/1.png';
import dos from '../../images/users/2.png';
import tres from '../../images/users/3.png';
import cuatro from '../../images/users/4.png';
import cinco from '../../images/users/5.png';


export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  const foto = (src) => {
     if (src === '1')return uno;
     if (src === '2')return dos;
     if (src === '3')return tres;
     if (src === '4')return cuatro;
     if (src === '5')return cinco;
  }
  return <Picture {...restProps} src={ src ? foto(src) : loader } />;
};



Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};