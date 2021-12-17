import React from 'react';
import ButtonForm from '../components/button';
import Accordion from '../components/faqs/index';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Preguntas frecuentes</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <ButtonForm>
                <ButtonForm.Text>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</ButtonForm.Text>
                <ButtonForm.Input placeholder="Email " />
                <ButtonForm.Button>Comenzar</ButtonForm.Button>
                <ButtonForm.Break />

            </ButtonForm>

        </Accordion>
    );
}