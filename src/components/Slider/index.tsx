import * as React from 'react';
import Image from 'next/image';
import video from '@/Resources/enolavideo.gif';

const SliderImage: React.FC = () => {

return (
	<div className="slider">
		<Image src={video} alt="" className="img" unoptimized/>
		<div className="mask" />
		<div className="container">
			<div className="swiper-slide">
				<h1 className="title-slider">REVOLUCIONANDO LA ENERGÍA</h1>
			</div>
		</div>
	</div>
)};
export default SliderImage;
