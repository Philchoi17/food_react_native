import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
// importing components
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
// importing hooks
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = price => {
    // price == $ || $$ || $$$ || $$$$
    return results.filter(result => {
      return result.price == price
    })
  }

  // Call searchApi when component
  // is first rendered. BAD CODE!
  // searchApi('pasta')

  return (
    <>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      { !errorMessage ? <Text>{errorMessage}</Text> : null }
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList 
          title='Cost Effective'
          results={filterResultsByPrice('$')}
        />
        <ResultsList 
          title='Bit Pricier'
          results={filterResultsByPrice('$$')}
        />
        <ResultsList 
          title='Big Spender'
          results={filterResultsByPrice('$$$')}
        />
        <ResultsList
          title='Ballin'
          results={filterResultsByPrice('$$$$')}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen