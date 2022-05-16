import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

const LandingTemp = (props : any) => {
	const { page } = props


  // Todo: Make Card Component
  return (
		<div className="px-[10%]">
			<div className="ft-heading font-title uppercase">
				<PrismicRichText field={page.data.greeting} />
			</div>
			<div className="ft-content">
				<PrismicRichText field={page.data.description} />
			</div>
			<div className="ft-content">
				{page.data.slices.map((slice: any) => {
					if (slice.slice_type === 'test_card') {
						return (
							<div key={slice.primary.fid}>
								<div className="ft-heading font-title uppercase">
									<PrismicRichText field={slice.primary.title} />
								</div>
								<div className="">
									<PrismicRichText field={slice.primary.description} />
								</div>
							</div>
						)
					} else if (slice.slice_type === 'image_slice') {
						return (
							<div key={slice.primary.fid} className='relative h-[40%] w-[40%]'>
								<Image
									src={slice.primary.image.url}
									alt={slice.primary.image.alt}
									height={400}
									width={400}
									objectFit='cover'
									className='rounded-lg object-center'
								/>
							</div>
						)
					}
				})}
			</div>
		</div>
	)
}

export default LandingTemp
