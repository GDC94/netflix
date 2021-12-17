import React from "react";
import Footer from "../components/footer";

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>¿Preguntas? Llama al 0-800-666-2803</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Preguntas frecuentes</Footer.Link>
                    <Footer.Link href="#">Relaciones con inversionistas</Footer.Link>
                    <Footer.Link href="#">Privacidad</Footer.Link>
                    <Footer.Link href="#">Prueba de velocidad</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Centro de ayuda</Footer.Link>
                    <Footer.Link href="#">Empleo</Footer.Link>
                    <Footer.Link href="#">Preferencias de cookies</Footer.Link>
                    <Footer.Link href="#">Avisos legales</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Cuentas</Footer.Link>
                    <Footer.Link href="#">Formas de ver</Footer.Link>
                    <Footer.Link href="#">Informacion corporativa</Footer.Link>
                    <Footer.Link href="#">Solo en Netflix</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Prensa</Footer.Link>
                    <Footer.Link href="#">Términos de uso</Footer.Link>
                    <Footer.Link href="#">Contactanos</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Row>
                <Footer.Button>
                    <Footer.Option>Español</Footer.Option>
                    <Footer.Option>English</Footer.Option>
                </Footer.Button>
            </Footer.Row>
            <Footer.Break />

            <Footer.Text>Netflix Argentina</Footer.Text>
        </Footer>
    );
}
