import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../images/icons/logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
  console.log('este es el url', user.photoURL)
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='netflix' />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>¿Quién eres? Elige tu perfil</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({
              displayName: user.displayName,
              photoURL: user.photoURL
            })}
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}