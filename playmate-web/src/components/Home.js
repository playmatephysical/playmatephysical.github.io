import React, { useState } from 'react';
import { Image, Text, View, ScrollView, ImageBackground } from 'react-native';

const HomePage = () => {
    const [items, setItems] = useState([
        {
            image: require('./images/welcome.jpg'),
            title: 'Find a partner to play instantly!',
            subtitle: 'Looking for someone to play your favorite game with? Look no further! Our platform allows you to find and connect with players instantly.'
        },
        {
            image: require('./images/welcome.jpg'),
            title: 'Get Better',
            subtitle: "Whether you're looking for a casual partner or someone to compete with in a tournament, our platform has got you covered. With a wide variety of games to choose from, you're sure to find the perfect match."
        },
        {
            image: require('./images/welcome.jpg'),
            title: 'Join Community',
            subtitle: "Don't wait any longer, join our community of gamers now and find your perfect partner to play with instantly!"
        },
        // Add more items as needed
    ]);

    return (
        <ScrollView >
            {items.map((item, index) => (
                <View key={index} style={[styles.itemContainer, index % 2 == 1 ?  styles.itemRowReverse : '']}>
                    <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                    <Image 
                        style={styles.image}
                        source={item.image}
                    >
                        
                    </Image>

                </View>
            ))}
        </ScrollView>
    );
};

const styles = {
    itemRowReverse:{
        flexDirection: 'row-reverse'
    },
    itemContainer: {
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    textContainer: {
        alignItems: 'left',
        justifyContent: 'left',
        width: '50%'
    },
    image: {
        width: '30%',
        height: '55%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        padding: 10,
        margin: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
        paddingLeft: 10,
        marginLeft: 10,
        flexWrap: 'wrap'
    },
};

export default HomePage;

