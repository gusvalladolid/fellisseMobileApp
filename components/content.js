import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Content = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.subheader}>Fellisse Background</Text>
          <Text style={styles.title}>Story Telling</Text>
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
          source={{ uri: 'https://example.com/path/to/your/image.jpg' }} // Replace with your image URL
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
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

export default Content;