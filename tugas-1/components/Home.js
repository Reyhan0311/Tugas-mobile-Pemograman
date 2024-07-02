import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PROFILE</Text>

            <View style={styles.itemContainer}>
                <Image
                    source={require('../assets/Rey.png')}
                    style={styles.image}
                />
                <Button
                    title="Tentang Reyhan"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
});

export default Home;
