import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import Image from 'mui-image';
import img1 from '../img/carro2.jpg';
import img2 from '../img/bolsita2.jpg';
import img3 from '../img/angelica.jpg';

//carrusel de imagenes.
export const CarouselComponent =()=>
{
    let items = [
        {
            images:img2,
        },
        {
            images:img1 ,
        },
        {
            images: img3,
        }
    ]

    return (
        <Carousel >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <Image src={props.item.images} />
           
        </Paper>
    )
}