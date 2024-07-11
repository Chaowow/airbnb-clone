import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { defaultStyles } from '@/constants/Styles';

const login = () => {
  useWarmUpBrowser();

  return (
    <View style={styles.container}>
      <TextInput 
        autoCapitalize='none' 
        placeholder='Email' 
        style={[ defaultStyles.inputField, {marginBottom: 30} ]} 
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26
  }
})
export default login;