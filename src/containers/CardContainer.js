import React, { useEffect, useState } from 'react';
import { moviesDataBase } from '../api/themoviedatabase';
import Card from '../components/card';



export default function CardContainer({ isLargeRow, title, url }) {

    const [originalesnetflix, setOriginalesNetflix] = useState([]);
    const baseUrlImage = `https://image.tmdb.org/t/p/w500`;

    useEffect(() => {
        const getOriginals = async () => {
            const response = await moviesDataBase.get(url);
            setOriginalesNetflix(response.data.results);
        }
        getOriginals()

    }, [url]);


    return (
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Group>
        
                {originalesnetflix.map((original) => (
                    <Card.Image 
                        key={original.id}
                        src={`${baseUrlImage}${isLargeRow ? original.poster_path : original.backdrop_path}`}
                        alt={original.name} 
                    />
                ))}
            </Card.Group>
        </Card>
    );
}