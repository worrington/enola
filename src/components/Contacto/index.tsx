import * as React from 'react';

import Image from 'next/image';
import enola from 'public/enola_logo_completo.png';
import mapa from '@/Resources/world-map-dark-2.png';
import pin from '@/Resources/icons/pin-map-2.png';
import { Grid, TextField, Button, Snackbar, Alert } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const URL_FORM = "https://formspree.io/f/mvonwogw";

function Contacto() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message:"",
  })

  const handleClick = () => {
    if(formData.name.length === 0|| formData.email.length === 0|| formData.message.length === 0){
      setOpen2(true);
    } else {
      
      submit();
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
  }
    setOpen(false);
    setOpen2(false);
  };

  const handleChange = (e: { target: { name: any; value: String; }; }) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const submit = () => {
    (async () => {
			fetch(URL_FORM, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          setOpen(true);
        }
      })
		})();
  }

  return (
    <div className="contacto">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se ha enviado el mensaje.
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Complete el formulario para mandar el mensaje.
        </Alert>
      </Snackbar>
      <Grid container justifyContent="flex-end" className="contacto-pading" spacing={3}>
        <Grid item xs={12} className="pad-3">
          <h2 className="contacto-title">Contacto</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid>
            <TextField
              label="Nombre"
              variant="filled"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              label="Correo eléctronico"
              variant="filled"
              inputProps={{ inputMode: "email", type:"email"}}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mensaje"
            variant="filled"
            rows={4}
            multiline
            style={{
              height : 125
            }}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" style={{width: 200}} onClick={handleClick}>
            Envíar
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="contacto-pading"
      >
        <Grid item xs={12} md={6}>
          <h3 className="mapa-title">¿Dónde nos encontramos?</h3>
          <Grid container justifyContent={"center"} alignItems="center">
            <Grid item>
              <Image src={pin} alt="" style={{width: 60, height: "auto"}}/></Grid>
            <Grid item xs={8}>
              <p className="mapa-p">Guillermo González Camarena No. 1450, Piso 2, int. 224,
              Santa Fe, Ciudad de México, C.P. 01210, Alcaldía Álvaro Obregón.</p></Grid>
            </Grid>
            <br />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={mapa} alt="" className="mapa"/>
        </Grid>
      </Grid>
      <style jsx global>{`
        .MuiFormControl-root {
          width: 99%;
          margin-top: 1rem;
          background: #ffffffbd;
          border-radius: 5px;
        }
        fieldset {
          border-width: 0px;
        }
      `}</style>
    </div>
  );
}
export default Contacto;
