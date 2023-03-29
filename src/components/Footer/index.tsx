import * as React from 'react';

import Image from 'next/image';
import enola from 'public/enola_logo_completo.png';
import { Grid } from '@mui/material';
import Aviso from '../Aviso';
import Politicas from '../PoAvPr';


function Footer() {
  return (
    <>
      <Grid container>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7528.166189941865!2d-99.27017684668175!3d19.36555436529492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200c5a6df4a27%3A0x1a8857aed9e69f88!2sC.%20Guillermo%20Gonzalez%20Camarena%201450%2C%20Santa%20Fe%2C%20Zedec%20Sta%20F%C3%A9%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001210%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1679941544305!5m2!1ses!2smx"
            height={250}
            width={"100%"}
            style={{border:0}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          >
        </iframe>
      </Grid>
    <div className="footer spacer-btw">

      <h4>Copyright © 2023 Enola. Todos los derechos reservados</h4>
      <div>
        <Politicas /> |
        <Aviso />
      </div>
    </div>
    </>
  );
}
export default Footer;
