import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import SingInForm from '../components/singInForm'
import FooterContainer from '../containers/footerContainer'
import HeaderContainer from '../containers/headerContainer'
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import logoFB from '../images/icons/logofb.png';



export default function Signin() {

    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';



    const handleSignin = (event) => {
        event.preventDefault();
        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });

    };



    return (
        <>
            <HeaderContainer>
                <SingInForm>
                    <SingInForm.Title>Iniciar sesión</SingInForm.Title>
                    {error && <SingInForm.Error data-testid="error">{error}</SingInForm.Error>}
                    <SingInForm.Base onSubmit={handleSignin} method="POST">
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

                        <SingInForm.Face>
                            <SingInForm.IconFace src={logoFB} />

                            <SingInForm.LoginFace>
                                Iniciar sesión con Facebook
                            </SingInForm.LoginFace>
                        </SingInForm.Face>

                        <SingInForm.Text>
                            ¿Primera vez en Netflix? <SingInForm.Link to="/signup">Suscríbete ya.</SingInForm.Link>
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

    )
}
