import * as React from 'react';
import { Grid, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import fondo from 'public/fondos/trabajo.png';
import rotate from 'public/elementos/sun-rot-circ-2.png';
import bg from 'public/fondos/bg.jpg';

const About: React.FC = () => {

return (
	<div className="about" id="nosotros">
		<Grid>
			<Image src={bg} alt="" className="bg-about"/>
		</Grid>
		<Grid container spacing={6} justifyContent="center" alignItems="center" className="content-about pad-3">
			<Grid item xs={10} md={5} sm={10} >
				<Grid>
					<Typography gutterBottom variant="h3" className="subtitle-main">
						Sobre nosotros
					</Typography>
				</Grid>
				<Grid>
					<Typography variant="body1" color="text.secondary" className="subtitle-secondary">
						Somos una empresa innovadora conformada por socios comerciales,
							expertos en el sector energético. Contribuimos en ofrecer
							energías más limpias y económicas para beneficios de los usuarios finales.
					</Typography>
				</Grid>
			</Grid>
			<Grid item xs={10} md={5} sm={6}>
				<Grid className="relative">
					<Image src={rotate} alt="" className="rotate-img zoomIn"/>
					<Image
						className="imagerotate1 wow zoomIn circular-image"
						data-wow-delay="0.5s"
						src={fondo}
						alt=""
					/>
				</Grid>
			</Grid>
		</Grid>
	</div>
)};
export default About;

