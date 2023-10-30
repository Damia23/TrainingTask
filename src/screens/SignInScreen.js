import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const SignInScreen = ({}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SIGN IN</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder='Email'
            />
            <TextInput 
                style={styles.textInput} 
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.buttonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInbuttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createAccountButton}>
                <Text style={styles.buttonText}>New to this? Create Account</Text>
            </TouchableOpacity>
        </View>
      );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    textInput: {
        width: '80%',
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        color: 'blue',
    },
    buttonText: {
        color: 'grey',
        fontSize: 16,
    },
    forgotPasswordButton: {
        marginTop: 10,
    },
    signInButton: {
        width: '80%',
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    signInbuttonText: {
        color: '#fff',
        fontSize: 16,
    },
    createAccountButton: {
        marginTop: 10,
    },

})

export default SignInScreen;