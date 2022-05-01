import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../components/layout/Default/DefaultLayout'


const Home: NextPage = () => {
	return (
		<DefaultLayout>
			<Head>
				<title>Ray Magner | React Front-end Developer</title>
				<meta
					name='description'
					content='Personal website of Web Dev, Ray Magner'
				/>
				<link rel='icon' href='/icon.jpg' />
			</Head>
			<div className='h-[2000px] w-full'></div>
			<div id='1' className='ft-heading font-title text-primary'>
				WELCOME
			</div>
		</DefaultLayout>
	)
}

export default Home
