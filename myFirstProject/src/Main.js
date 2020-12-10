import React from 'react';
import { SafeAreaView, View ,Text,StyleSheet,Image} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';


function Main() {
  return(
    <SafeAreaView style={{flex:1}} >
      <View  style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome To My App</Text>
        </View>
        <View style={styles.imageContainer}>
        <Image 
        style={styles.image}
        source={require('./components/user2.png')}></Image>
          <Input></Input>
          <Button></Button>
        </View> 
      </View>
    </SafeAreaView>
  );
  }
  const styles=StyleSheet.create({
    container:{
        padding:20,
        margin:10,
        flex:1,
        alignItems:'center',
        backgroundColor:'#1d3557',
        borderRadius:30,
   
    },
    imageContainer:{
      
      justifyContent:'center',
      alignItems:'center',},
    image:{
      width:100,
      height:100,
    },
    textContainer:{
        
        margin:10,
        paddingTop:15,
       
        
    },
    text:{
        justifyContent:'space-evenly',
        fontSize:30,
        color:'#e63946',
        fontFamily:'Arial',
        fontWeight:'bold',
        fontStyle:'italic',
        alignItems:'center'
        
    
    }
    
})


export default Main;
