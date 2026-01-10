import { View, Text } from 'react-native';
import HelloCard from './components/Hellocard';

export default function Home() {
  return (
    <View style={{ padding: 40 }}>
      <Text style={{ 
        fontSize: 24, 
        fontWeight: 'bold' 
        }}>
          Staff Check-In
      </Text>
      <Text>By: Abibat Lateef</Text>
      <HelloCard name="Abibat" />
    </View>
  );
}
