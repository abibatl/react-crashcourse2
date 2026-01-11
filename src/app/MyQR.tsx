import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function MyQR(){
    const { token } = useLocalSearchParams();

    return(
        <View>
            <Text>Your QR Token: {token} </Text>
        </View>
    );
}