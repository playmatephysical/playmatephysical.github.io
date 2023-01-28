import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const ContactPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        // Handle form submission here
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Contact Us</Text>
            <View style={styles.inputContainer}>
                {/* <Icon name="user" size={24} color="gray" style={styles.icon}/> */}
                <TextInput
                    style={styles.input}
                    placeholder="Your name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
            </View>
            <View style={styles.inputContainer}>
                {/* <Icon name="envelope" size={24} color="gray" style={styles.icon}/> */}
                <TextInput
                    style={styles.input}
                    placeholder="Your email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={styles.inputContainer}>
                {/* <Icon name="comment" size={24} color="gray" style={styles.icon}/> */}
                <TextInput
                    style={styles.input}
                    placeholder="Your message"
                    onChangeText={(text) => setMessage(text)}
                    value={message}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        margin: 10,
        width: '90%',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 10,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ContactPage;
