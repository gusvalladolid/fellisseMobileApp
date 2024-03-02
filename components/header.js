import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ loggedUser = "" }) => {
  const { username } = loggedUser || "";
  console.log("ESTE ES EL USERNAME", username);
  const Links = [{}];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.logoText}>FELLISSE</Text>
        </TouchableOpacity>

        {/* Nav Links */}
        <View style={styles.navLinks}>
          {Links.map((link, index) => (
            <TouchableOpacity key={index + link.name}>
              <Text style={styles.linkText}>{link.name}</Text>
            </TouchableOpacity>
          ))}
          {username ? (
            <Text style={styles.usernameText}>{username}</Text>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
              <Text style={styles.registerText}>Log In/Register</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  usernameText: {
    color: 'white',
    marginLeft: 8,
  },
  registerButton: {
    backgroundColor: "#8b0000", // Adjust this to your desired color
    padding: 10,
    marginTop: 30,
    borderRadius: 4,
    marginLeft: 8,
  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
