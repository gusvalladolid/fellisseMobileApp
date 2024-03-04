import { View, Text, ScrollView, SafeAreaView, StyleSheet, StatusBar, Image} from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import React, { useState } from "react";

const HomeScreen = ({route, navigation}) => {

  const [playing, setPlaying] = useState(false);
  const { username } = route.params;
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <YoutubeIframe
          height={230}
          play={playing}
          videoId="rMzdcv7wSNI"
        />
        <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.subheader}>Welcome back {username}!</Text>
          <Text style={styles.title}>Fellisse Story Telling</Text>
          <Text style={styles.description}>
            Fellisse, a psychic for hire, is visited by several clients in her office. Her services are mainly the treatment
            of psychological traumas or the curing of phobias through the process of entering her client’s mind by detaching
            herself from her body and assuming a spiritual form. Once inside the psyche, the environment that results embodies
            the trauma or fears of the host, as such the surroundings tend to be rather hostile in turn. Her ultimate goal is
            to traverse the client’s mind space and locate their Anguish Nucleus and return to the material world.
          </Text>
        </View>
        <Image
          style={styles.image}
          source={{ uri: 'https://example.com/path/to/your/image.jpg' }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subheader}>Gameplay Mechanics.</Text>
          <Text style={styles.description}>
            The gameplay revolves around exploring the environment and scouring for objects that may be useful during the traversal.
            Blockades will often occur at parts that must be cleared through puzzles, that when solved will show the way forward.
            All leading up until reaching the core of the environment, which must once again be solved in order to bring the case to a close.
          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'#1b1b1b',
  },
  scrollView: {
    backgroundColor: '#1d1d1d',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },

});


export default HomeScreen;