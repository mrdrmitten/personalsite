import Nav from '../../elements/Nav/Nav'
import Footer from '../../elements/Footer/Footer'
import Contact from '../../elements/Contact/Contact'


type Props = {
  children: React.ReactNode
}


const DefaultLayout = ({ children }: Props) => {

  return (
    <>
      <Nav />
      <Contact />
      <div className='layout-inner'>
        {children}
      </div>
      <Footer />
    </>

	)
}

export default DefaultLayout