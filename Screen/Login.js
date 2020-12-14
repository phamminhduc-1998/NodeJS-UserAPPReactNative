import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, TextInput, Button, KeyboardAvoidingView, Alert,  } from 'react-native';
import { useEffect, useState } from 'react';


export default function Login({navigation }) {
    
    const [listUser, setListUser] = useState([]);
    const [fetchOne, setFetchOne] = useState('true');
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    if (fetchOne == 'true') {
        fetch('http://192.168.0.114:3000/getJsonUser')
            // chuyen du lieu ve dang json
            .then((response) => response.json())
            // duoc goi khi ket thuc request du lieu
            .then((responseJson) => {
                setListUser(responseJson);
                console.log(listUser);
                setFetchOne('false')
            })
            // goi khi xay ra loi request
            .catch((error) => {
                console.error(error);
            });
    }


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
                placeholder="Username"
                onChangeText={
                    (text) => {
                        setUser(text)
                    }
                }></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                textContentType="emailAddress"
                onChangeText={
                    (text) => {
                        setPass(text)
                    }
                }></TextInput>



            <View style={{ flexDirection: 'row' }}>
                
                <Button title="SIGN IN" onPress={() => {
                    setFetchOne('true');
                    for (let index = 0; index < listUser.length; index++) {
                        if (user == listUser[index].User && pass == listUser[index].Pass) {
                            Alert.alert("THÔNG BÁO", user + "\n" + pass);
                            navigation.navigate('Products',{User: user});
                            return;
                        } else {
                            Alert.alert("THÔNG BÁO", "Tài khoản hoặc mật khẩu không đúng");
                        }
                    }

                }
                }
                ></Button>
                <Button title="SIGN UP" onPress={() => {
                    navigation.navigate('Register');
                }
                }
                ></Button>
            </View>
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