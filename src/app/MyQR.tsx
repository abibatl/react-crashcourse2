import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";

export default function MyQR(){
    const { token } = useLocalSearchParams();

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