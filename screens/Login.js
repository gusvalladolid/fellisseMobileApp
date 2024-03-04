import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { logIn } from '../api/methods';

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    try {
      const response = await logIn(username, password)
      console.log(response);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
    console.log('Email:', username);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome back.</Text>
          <Text style={styles.subtitle}>Stay tuned for news about Fellisse.</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Enter your Username"
              placeholderTextColor={COLORS.white}
              keyboardType="email-address"
              style={styles.textInput}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.white}
              secureTextEntry={!isPasswordShown}
              style={styles.textInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={styles.eyeIconContainer}>
              {isPasswordShown ? (
                <Ionicons name="eye" size={24} color={COLORS.white} />
              ) : (
                <Ionicons name="eye-off" size={24} color={COLORS.white} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Login" filled style={styles.button} onPress={handleLogIn}/>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Creating an account ?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.loginLink}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 22,
    justifyContent: 'center',
  },
  titleContainer: {
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
    color: COLORS.white,
  },
  textInputContainer: {
    width: '100%',
    height: 48,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
  },
  textInput: {
    flex: 1,
    width: '100%',
    color: COLORS.white,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 12,
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
  },
  loginText: {
    fontSize: 16,
    color: COLORS.white,
  },
  loginLink: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default Login;
