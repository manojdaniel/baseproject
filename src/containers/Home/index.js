import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import HomeScreen from './Screen';


class Home extends Component {
    render() {
        return (
            <HomeScreen />
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 35,
        paddingHorizontal: 24,
        marginBottom:30
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Home;