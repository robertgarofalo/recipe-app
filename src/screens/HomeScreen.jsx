import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'

import FoodImg from '../../assets/images/food.jpg'
// const FoodImg = { uri: 'https://reactjs.org/logo-og.png' }

const HomeScreen = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: 'black'}}>
        <ScrollView style={{backgroundColor: 'transparent'}}>
            <ImageBackground source={FoodImg} resizeMode="cover" style={styles.heroImage}>
                <Text style={styles.textHeading}>Featured Recipe</Text>
                <Text style={styles.textMainTitle}>Sicilian Antipasto Platter</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>Row 1</Text>
                    <Text>Row 1</Text>
                    <Text>Row 1</Text>
                </View>
            </ImageBackground>
        </ScrollView>
    </View>
  )
}
export default HomeScreen
const styles = StyleSheet.create({
    heroImage: {
        flex: 1, 
        justifyContent: 'flex-start', 
        height: 450,
        paddingTop: 50,
        padding: 10,
    },
    textHeading: {
        fontSize: 16,
        color: '#fff',
        paddingBottom: 5,
        fontWeight: 'bold',
    },
    textMainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        width: 300,
    }
})