import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import AppointmentForm from '../components/AppointmentForm';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const [selectedButton, setSelectedButton] = useState('button1');

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const navigation = useNavigation();

  const handleLogout = () => {
    // Navigate to the login screen on logout icon press
    navigation.navigate('Login');
  };

  const handleBack = () => {
    navigation.navigate('Login');
  };

  return (
    <LinearGradient colors={['#dfc7fb', '#624980']} style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.maincontainer}>
      {/* Logo and Icons */}
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={handleLogout}>
        <Icon name="log-out-outline" size={30} color="#624980" />
        </TouchableOpacity>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={handleBack}>
          <View style={styles.backContainer}>
            <Icon name="chevron-back" size={20} color="#624980" />
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'button1' ? styles.activeButton : styles.inactiveButton]}
          onPress={() => handleButtonPress('button1')}
        >
          <Text style={[styles.buttonText,{color:selectedButton === 'button1' ?  '#FFFFFF' : '#65497a' } ]}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'button2' ? styles.activeButton : styles.inactiveButton]}
          onPress={() => handleButtonPress('button2')}
        >
          <Text style={[styles.buttonText ,{color:selectedButton === 'button2' ?  '#FFFFFF' : '#65497a' }]}>Emergency</Text>
        </TouchableOpacity>
      </View>
      <AppointmentForm />
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
  maincontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Adjust the width as needed
    height: '100%',
    marginBottom:50

  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent:'space-evenly'
  },
  logo: {
    width: 200,
    height: 100,    
    resizeMode: 'contain',
    marginHorizontal:25
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom:30
  },
  button: {
    backgroundColor: '#fcd9d7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal:10
  },
  activeButton: {
    backgroundColor: '#65497a',
  },
  inactiveButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#65497a',
  },
  buttonText: {
    color: '#65497a',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
