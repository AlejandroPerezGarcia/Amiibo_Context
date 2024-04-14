import { createContext, useEffect, useState } from 'react'

export const AmiiboContext = createContext()

const AmiiboProvider = ({ children }) => {
  const [amiibos, setAmiibos] = useState([])

  const getData = async () => {
    const response = await fetch('https://www.amiiboapi.com/api/amiibo/')
    const data = await response.json()
    const newArray = Object.values(data).flatMap(amiiList => amiiList.map(amiibo => ({ ...amiibo, like: false })))
    /*  const allData = newArray.map(data => data) */
    /* console.log(newArray) */
    setAmiibos(newArray)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <AmiiboContext.Provider value={{ amiibos, setAmiibos }}>
      {children}
    </AmiiboContext.Provider>
  )
}

export default AmiiboProvider
