import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import { useState } from 'react'
import Contact from '../../elements/Contact/Contact'
import styles from './aboutme.module.css'


const AboutTemp = (props: any) => {
	const [open, setOpen] = useState(false)

	const { page } = props

	const descMain = page.data.description.filter((x : any) => x.type !== 'image')

	const descImage = page.data.description.filter((x : any) => x.type === 'image')

	// Todo: Make Card Component
	return (
		<main className={`${styles.container} px-[10%]`}>
			<div className="ft-heading font-title uppercase">
				<PrismicRichText field={page.data.greeting} />
			</div>
			<section className="ft-content space-y-6">
				<div
					className={`${styles.imageFix} relative w-[70%] mx-auto md:w-[40%] md:float-right md:ml-4`}
				>
					<Image
						src={descImage[0].url}
						alt={descImage[0].alt}
						height={600}
						width={600}
						objectFit="cover"
						objectPosition="top"
						className="rounded-lg block"
					/>
				</div>
				<PrismicRichText field={descMain} />
			</section>
			<div className='flex flex-col'>
				{page.data.slices.map((card: any) => {
					return (
						<section key={card.primary.fid}>
							<div className="ft-heading font-title uppercase">
								<PrismicRichText field={card.primary.title} />
							</div>
							<div className="ft-content">
								<PrismicRichText field={card.primary.description} />
							</div>
						</section>
					)
				})}
				<button
					onClick={() => setOpen(true)}
					className="mx-auto md:ml-[1rem] px-10 mt-8 py-2 rounded-md hover:scale-[1.05]"
				>
					Contact
				</button>
			</div>

			<Contact open={open} setOpen={setOpen} />
		</main>
	)
}

export default AboutTemp