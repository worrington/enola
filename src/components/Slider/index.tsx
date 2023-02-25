import * as React from 'react';
import Image from 'next/image';
import fondo from 'public/fondos/fondo_2.jpg';
import speed from 'public/elementos/sun_slider.png';

const SliderImage: React.FC = () => {

return (
	<div className="slider">
		<Image src={fondo} alt="" className="img"/>
		<div className="mask" />
		<Image
			src={speed}
			alt=""
			className="sliderrotsun2"
		/>
		<div className="container">
			<div className="swiper-slide">
				<h1 className="title-slider">Enola, Revolucionado la energía</h1>
			</div>
		</div>
	</div>
)};
export default SliderImage;
