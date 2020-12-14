import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


export default function Products({ route, navigation }) {
    {/**Nhan gia tri name, old cua man hinh Home truyen sang */ }
    const { User} = route.params;
    const [listProducts, setListProducts] = useState([]);
    const [fetchTow, setFetchTow] = useState('true');


    if (fetchTow == 'true') {
        fetch('http://192.168.0.114:3000/getJsonProducts')
            // chuyen du lieu ve dang json
            .then((response) => response.json())
            // duoc goi khi ket thuc request du lieu
            .then((responseJson) => {
                setListProducts(responseJson);
                console.log(listProducts);
                setFetchTow('false')
            })
            // goi khi xay ra loi request
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={listProducts}
                //giao diện 1 mảng
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('BillProducts', { User: User, Id: item._id, Img: 'http://192.168.0.114:3000/' + item.Img, Type: item.Type, Name: item.Name, Price: item.Price }) }}>
                        <View style={{ margin: 1, borderRadius: 50 }}>

                            <ImageBackground
                                imageStyle={{ borderRadius: 20, }}
                                style={{
                                    resizeMode: "cover",
                                    justifyContent: "flex-end",
                                    width: 200,
                                    height: 250,
                                    padding: 10,
                                    margin: 2,
                                    borderRadius: 30,
                                    marginVertical: 5,
                                }}
                                source={{ uri: 'http://192.168.0.114:3000/' + item.Img }}

                            >
                                {/* <Text style={{ color: "#4f953b" }}>Type: {item.Type}</Text> */}
                                <Text style={{ color: "#4f953b" }}>{item.Name}</Text>
                                {/* <Text style={{ color: "#4f953b" }}>Price: {item.Price}</Text> */}
                            </ImageBackground>

                        </View>

                    </TouchableOpacity>


                )}
                // giá trị trên mảng để phân biệt các hàng
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#54546c',
        alignItems: 'center',
        justifyContent: 'center',
    },

});