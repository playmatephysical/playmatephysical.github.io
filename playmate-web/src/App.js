import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation/Navigation.js";
import Footer from './components/Footer';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';

import Privacy from './components/Privacy';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Image, Text, View, ScrollView, ImageBackground } from 'react-native';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navigation style={styles.navContainer} />
        <View>
          <Routes >
            <Route path='/products' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<Privacy />} />

            <Route exact path='/' element={<Home />} />
          </Routes>
        </View>

      </header>
      <Footer year={2023} companyName="PlayMate" />

    </div>
  );
}

const styles = {
  navContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default App;
