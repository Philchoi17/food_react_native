import React from 'react'
import { 
  View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation'

// parent components import
import ResultDetail from './ResultDetail'

const ResultsList = ({ title, results, navigation }) => {

  if(!results.length) return null

  // console.log(results)
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{ title }</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          // console.log(item.image_url)
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
            >
              <ResultDetail
                result={item}
              />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  containerStyle: {
    marginBottom: 10
  }
})

export default withNavigation(ResultsList)