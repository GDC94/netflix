import React from 'react';
import JumbotronContainer from '../containers/jumbotronContainer';
import FaqsContainer from '../containers/faqsContainer';
import FooterContainer from '../containers/footerContainer';
import HeaderContainer from '../containers/headerContainer';
import ButtonForm from '../components/button';
import Feature from '../components/feature';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Películas y series ilimitadas y mucho más.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Disfruta donde quieras. Cancela cuando quieras.
                    </Feature.SubTitle>
                    <ButtonForm>
                        <ButtonForm.Text>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</ButtonForm.Text>
                        <ButtonForm.Input placeholder="Email " />
                        <ButtonForm.Button>Comenzar</ButtonForm.Button>
                        <ButtonForm.Break />
                    </ButtonForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}