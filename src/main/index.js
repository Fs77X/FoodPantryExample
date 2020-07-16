import 'react-native-gesture-handler';
import React, { useState, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
//import {Provider as PaperProvider} from 'react-native-paper';
//import react-native-paper;
//import { uuid } from 'uuidv4';
//import * as React from 'react';
import { AppRegistry } from 'react-native';
// import { Avatar, Button, Card, DataTable, Title, Paragraph, Appbar, Provider as PaperProvider } from 'react-native-paper';
//import { name as appName } from './app.json';
//import App from './src/App';
import Food from '../foodModule/index'
import 'react-native-gesture-handler'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const items = [{
    imageURL: 'https://basicneeds.ucsc.edu/campus-resources%20/suapantrylogo.jpg',
    name: 'SUA Food Pantry',
    timeOpen: '9AM',
    timeClose: '10PM',
    content: 'Student Unian Assembly ran food pantry located at Opers Front Office'
}]
const Home = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, paddingBottom:10}}>
            {/* <Text>This is main</Text> */}
            <Card>
                <Card.Title title="Student Food Pantry" subtitle="Student Food Pantry" left={LeftContent} />
                <Card.Content>
                    <Title>{items[0].name}</Title>
                    <Paragraph>{items[0].content}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://basicneeds.ucsc.edu/campus-resources%20/suapantrylogo.jpg' }} />
                <Card.Actions>
                <Button
                title="go to food"
                onPress={() => navigation.navigate('Food', {
                    imageURL: items[0].imageURL,
                    name: items[0].name,
                    timeOpen: items[0].timeOpen,
                    timeClose: items[0].timeClose,
                    content: items[0].content
                })}>More info</Button>
                </Card.Actions>
            </Card>
            <Card>
                {/* <Card.Title title="Student Food Pantry" subtitle="Student Food Pantry" left={LeftContent} /> */}
                <Card.Content>
                    <Title>{items[0].name}</Title>
                    <Paragraph>{items[0].content}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://basicneeds.ucsc.edu/campus-resources%20/suapantrylogo.jpg' }} />
                <Card.Actions>
                <Button
                title="go to food"
                onPress={() => navigation.navigate('Food', {
                    imageURL: items[0].imageURL,
                    name: items[0].name,
                    timeOpen: items[0].timeOpen,
                    timeClose: items[0].timeClose,
                    content: items[0].content
                })}>More info</Button>
                </Card.Actions>
            </Card>
            <Card>
                {/* <Card.Title title="Student Food Pantry" subtitle="Student Food Pantry" left={LeftContent} /> */}
                <Card.Content>
                    <Title>{items[0].name}</Title>
                    <Paragraph>{items[0].content}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://basicneeds.ucsc.edu/campus-resources%20/suapantrylogo.jpg' }} />
                <Card.Actions>
                <Button
                title="go to food"
                onPress={() => navigation.navigate('Food', {
                    imageURL: items[0].imageURL,
                    name: items[0].name,
                    timeOpen: items[0].timeOpen,
                    timeClose: items[0].timeClose,
                    content: items[0].content
                })}>More info</Button>
                </Card.Actions>
            </Card>
            <View style={{paddingBottom:50}}>
            <Card>
                {/* <Card.Title title="Student Food Pantry" subtitle="Student Food Pantry" left={LeftContent} /> */}
                
                <Card.Content>
                    <Title>{items[0].name}</Title>
                    <Paragraph>{items[0].content}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://basicneeds.ucsc.edu/campus-resources%20/suapantrylogo.jpg' }} />
                <Card.Actions>
                <Button
                title="go to food"
                onPress={() => navigation.navigate('Food', {
                    imageURL: items[0].imageURL,
                    name: items[0].name,
                    timeOpen: items[0].timeOpen,
                    timeClose: items[0].timeClose,
                    content: items[0].content
                })}>More info</Button>
                </Card.Actions>
                </Card>
                    
            </View>

 
        </ScrollView>



    )
}

export default Home;