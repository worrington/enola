import * as React from 'react';
import { useEffect } from 'react'
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
  let cpo = [];
  let _cpmp = [];

  cpo["_object"] ="cincopa_53e643";
  cpo["_fid"] = "AICAU_OJEd97";
  _cpmp.push(cpo);

  const galery = () => {
    let cp = document.createElement("script");
    cp.src = "https://rtcdn.cincopa.com/libasync.js";
    const c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(cp, c);
  };

  useEffect(() => {
  }, []);

  return (
    <Grid container justifyContent="center" className="pad-3">
      <Typography gutterBottom variant="h3">
				 Galería
			</Typography>
      <div id="cincopa_53e643"></div>
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
