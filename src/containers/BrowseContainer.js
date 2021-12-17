import React, { useContext, useEffect, useState } from 'react'
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import Loading from '../components/loading';
import { Card, Header } from '../components';
import logo from '../images/icons/logo.svg';
import top from '../images/misc/top.png';
import bell from '../images/icons/bell.png';
import * as ROUTES from '../constants/routes';
import FooterContainer from './footerContainer';

import requests from '../api/requests';
import CardContainer from './CardContainer';


export default function BrowseContainer({ slides }) {

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};



  const { fetchNetflixOriginals, 
    fetchTrending, 
    fetchTopRated, 
    fetchActionMovies, 
    fetchMovies} = requests;



  useEffect(() => {
    console.log('este es el profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.displayName]);




  return profile.displayName ? (
    <>
      {loading ?
        <Loading src={user.photoURL} />
        :
        <Loading.ReleaseBody />
      }

      <Header src='joker1' dontShowOnSmallViewPort >
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextHome>
              Inicio
            </Header.TextHome>
            <Header.TextLink>
              Series TV
            </Header.TextLink>
            <Header.TextLink>
              Peliculas
            </Header.TextLink>
            <Header.TextLink>
              Novedades mas vistas
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Bell src={bell} />

            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.PictureSmall src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Cerrar sesion</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>


        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>La Casa de Papel</Header.FeatureCallOut>
          <Header.Ranking>
            <Header.Top src={top} />
            <Header.Rank>N.° 1 en series hoy</Header.Rank>
          </Header.Ranking>
          <Header.Text>Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre española. Desde el encierro,
            su lider manipula a la policía para llevar a cabo un ambicioso plan.
          </Header.Text>
          <Header.Buttons>
            <Header.PlayButton>Reproducir</Header.PlayButton>
            <Header.Information>Mas informacion</Header.Information>
          </Header.Buttons>
        </Header.Feature>

      </Header>

      <Card.Entities>
        <CardContainer isLargeRow={true} title='Originales de Netflix' url={fetchNetflixOriginals}/>
        <CardContainer title='Tendencia' url={fetchTrending} />
        <CardContainer title='Mejor puntuados' url={fetchTopRated} />
        <CardContainer title='Peliculas de accion' url={fetchActionMovies} />
        <CardContainer title='Documentales' url={fetchMovies} />
      </Card.Entities>




      <FooterContainer></FooterContainer>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}


/* {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`../../images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>

          </Card>
        ))}*/