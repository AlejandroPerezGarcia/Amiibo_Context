import Gallery from '../Components/Gallery'
import { useContext } from 'react'
import { AmiiboContext } from '../context/AmiiboContext'

const Home = () => {
  const { amiibos } = useContext(AmiiboContext)
  return (
    <>
      <h1 className='text-center'>Elije tus Amiibos Favoritos</h1>
      <div className='galleria container '>
        <div className='galleria '>
          {amiibos && amiibos.map(amiibo => (
            <Gallery key={amiibos.id} amiibo={amiibo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
