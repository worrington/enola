import * as React from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

import fondo from 'public/elementos/sun_arrow.png';
import FaEnergia from '@/Resources/icons/energia';
import FaInnovacion from '@/Resources/icons/innovacion';
import FaCompromiso from '@/Resources/icons/ahorra-energia';
import FaEtica from '@/Resources/icons/honestidad';

const Valor: React.FC = () => {

return (
	<div className="valor">
		<Grid className="v-fondo">
			<Image src={fondo} alt="" className="imagerotate99" />
		</Grid>
		<div>
			<h3 className="subtitle-main" id="valores">
				Nuestros valores
			</h3>
		</div>
		<Grid container  justifyContent="center">
			<Grid></Grid>
			<Grid item xs={10} md={2} sm={5}>
				<div className="deps2 wow fadeInLeft" data-wow-delay="0.5s">
					<div>
						<div className="container-card">
							<div className="pad-1"></div>
							<div className="icon-box">
								<span className="border-layer "></span>
								<i className="flaticon-windmill">
									<FaEnergia className="" size={5}/>
								</i>
							</div>
							<h4>Seguridad</h4>
							<p>Garantizamos la seguridad principalmente de nuestros colaboradores,
								 así como en el cumplimiento de nuestros compromisos.</p>
						</div>
					</div>
				</div>
			</Grid>
			<Grid item  xs={10} md={3} sm={5}>
				<div className="deps2 wow fadeInLeft" data-wow-delay="0.5s">
					<div>
						<div className="container-card">
							<div className="pad-3"></div>
							<div className="icon-box">
								<span className="border-layer large-layer-border"></span>
								<i className="flaticon-windmill large-layer">
									<FaInnovacion className="" size={5}/>
								</i>
							</div>
							<h4>Innovación</h4>
							<p>Estamos en constante crecimiento para dar soluciones novedosas y eficaces en todos nuestros procesos y servicios que brindamos a nuestros clientes.</p>
						</div>
					</div>
				</div>
			</Grid>
			<Grid item  xs={10} md={2} sm={5}>
				<div className="deps2 wow fadeInLeft" data-wow-delay="0.5s">
					<div>
						<div className="container-card">
							<div className="pad-1"></div>
							<div className="icon-box">
								<span className="border-layer "></span>
								<i className="flaticon-windmill ">
									<FaCompromiso className="" size={5}/>
								</i>
							</div>
							<h4>Compromiso</h4>
							<p>Nos enfocamos en contribuir en el desarrollo del país, bajo estándares de la más alta calidad.</p>
						</div>
					</div>
				</div>
			</Grid>
			<Grid item  xs={10} md={3} sm={5}>
				<div className="deps2 wow fadeInLeft" data-wow-delay="0.5s">
					<div>
						<div className="container-card">
							<div className="pad-3"></div>
							<div className="icon-box">
								<span className="border-layer large-layer-border"></span>
								<i className="flaticon-windmill large-layer">
									<FaEtica className="" size={5}/>
								</i>
							</div>
							<h4>Ética</h4>
							<p>Nos regimos bajo las normas y principios establecidos, actuando con rectitud en cada situación que se presente. </p>
						</div>
					</div>
				</div>
			</Grid>
		</Grid>
	</div>
)};
export default Valor;

