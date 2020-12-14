import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native';
import { useEffect, useState } from 'react';


export default function Register({ navigation }) {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");



    return (

        <KeyboardAvoidingView style={styles.container}>
            <Image
                source={{ uri: "https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }}
                style={
                    {
                        width: 100,
                        height: 100
                    }
                }></Image>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                onChangeText={
                    (text) => {
                        setName(text)
                    }
                }></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Username"
                textContentType="emailAddress"
                onChangeText={
                    (text) => {
                        setUser(text)
                    }
                }></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={
                    (text) => {
                        setPass(text)
                    }
                }></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Phone"
                onChangeText={
                    (text) => {
                        setPhone(text)
                    }
                }></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Adress"
                onChangeText={
                    (text) => {
                        setAdress(text)
                    }
                }></TextInput>


            <Button
                title="SIGN UP"
                onPress={
                    () => {
                        if (name == '' || user == '' || pass == '' || phone == '' || adress == '') {
                            Alert.alert("THÔNG BÁO", "Ô nhập còn trống");
                        } else {
                            fetch('http://192.168.0.114:3000/addUser', {
                                method: 'post',
                                body: new URLSearchParams({
                                    name: name,
                                    user: user,
                                    pass: pass,
                                    phone: phone,
                                    adress: adress,
                                }).toString(),
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            })
                                .then(response => response.json())
                                .then(json =>
                                    console.log("Them thanh cong")
                                )
                            navigation.navigate('Login');
                        }

                    }
                }
            ></Button>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#54546c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: `80%`,
        borderWidth: 1,
        borderColor: "cyan",
        borderRadius: 5,
        padding: 10,
        margin: 10,

    }
});