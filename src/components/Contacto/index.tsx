import * as React from 'react';

import Image from 'next/image';
import enola from 'public/enola_logo_completo.png';
import fondo from 'public/fondos/7.jpg';
import { Grid, TextField } from '@mui/material';



function Contacto() {
  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <Grid container>
        <Grid item xs={12} md={6}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField id="outlined-basic" label="Correo eléctronico" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField id="outlined-basic" label="Mensaje" variant="outlined" />
        </Grid>
      </Grid>      
    </div>
  );
}
export default Contacto;
