import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FoodImg from '../../assets/images/food.jpg'

// components
import SearchBarComponent from '../components/SearchBar'

const HomeScreen = ({ route }) => {

  return (
  
        <View style={styles.container}>
            <Text style={styles.screenTitle}>{route.name}</Text>
            <SearchBarComponent />
            <ScrollView style={{backgroundColor: 'transparent'}}>
            </ScrollView>
        </View>

  )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    screenTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 20,
    }
})