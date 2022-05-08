import { PrismicRichText } from '@prismicio/react'

const LandingTemp = (props : any) => {
  const { page } = props


  // Todo: Make Card Component
  return (
		<div className='px-8'>
			<div id="1" className="ft-heading font-title uppercase">
				<PrismicRichText field={page.data.greeting} />
			</div>
			<div className="ft-content">
				<PrismicRichText field={page.data.description} />
      </div>
			<div className="ft-content">
				{page.data.slices.map((card: any) => {
					return (
						<div key={card.primary.fid}>
							<div className="ft-heading font-title uppercase">
								<PrismicRichText field={card.primary.title} />
              </div>
              <div className=''>
                <PrismicRichText field={card.primary.description} />
              </div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default LandingTemp
