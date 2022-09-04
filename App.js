import React, { useRef } from 'react';
import { View, Button, DrawerLayoutAndroid, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { useState } from "react";

const App = () => {
    const [drawerPosition, setDrawerPosition] = useState('left');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const validateLogin = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            Alert.alert(
                "Message",
                "Email not correct",
                [
                    {
                        text: "OK",
                    },
                ]
            );
        } else {
            if (password != confirmPassword) {
                Alert.alert(
                "Message",
                "Invalid credential",
                [
                    {
                        text: "OK",
                    },
                ]);
                
            }else{
                Alert.alert(
                    "Message",
                    "Email: " + email  + "\n" + "Password: " + password,
                    [
                        {
                            text: "OK",
                        },
                    ]);
            }
        }   
    }

return (
    <View style={styles.inputview}>
        <View style={styles.LoginTextHeader}>
            <Text style={styles.HeaderText}>Login Now!</Text>
        </View>

        {/* email input */}
        <Text style={styles.TextLabel}>Email</Text>
        <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => { setEmail(email) }}
        />

        {/* input password */}
        <Text style={styles.TextLabel}>Password</Text>
        <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => { setPassword(password) }}
        />

        {/* input confirm password */}
        <Text style={styles.TextLabel}>Confirm Password</Text>
        <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(confirmPassword) => { setConfirmPassword(confirmPassword) }}
        />
        {/* button login */}
        <TouchableOpacity
            style={styles.loginBtn}
            onPress={validateLogin}
        >
            <Text style={styles.TextBtnLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.MessageText}>{message}</Text>
    </View>
);
}

const styles = StyleSheet.create({
    inputview: {
        width: "100%",
        padding: 30,
        marginTop: 60,
    },
    TextInput: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightblue",
        margin: 10
    },
    loginBtn: {
        width: "40%",
        borderRadius: 10,
        backgroundColor: "blue",
        alignItems: "center",
        padding: 13,
        margin: 10,
        marginLeft: 100,
    },
    TextLabel: {
        marginLeft: 10
    },
    TextBtnLogin: {
        color: "white"
    },
    LoginTextHeader: {
        padding: 20,
        alignItems: 'center'
    },
    HeaderText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    MessageText: {
        color: "red",
        margin: 10
    },
});
export default App;