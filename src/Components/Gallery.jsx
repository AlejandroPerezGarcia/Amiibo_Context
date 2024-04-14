import { useContext } from 'react'
import { AmiiboContext } from '../context/AmiiboContext'

const Gallery = ({ amiibo }) => {
  const { amiibos, setAmiibos } = useContext(AmiiboContext)

  const addAndRemoveFavorite = (id) => {
    const newAmiibos = amiibos.map(amiibo => {
      if (amiibo.tail === id) {
        return {
          ...amiibo,
          like: !amiibo.like
        }
      }
      return amiibo
    })
    setAmiibos(newAmiibos)
  }

  return (
    <>
      <div className='col-auto container p-3'>
        <div className='card'>
          <img src={amiibo.image} alt='amiibo' className='card-img' />
          <div className='card-body'>
            <p className='card-text text-center'> Nombre : {amiibo.name}</p>
            <p className='card-text text-center'> Juego : {amiibo.gameSeries}</p>
            <p className='card-text text-center'> Tipo Amiibo: {amiibo.type}</p>
          </div>
          <div>
            <span onClick={() => addAndRemoveFavorite(amiibo.tail)}>
              <svg
                width={40}
                viewBox='0 0 24 24'
              >
                <path
                  fill={amiibo.like ? 'green' : 'red'}
                  d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
