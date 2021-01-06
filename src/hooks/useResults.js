import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async searchTerm => {
    // console.log('search api was called')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'oakland'
        }
      })
      setResults(response.data.businesses)
    } catch(err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])
  
  return [searchApi, results, errorMessage]
}