import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';


export default function BillProducts({ route, navigation }) {
    {/**Nhan gia tri name, old cua man hinh Home truyen sang */ }
    const { User, Id, Img, Type, Name, Price, } = route.params;


    return (
        <View style={styles.container}>

            <Text>TÀI KHOẢN ĐÃ ĐĂNG NHẬP : {User}</Text>
            <Text>MÃ SẢN PHẨM : {Id}</Text>
            <Image
                style={{ width: 400, height: 400 }}
                source={{ uri: Img }}>
            </Image>
            <Text>HÃNG : {Type}</Text>
            <Text>TÊN : {Name}</Text>
            <Text>GIÁ : {Price}</Text>
            <Button title="Mua" onPress={() => {
                fetch('http://192.168.0.114:3000/addBills', {
                    method: 'post',
                    body: new URLSearchParams({
                        name: Name,
                        user: User,
                        price: Price,
                    }).toString(),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .then(response => response.json())
                    .then(json =>
                        console.log("Them thanh cong")

                    )
                Alert.alert("THÔNG BÁO", "MUA HÀNG THÀNH CÔNG")
            }}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});