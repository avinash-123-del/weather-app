import React from 'react'
import { StatusBar, Text, View, Image } from 'react-native'

const Home = () => {
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor="yellow" />
            <Image source={require('./images/bg.png')} />
        </View>
    )
}


export default Home;