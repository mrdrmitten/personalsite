import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../components/layout/Default/DefaultLayout'
import LandingTemp from '../components/templates/Landing/Landing'
import { PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismicio'
import { FC } from 'react'

interface HomeProps {
  page: any
}

const Home: FC<HomeProps> = ({ page }) => {

  return (
    <DefaultLayout>
      <Head>
        <title>Ray Magner | React Front-end Developer</title>
        <meta
          name="description"
          content="Ray Magner: Front-end Developer | Dad | Nerd"
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <LandingTemp page={page} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Client used to fetch CMS content.
  const client = createClient()

  // Page document for our homepage from the CMS.
	const page = await client.getByUID('page', 'home')

  // Pass the homepage as prop to our page.
  return {
		props: {
			page: page
		},
  }
}

export default Home
