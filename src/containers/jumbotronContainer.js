import React from 'react';
import Jumbotron from '../components/jumbotron';
import jumboData from '../fixtures/jumbo.json';
const loadImage = imageName => (require(`../images/misc/${imageName}`).default);

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {
        jumboData.map(item => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Left>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Left>
            <Jumbotron.Pane>
              <Jumbotron.Image src={loadImage(`${item.image}`)} alt={item.alt} />
            </Jumbotron.Pane>

          </Jumbotron>

        ))
      }
    </Jumbotron.Container>
  );
}


