import * as React from 'react';
import { useEffect } from 'react'
import {Grid, Typography} from '@mui/material';

const Carrusel = () => {

    let cpo = [];
    cpo["_object"] ="cincopa_3a98c7";
    cpo["_fid"] = "AICAU_OJEd97";
    let _cpmp = [];
    _cpmp.push(cpo);

    (function() {
      let cp = document.createElement("script");
      cp.type = "text/javascript";
      cp.async = true;
      cp.src = "https://rtcdn.cincopa.com/libasync.js";
      const c = document.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(cp, c);
    })();

  useEffect(() => {
  }, []);

  return (
    <Grid container justifyContent="center" className="pad-3">
      <Typography variant="h3" className="subtitle-main" gutterBottom id="galeria">
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
