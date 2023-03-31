import * as React from 'react';
import { useEffect } from 'react'
import Image from 'next/image';
import {Grid, Typography} from '@mui/material';

import img1 from '@/Resources/galeria/2.jpg';
import img2 from '@/Resources/galeria/3.jpg';
import img3 from '@/Resources/galeria/6.jpg';
import img4 from '@/Resources/galeria/7.jpg';
import img5 from '@/Resources/galeria/8.jpg';
import img6 from '@/Resources/galeria/9.jpg';
import img7 from '@/Resources/galeria/10.jpg';
import img8 from '@/Resources/galeria/11.jpg';

const Carrusel = () => {
  return (
    <Grid container justifyContent="center" className="pad-3">
      <Typography variant="h2" className="subtitle-main" gutterBottom id="galeria">
        Galería
			</Typography>
      <div className="acordeon-container">
      <ul className="acordeon">
        <li>
          <Image alt="" src={img1} unoptimized className="thumbnail"/>
          <div>
            <Image alt="" src={img1} unoptimized className="thumbnail" />
          </div>
        </li>
        <li>
          <Image alt="" src={img6} unoptimized className="thumbnail"/>
          <div>
            <Image alt="" src={img6} unoptimized className="thumbnail"/>
          </div>
        </li>
        <li>
          <Image alt="" src={img4} unoptimized className="thumbnail"/>
          <div>
            <Image alt="" src={img4} unoptimized className="thumbnail"/>
          </div>
        </li>
        <li>
          <Image alt="" src={img5} unoptimized className="thumbnail2"/>
          <div>
            <Image alt="" src={img5} unoptimized className="thumbnail2"/>
          </div>
        </li>
        
        <li>
          <Image alt="" src={img7} unoptimized className="thumbnail"/>
          <div>
            <Image alt="" src={img7} unoptimized className="thumbnail"/>
          </div>
        </li>
        <li>
          <Image alt="" src={img8} unoptimized className="thumbnail"/>
          <div>
            <Image alt="" src={img8} unoptimized className="thumbnail"/>
          </div>
        </li>
        <li>
          <Image alt="" src={img3} unoptimized className="thumbnail"/>
          <div>
            <Image alt="" src={img3} unoptimized className="thumbnail"/>
          </div>
        </li>
        <li>
          <Image alt="" src={img2} unoptimized className="thumbnail"/>
          <div>
            <Image alt="" src={img2} unoptimized className="thumbnail2"/>
          </div>
        </li>
      </ul>
      </div>
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
