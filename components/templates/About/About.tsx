import { PrismicRichText } from '@prismicio/react'

const AboutTemp = (props: any) => {
	const { page } = props

	// Todo: Make Card Component
	return (
		<div className="px-[10%]">
			<div className="ft-heading font-title uppercase">
				<PrismicRichText field={page.data.greeting} />
			</div>
			<div className="ft-content space-y-6">
				<PrismicRichText field={page.data.description} />
			</div>
			<div>
				{page.data.slices.map((card: any) => {
					return (
						<div key={card.primary.fid}>
							<div className="ft-heading font-title uppercase">
								<PrismicRichText field={card.primary.title} />
							</div>
							<div className="ft-content">
								<PrismicRichText field={card.primary.description} />
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default AboutTemp