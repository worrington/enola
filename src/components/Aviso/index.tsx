import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import Image from 'next/image';
import enola from 'public/enola_logo_completo.png';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Aviso() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen} style={{color:"white", textTransform: "initial"}}>
        Aviso de privacidad
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} color="primary">
          <Toolbar className="spacer-btw">
            <Image src={enola} alt="Enola" style={{height : "44px", width : "auto"}}/>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="politicas">
          <div id="texte_a_afficher">
              <p style={{textAlign: "center"}}><strong>AVISO DE PRIVACIDAD</strong></p>
              <p>De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, <strong><span id="span_id_persona_que_recaba_los_datos">Enola</span></strong> pone a su disposición el siguiente aviso de privacidad.</p>
              <p><br/><strong><span id="span_id_persona_que_recaba_los_datos">Enola</span></strong>, es responsable del uso y protección de sus datos personales, en este sentido y atendiendo las obligaciones legales establecidas en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, a través de este instrumento se informa a los titulares de los datos, la información que de ellos se recaba y los fines que se le darán a dicha información.</p>
              <p><br/>Además de lo anterior, informamos a usted que <strong><span id="span_id_persona_que_recaba_los_datos">Enola</span></strong>, tiene su domicilio ubicado en:</p>
              <p style={{paddingLeft: "30px"}}><br/><span id="span_id_domicilio_del_responsable">Guillermo González Camarena No. 1450, Piso 2, int. 224, Santa Fe, Ciudad de México, C.P. 01210, Alcaldía Álvaro Obregón.</span></p>
              <p><br/>Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades, las cuales son necesarias para concretar nuestra relación con usted, así como para atender los servicios y/o pedidos que solicite:</p>
              <p style={{paddingLeft: "30px"}}><br/><span id="span_id_finalidad_de_uso_de_datos">Para enviar información que se solicite sobre los servicios que ofrecemos.</span></p>
              <p><br/>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
              <p style={{paddingLeft: "30px"}}><br/><span id="span_id_datos_personales_que_se_recaban">Nombre<br/>Correo electrónico</span></p>
              <p><br/>Por otra parte, informamos a usted, que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o persona distintas a nosotros y serán utilizados exclusivamente para los fines señalados.</p>
              <p><br/>Usted tiene en todo momento el derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); de igual manera, tiene derecho a que su información se elimine de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como también a oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
              <p><br/>Para el ejercicio de cualquiera de los derechos ARCO, se deberá presentar la solicitud respectiva a través de la siguiente dirección electrónica:</p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}><span id="span_id_caso_web">https://enola.com.mx/</span></p>
              <p><br/>Lo anterior también servirá para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, no obstante, la solicitud de ejercicio de estos derechos debe contener la siguiente información:</p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}><br/><span id="span_id_opcional_info_de_solicitud_derechos_arco">Nombre<br/>Correo electrónico</span></p>
              <p><br/>La respuesta a la solicitud se dará en el siguiente plazo: <span id="span_id_tiempo_de_respuesta_derechos_arco">de máximo 20 días hábiles</span>, y se comunicará de la siguiente manera:</p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}><br/><span id="span_id_opcional_medio_de_respuesta_derechos_arco">A través del correo electrónico que indique la solicitud</span></p>
              <p><br/>Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:</p>
              <p><br/></p>

              <p style={{textAlign: "left", paddingLeft: "30px"}}>a) Nombre del responsable: <span id="span_id_departamento_responsable_arco">Departamento de Información</span></p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}>b) Domicilio:</p>
              <p style={{textAlign: "left", paddingLeft: "60px"}}><span id="span_id_dom_departamento_responsable_arco">Guillermo González Camarena No. 1450, Piso 2, int. 224, Santa Fe, Ciudad de México, C.P. 01210, Alcaldía Álvaro Obregón.</span></p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}>c) Teléfono: <span id="span_id_tel_departamento_responsable_arco">SN</span></p>

              <p style={{textAlign: "left", paddingLeft: "30px"}}>d) Correo electrónico: <span id="span_id_opcional_mail_departamento_responsable_arco">contacto@enola.com.mx</span></p>


              <p style={{textAlign: "left", paddingLeft: "30px"}}>e) Otro medio de contacto: <span id="span_id_opcional_otro_medio_de_contacto_departamento_responsable_arco">https://enola.com.mx/</span></p>


              <p><br/>Cabe mencionar, que en cualquier momento usted puede revocar su consentimiento para el uso de sus datos personales. Del mismo modo, usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Asimismo, usted deberá considerar que para ciertos fines la revocación de su consentimiento implicará que no podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</p>
              <p><br/>Para revocar el consentimiento que usted otorga en este acto o para limitar su divulgación, se deberá presentar la solicitud respectiva a través de la siguiente dirección electrónica:</p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}><br/><span id="span_id_caso_web_revocacion">contacto@enola.com.mx</span></p>
              <p><br/>Del mismo modo, podrá solicitar la información para conocer el procedimiento y requisitos para la revocación del consentimiento, así como limitar el uso y divulgación de su información personal, sin embargo, estas solicitudes deberán contener la siguiente información:</p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}><br/><span id="span_id_opcional_info_de_solicitud_revocacion">Nombre<br/>Correo electrónico</span></p>
              <p><br/>La respuesta a la solicitud de revocación o limitación de divulgación de sus datos se dará a más tardar en el siguiente plazo: <span id="span_id_tiempo_de_respuesta_revocacion">máximo 20 días hábiles</span>, y se comunicará de la siguiente forma:</p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}><br/><span id="span_id_opcional_medio_de_respuesta_revocacion">A través del correo electrónico indicado en la solicitud que se formule</span></p>
              <p><br/><span></span> de cambios en nuestro modelo de negocio, o por otras causas, por lo cual, nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, sin embargo, usted puede solicitar información sobre si el mismo ha sufrido algún cambio a través del siguiente correo electrónico:</p>
              <p style={{textAlign: "left", paddingLeft: "30px"}}><br/><span id="span_id_caso_correo_cambioap">contacto@enola.com.mx</span></p>
              <p style={{textAlign: "right"}}><br/>Última actualización:</p>
              <p style={{textAlign: "right"}}><span id="span_id_fecha_de_actualizacion">28/03/2023</span></p>
            </div>
          <div/>
        </div>
      </Dialog>
    </>
  );
}