import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../components/layout/Default/DefaultLayout'
import { PrismicText, PrismicRichText, } from '@prismicio/react'
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
          content="Personal website of Web Dev, Ray Magner"
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      {/* <div className="h-[2000px] w-full"></div> */}
      <div id="1" className="ft-heading font-title text-primary">
        <PrismicText field={page.data.greeting} />
      </div>
      <div className="">
        <PrismicText field={page.data.description} />
      </div>
      <div className="">
        {page.data.slices.map((card : any) => {
          return (
						<div key={card.primary.fid}>
							<div className="ft-heading font-title">
								<PrismicText field={card.primary.title} />
							</div>
							<PrismicText field={card.primary.description} />
						</div>
					)
        })}
      </div>
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
