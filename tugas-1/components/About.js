import React from 'react'
import { Text, View, Stylesheet, Button } from 'react-native';
const About = ({ navigation }) => {
    return (
        <View>
            <Text>Nama Reyhan Khidir</Text>
            <Text>NIM 2130511004</Text>
            <Text>Kelas 6A</Text>
            <Text>Mata Kuliah Mobile Programing</Text>
            <Button title='Home' onPress={() => navigation.goBack()} />
        </View>
    );
};
export default About;
