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

const RegisterScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Screen</Text>
            <TextInput 
            style={styles.textInput}
            placeholder="Full Name"
            />
            <TextInput 
            style={styles.textInput}
            placeholder="Store Name"
            />
            <TextInput 
            style={styles.textInput}
            placeholder="Email Address"
            />
            <TextInput 
            style={styles.textInput}
            placeholder="Phone Number"
            />
            <TextInput 
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            />
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton}>
                <Text>Already have account? Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInput: {
        width: '80%',
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    registerButton: {
        width: '80%',
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    signInButton: {
        marginTop: 10,
    },
})

export default RegisterScreen;