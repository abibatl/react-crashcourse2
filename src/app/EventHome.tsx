import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function EventHome() {
    const { id } = useLocalSearchParams();

    return (
        <View style={{ padding: 20 }}>
            <Text>Event Home for ID: {id}</Text>
        </View>
    );
}