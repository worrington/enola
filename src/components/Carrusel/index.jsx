import * as React from 'react';
import Image from 'next/image';
import {Grid, Typography, Hidden} from '@mui/material';
import img1 from '@/Resources/galeria/2.jpg';
import img2 from '@/Resources/galeria/3.jpg';
import img3 from '@/Resources/galeria/6.jpg';
import img4 from '@/Resources/galeria/7.jpg';
import img5 from '@/Resources/galeria/8.jpg';
import img6 from '@/Resources/galeria/9.jpg';
import img7 from '@/Resources/galeria/10.jpg';
import img8 from '@/Resources/galeria/11.jpg';

import Carousel from 'react-elastic-carousel';

const Carrusel = () => {

  return (
    <Grid container justifyContent="center" className="pad-3">
      <Typography gutterBottom variant="h3">
				 Galería
			</Typography>
      <Hidden mdUp>
        <Carousel itemsToShow={1} className="carousel-div">
          <div className="carrucel"><Image src={img1} alt="" /></div>
          <div className="carrucel"><Image src={img6} alt="" /></div>
          <div className="carrucel"><Image src={img4} alt="" /></div>
          <div className="carrucel"><Image src={img2} alt="" /></div>
          <div className="carrucel"><Image src={img5} alt="" /></div>
          <div className="carrucel"><Image src={img3} alt="" /></div>
          <div className="carrucel"><Image src={img8} alt="" /></div>
          <div className="carrucel"><Image src={img7} alt="" /></div>
        </Carousel>
      </Hidden>
      <Hidden mdDown>
        <Carousel itemsToShow={3} className="carousel-div">
          <div className="carrucel"><Image src={img1} alt="" /></div>
          <div className="carrucel"><Image src={img6} alt="" /></div>
          <div className="carrucel"><Image src={img4} alt="" /></div>
          <div className="carrucel"><Image src={img2} alt="" /></div>
          <div className="carrucel"><Image src={img5} alt="" /></div>
          <div className="carrucel"><Image src={img3} alt="" /></div>
          <div className="carrucel"><Image src={img8} alt="" /></div>
          <div className="carrucel"><Image src={img7} alt="" /></div>
        </Carousel>
      </Hidden>
      <style jsx global>{`
        .MuiSnackbar-root {
          left: auto!important;
          bottom: 90vh!important;
          right: 22px!important;
        }
      `}</style>
    </Grid>
  );
}
export default Carrusel;
