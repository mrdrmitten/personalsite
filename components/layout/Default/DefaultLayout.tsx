import Nav from '../../elements/Nav/Nav'
import Footer from '../../elements/Footer/Footer'

type Props = {
  children: React.ReactNode
}


const DefaultLayout = ({ children }: Props) => {

  return (
    <>
      <Nav />
      <div className='layout-inner'>
        {children}
      </div>
      <Footer />
    </>

	)
}

export default DefaultLayout