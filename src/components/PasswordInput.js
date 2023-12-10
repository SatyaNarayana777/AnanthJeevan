import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PasswordInput = ({style,onChangeText,value}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.passwordContainer,style]}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={value}
        placeholderTextColor='#FCD9D7'
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={handleTogglePassword} style={styles.iconContainer}>
        <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#FCD9D7" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  passwordInput: {
    height: 40,
    borderColor: '#FCD9D7',
    borderWidth: 2,
    padding: 8,
    borderRadius: 4,
    color:'#FCD9D7',
  },
  iconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
});

export default PasswordInput;
