import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

const Home = () => {   
    return (
        <Video source={{uri: "background"}}   // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref
        }}
        style={styles.backgroundVideo} />
    )
   }
   
   // Later on in your styles..
   var styles = StyleSheet.create({
     backgroundVideo: {
       position: 'absolute',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,
     },
   });

export default Home;
