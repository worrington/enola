import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import ResponsiveAppBar from '@/components/AppBar';
import SliderImage from '@/components/Slider';
import About from '@/components/About';
import Valor from '@/components/Valor';
import Footer from '@/components/Footer';
import Contacto from '@/components/Contacto';
import Carrusel from '@/components/Carrusel';

export default function Home() {
  return (
	<>
		<Head>
			<title>Enola</title>
			<meta name="description" content="Somos una empresa innovadora conformada por socios comerciales, expertos en el sector energético. Contribuimos en ofrecer energías más limpias y económicas para beneficios de los usuarios finales." />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/enola.ico" />
		</Head>
		<main className={styles.main}>
			<div style={{position:"relative", width: "100%"}}>
				<ResponsiveAppBar />
				<SliderImage />
			</div>
			<About />
			<Valor/>
			<Carrusel />
			<Contacto />
			<Footer/>
		</main>
	</>
  )
}
