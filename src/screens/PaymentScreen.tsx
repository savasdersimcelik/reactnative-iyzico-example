import React, { useState, useRef } from "react";
import { View, Text, Button, Alert } from "react-native"
import { WebView } from 'react-native-webview';

const PaymentScreen = () => {

    const webViewRef = useRef();

    const handleWebviewNavigationStateChange = (params: any) => {
        const { url } = params;
        console.log(url);
        if (url?.includes('/success')) {
            webViewRef.current.stopLoading();
            Alert.alert('Başarılı', 'Ödeme başarılı bir şekilde tamamlandı', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 15 }} />
            <Text style={{ color: 'black', alignSelf: 'center' }}>Redux Öğreniyorum - PaymentScreen</Text>
            <View style={{ height: 15 }} />
            <WebView
                ref={webViewRef}
                source={{ uri: 'https://bumuda.com/payment' }}
                style={{ flex: 1 }}
                onNavigationStateChange={handleWebviewNavigationStateChange}
            />
        </View>
    );
}

export default PaymentScreen;