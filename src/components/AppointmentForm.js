import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import the Picker component
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AppointmentForm = () => {
  const [selectedOption1, setSelectedOption1] = useState('option1');
  const [selectedOption2, setSelectedOption2] = useState('option1');
  const [selectedOption3, setSelectedOption3] = useState('option1');
  const [placeInput, setPlaceInput] = useState('');
  const [anotherInput, setAnotherInput] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', {
      option1: selectedOption1,
      option2: selectedOption2,
      option3: selectedOption3,
      placeInput,
      anotherInput,
    });
  };

  return (
        <View style={styles.formContainer}>
          {/* Spinners */}
          <View style={styles.spinnerContainer}>
            <Picker
              selectedValue={selectedOption1}
              onValueChange={(itemValue) => setSelectedOption1(itemValue)}
            >
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>
          <View style={styles.spinnerContainer}>
            <Picker
              selectedValue={selectedOption2}
              onValueChange={(itemValue) => setSelectedOption2(itemValue)}
            >
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>
          <View style={styles.spinnerContainer}>
            <Picker
              selectedValue={selectedOption3}
              onValueChange={(itemValue) => setSelectedOption3(itemValue)}
            >
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>

          {/* Inputs */}
          <TextInput
            style={styles.input}
            placeholder="Place Input"
            value={placeInput}
            onChangeText={(text) => setPlaceInput(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Another Input"
            value={anotherInput}
            multiline={true}
            onChangeText={(text) => setAnotherInput(text)}
            numberOfLines={3}
          />

          {/* Submit Button */}
          <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:25}}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 50,
    width:'100%',
    marginTop:30
  },
  spinnerContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FCD9D7',
    borderRadius: 4,
  },
  input: {
    height: 40,
    borderColor: '#FCD9D7',
    color: '#FCD9D7',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fcd9d7',
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    paddingHorizontal:30,
  },
  buttonText: {
    color: '#65497a',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default AppointmentForm;
