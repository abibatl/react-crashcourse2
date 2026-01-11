import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyQR(){
    const { token } = useLocalSearchParams();

    const handleStartOver = async () => {
        try {
            await AsyncStorage.removeItem('qrToken');  // Clear the saved token
            router.push('/register');                   // Go back to register
        } catch (error) {
            console.log('Error removing token:', error);
        }
    };

    return(
        <View style = {{ padding: 20 }}>
            <Text>Your QR Token: {token} </Text>
            <View style = {{ marginTop: 20}}>
                <Button 
                    title="Start Over"
                    onPress= {() => router.push('/register')}/> 
            </View>
        </View>


    ); 
}