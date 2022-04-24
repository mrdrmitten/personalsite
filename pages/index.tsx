import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Ray Magner | React Front-end Developer</title>
				<meta
					name='description'
					content='Personal website of Web Dev, Ray Magner'
				/>
				<link rel='icon' href='/icon.jpg' />
			</Head>
			<div className='ft-heading font-title text-primary'>WELCOME</div>
		</div>
	)
}

export default Home
