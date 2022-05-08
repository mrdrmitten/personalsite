import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../components/layout/Default/DefaultLayout'
import AboutTemp from '../components/templates/About/About'
import { createClient } from '../prismicio'
import { FC } from 'react'

interface HomeProps {
	page: any
}

const AboutMe: FC<HomeProps> = ({ page }) => {
	return (
		<DefaultLayout>
			<Head>
				<title>Ray Magner | React Front-end Developer</title>
				<meta
					name="description"
					content="Ray Magner: About Me"
				/>
				<link rel="icon" href="/icon.jpg" />
			</Head>
			<AboutTemp page={page} />
		</DefaultLayout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	// Client used to fetch CMS content.
	const client = createClient()

	// Page document for our homepage from the CMS.
	const page = await client.getByUID('page', 'aboutme')

	// Pass the homepage as prop to our page.
	return {
		props: {
			page: page,
		},
	}
}

export default AboutMe
