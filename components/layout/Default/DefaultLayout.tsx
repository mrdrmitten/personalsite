import Nav from '../../elements/Nav/Nav'

type Props = {
  children: React.ReactNode
}


const DefaultLayout = ({ children }: Props) => {

  return (
    <>
      <Nav />
      <div>
        {children}
      </div>
    </>

	)
}

export default DefaultLayout