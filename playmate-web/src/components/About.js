import React from 'react';
import { View, Text } from 'react-native';

const AboutUs = () => {
  return (
    <View>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.paragraph}>We are a company dedicated to building products that bring communities together. Our goal is to create tools and platforms that make it easy for people to connect, collaborate, and create positive change in their neighborhoods and beyond.</Text>
    </View>
  );
};

const styles = {
  header: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
  paragraph: {
    margin: 10,
    fontSize: 16
  }
}

export default AboutUs;
