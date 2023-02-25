import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

import ResponsiveAppBar from '@/components/AppBar';
import SliderImage from '@/components/Slider';
import About from '@/components/About';
import Valor from '@/components/Valor';
import Footer from '@/components/Footer';
import Contacto from '@/components/Contacto';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<>
		<Head>
			<title>Enola</title>
			<meta name="description" content="Enola, evolución en eficiencia enérgetica" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main className={styles.main}>
			<ResponsiveAppBar />
			<SliderImage />
			<About />
			<Valor/>
			<Contacto />
			<Footer/>
		</main>
	</>
  )
}
