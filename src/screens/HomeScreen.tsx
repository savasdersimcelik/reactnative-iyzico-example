import React from "react";
import { View, Text, Button } from "react-native"
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>İyzico Ödeme Entagrasyonu - HomeScreen</Text>
            <View style={{ height: 15 }} />
            <Button title="Ödeme Sayfasına Git" onPress={() => navigation.navigate('PaymentScreen')} />
        </View>
    );
}

export default HomeScreen;