import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { register, logIn } from '../api/methods';

const AuthForm = ({ type }) => {
  const navigation = useNavigation();
  const formText = {
    logIn: {
      welcomeText: 'Welcome Back!',
      changeBetween: 'You do not have an account? Register!',
      customButton: 'Log In'
    },
    register: {
      welcomeText: 'Welcome!',
      changeBetween: 'You already have an account? Log In!',
      customButton: 'Register'
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleRegisterClick = async () => {
    try {
      const response = await register(username, password);
      navigation.navigate('Home', { username });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginClick = async () => {
    try {
      const response = await logIn(username, password);
      navigation.navigate('Home', { username });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>
          <Text onPress={() => navigation.navigate('Home')}>{formText[type].welcomeText}</Text>
        </Text>
        <Text style={styles.mediumText}>Please enter your details.</Text>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your Username"
              onChangeText={handleUsernameChange}
              value={username}
            />
          </View>
          <View>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your Password"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry
            />
          </View>
        </View>
        <Text style={styles.linkText} onPress={() => navigation.navigate(type === 'register' ? 'Login' : 'Register')}>
          {formText[type].changeBetween}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={type === 'register' ? handleRegisterClick : handleLoginClick}
          >
            <Text style={styles.buttonText}>{formText[type].customButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Additional View for gradient circle */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1d1d1d',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  mediumText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#888',
    marginVertical: 8,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 12,
  },
  labelText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: 'white',
    fontSize: 16,
    paddingVertical: 8,
  },
  linkText: {
    color: 'red',
    fontSize: 16,
    marginTop: 8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AuthForm;
