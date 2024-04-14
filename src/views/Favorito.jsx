import Gallery from '../Components/Gallery'
import { useContext } from 'react'
import { AmiiboContext } from '../context/AmiiboContext'

export const Favorito = () => {
  const { amiibos } = useContext(AmiiboContext)
  return (
    <>
      <h1 className='text-center'>Tus Amiibos</h1>
      <div className='galleria container '>
        <div className='galleria row'>
          {amiibos && amiibos.filter(amibo => amibo.like).map(amiibo => (
            <Gallery key={amiibos.id} amiibo={amiibo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Favorito
