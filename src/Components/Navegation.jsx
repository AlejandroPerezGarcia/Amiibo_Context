import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Navegation = () => {
  return (
    <Navbar className='bg-body-tertiary container'>
      <Container className='titulo'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='./src/assets/img/logo_amiibos.png'
            width='35'
            height='35'
            className='d-inline-block align-top'
          />
          <Link to='/'> Home </Link> | <Link to='/favorito'> Favoritos </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navegation
