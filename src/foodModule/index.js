import 'react-native-gesture-handler';
import React, { useState, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
//import {Provider as PaperProvider} from 'react-native-paper';
//import react-native-paper;
//import { uuid } from 'uuidv4';
//import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Avatar, Button, Card, DataTable, Title, Paragraph, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { name as appName } from './app.json';
//import App from './src/App';
import 'react-native-gesture-handler'
const foodModules = ({ route, navigation }) => {
    const { imageURL } = route.params
    const { name } = route.params
    const { timeOpen } = route.params
    const { timeClose } = route.params
    const { content } = route.params
    const outName = 'Name: ' + name
    const outOpen = 'Open: ' + timeOpen
    const outClose = 'Close:  ' + timeClose
    return (
        <View style={{ flex: 1, alignItems: 'center', padding:20 }}>
            <Image
                style={{width:200, height:100}}
                source={{
                    uri: imageURL,
                }}
            />
            <Text>{outName}</Text>
            <Text>{outOpen}</Text>
            <Text>{outClose}</Text>
            <Button
                title="go to food"
                onPress={() => navigation.navigate('Home')}>Return Home</Button>
        </View>

    )
}

export default foodModules;
