import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://flowbite.com/docs/images/logo.svg' }}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Fellisse</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <Text style={styles.footerText}>
        © 2024 <Text style={styles.linkText}>Fellisse™</Text>. All Rights Reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 16,
    padding: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 12,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Footer;
