import * as React from 'react';
import { Grid, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import fondo from 'public/fondos/trabajo.png';
import rotate from 'public/elementos/sun-rot-circ-2.png';
import bg from 'public/fondos/bg.jpg';

const About: React.FC = () => {

return (
	<div className="about">
		<Grid><Image src={bg} alt="" className="bg-about"/></Grid>
		<Grid container spacing={6} justifyContent="center" className="content-about">
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
			<Grid item xs={10} md={5} sm={6}>
				<Card>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h3">
								Sobre Nosotros
							</Typography>
							<Typography variant="body2" color="text.secondary">
							is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
	
			</Grid>
		</Grid>
	</div>
)};
export default About;

