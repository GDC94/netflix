import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import SingInForm from '../components/singInForm';
import HeaderContainer from '../containers/headerContainer';
import FooterContainer from '../containers/footerContainer';
import * as ROUTES from '../constants/routes';





export default function SignUp() {

    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const isInvalid = firstName === '' || password === '' || emailAddress === '';


    const handleSignup = (event) => {
        event.preventDefault();
        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
            )
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <SingInForm>
                    <SingInForm.Title>Crear una cuenta</SingInForm.Title>
                    {error && <SingInForm.Error data-testid="error">{error}</SingInForm.Error>}
                    <SingInForm.Base onSubmit={handleSignup} method="POST">

                        <SingInForm.Input
                            placeholder="Nombre"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <SingInForm.Input
                            value={emailAddress}
                            placeholder="Email"
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <SingInForm.Input
                            value={password}
                            type="password"
                            autoComplete="off"
                            placeholder="Contraseña"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <SingInForm.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                            Iniciar sesión
                        </SingInForm.Submit>


                        <SingInForm.Text>
                            <SingInForm.Link to="/signup">Iniciar sesión.</SingInForm.Link>
                        </SingInForm.Text>
                        <SingInForm.TextSmall>
                            Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.<SingInForm.BlueText>Más info.</SingInForm.BlueText>
                        </SingInForm.TextSmall>

                    </SingInForm.Base>

                </SingInForm>
                <SingInForm.Space></SingInForm.Space>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    );
}