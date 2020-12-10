import React from 'react';
import{ StyleSheet, TouchableOpacity,Text, View } from 'react-native';

function Button(){
    return(
        <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.loginContainer} onPress={()=>alert('Login successful')}>
            <Text style={styles.buttonLogin}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signContainer}>
            <Text style={styles.buttonSign}>Sign Up</Text>
        </TouchableOpacity>
        </View>

    );
}

const styles=StyleSheet.create({
    buttonContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        width:'55%',
        alignItems:'center',
        
    },
    buttonLogin:{
        fontWeight:'500',
        fontSize:20,
        backgroundColor:'#e63946',
        padding:10,
        borderRadius:8,
        margin:20,
        fontFamily:'Arial',
        fontWeight:'bold',
    
    },
    buttonSign:{
        color:'#e63946',
        padding:10,
        fontWeight:'500',
        fontSize:20,
        margin:20,
        fontFamily:'Arial',
        fontWeight:'bold',

    }
});
export default Button;