import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './../logo.svg';
import { Image, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Linking } from 'react-native';

function Footer({ year, companyName }) {
    return (
        <footer style={styles.footer}>
            <View>
                <Navbar.Brand href='/' style={styles.logo}>
                    <img
                        src={logo}
                        height='40'
                        width='40' />
                    PlayMate</Navbar.Brand>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20}}>
                <View style={{ flexDirection: 'row', justifyContent:'start' }}>
                    <Text style={styles.footer}
                        onPress={() => Linking.openURL('/#/privacy')}>
                        Privacy
                    </Text>
                    <Text style={styles.footer}
                        onPress={() => Linking.openURL('/#/about')}>
                        About us
                    </Text>
                    <Text style={styles.footer}
                        onPress={() => Linking.openURL('/#/contact')}>
                        Contact
                    </Text>
                </View>
                <Text style={styles.footer}>Copyright © {year} {companyName}</Text>
            </View>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: 'black',
        padding: 20,
        textAlign: 'left',
        color: 'white'
    },
    logo: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        paddingLeft: 10,
        marginLeft: 10,
        flexWrap: 'wrap'
    },
    link: {
        fontSize: 15,
        color: 'white',
        padding: 10,
    }

}

export default Footer;
