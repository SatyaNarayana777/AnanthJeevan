// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PasswordInput from '../components/PasswordInput';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!username || !emailRegex.test(username)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }
  
    // Basic password validation (at least 6 characters)
    if (!password || password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters long');
      return;
    }
  
    // Perform your authentication logic here
    // For demonstration purposes, I'm using a simple check (username === 'demo' and password === 'password')
    if (username === 'demo@gmail.com' && password === 'password') {
      // If login is successful, navigate to the bottom navigation screen
      navigation.navigate('BottomNavigation');
    } else {
      Alert.alert('Authentication Failed', 'Invalid email or password');
    }
  };  

  return (
    <LinearGradient colors={['#dfc7fb', '#624980']} style={styles.container}>
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.scrollView}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.loginForm}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} resizeMode="contain" />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          placeholderTextColor="#FCD9D7"
          onChangeText={(text) => setUsername(text)}
        />

        <PasswordInput style={{width:'100%'}} onChangeText={(text) => setPassword(text)} value={password} />

        <View style={styles.rememberMeContainer}>
          <Text style={{ color: '#fcd9d7',fontSize:17 }}>Remember Me</Text>
          <TouchableOpacity style={{ marginLeft: 12 }} onPress={() => setRememberMe(!rememberMe)}>
            {rememberMe ? (
              <MaterialIcons name="check-box" size={24} color="#fcd9d7" />
            ) : (
              <MaterialIcons name="check-box-outline-blank" size={24} color="#fcd9d7" />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => alert('Forgot Password?')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.gmailButton} onPress={() => alert('Login with Gmail')}>
          <View style={styles.iconContainer}>
            <Icon name="logo-google" size={20} color="#65497a" />
          </View>
          <Text style={styles.buttonText}>Login with Gmail</Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.signUpButton} onPress={() => alert('Sign Up')}>
          <Text style={styles.buttonText2}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.anonymousSignUpButton} onPress={() => alert('Anonymous Signup')}>
          <Text style={styles.buttonText2}>Anonymous Signup</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    width: '100%', // Adjust the width as needed
    height: '100%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
  },
  input: {
    height: 40,
    borderColor: '#FCD9D7',
    color: '#FCD9D7',
    borderWidth: 2,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    width: '100%',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop:15,
    justifyContent: 'center',
    width: '100%',
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#fcd9d7',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#fcd9d7',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
    width: '50%', // Adjust the width as needed
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginBottom: 16,
    marginTop:50,
    width: '100%',
  },
  gmailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fcd9d7',
    padding: 10,
    borderRadius: 25,
    marginBottom: 16,
    justifyContent: 'center',
    width: '50%', // Adjust the width as needed
  },
  iconContainer: {
    marginRight: 8,
  },
  buttonText: {
    color: '#65497a',
    fontSize: 16,
  },
  buttonText2: {
    color: '#fcd9d7',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  signUpButton: {
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  anonymousSignUpButton: {
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
});

export default LoginScreen;
