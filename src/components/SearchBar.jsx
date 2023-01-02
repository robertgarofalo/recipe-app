import { StyleSheet, Text, View } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'

const SearchBarComponent = () => {
  return (
    <View>
      <SearchBar 
        placeholder="Search"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  )
}
export default SearchBarComponent
const styles = StyleSheet.create({
})