import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';
import uno from '../../images/users/1.png';
import dos from '../../images/users/2.png';
import tres from '../../images/users/3.png';
import cuatro from '../../images/users/4.png';
import cinco from '../../images/users/5.png';


export default function Loading({ src, ...restProps }) {
  const foto = (src) => {
    if (src === '1')return uno;
    if (src === '2')return dos;
    if (src === '3')return tres;
    if (src === '4')return cuatro;
    if (src === '5')return cinco;
 }
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={foto(src)} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody/>;
}; 