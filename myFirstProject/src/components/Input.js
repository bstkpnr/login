import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function Input() {
  return (
    <View style={styles.container}>
        <TextInput 
        keyboardType={"email-address"}
        placeholder='E-mail'
        style={styles.input} >

        </TextInput>
        <TextInput
        secureTextEntry
        placeholder='Password'
        style={styles.input}>

        </TextInput>
          
        
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom:20,
    margin:10,
    borderRadius:8,
    marginBottom:48,
    width:200,
    height:40,
    backgroundColor:'#fffffc',
    color:'#bdb2ff',
    paddingHorizontal:10
    
    

  },
  container: {
    padding:20,
    width:'100%',
    backgroundColor:'#f1faee',
    borderRadius:25
    

    
  },
});

export default Input;