import React from 'react';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';
import logo from '../images/icons/logo.svg';


export default function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix'/>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Iniciar sesión</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

