
import { useState, useEffect } from 'react'
import { options } from '../utils/Options'


const UseFetach = (apiPath, queryTerme) => {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchMovie() {
      const responce = await fetch(`https://api.themoviedb.org/3/${apiPath}?query=${queryTerme}`, options)

      const data = await responce.json()
      // console.log(data)
      // console.log(data.results)

      setData(data.results)
    }
    fetchMovie()
  }, [apiPath, queryTerme])



  return { data }
}

export default UseFetach