import { View, Text } from 'react-native';
import HelloCard from '../components/HelloCard';
import {Link, useRouter} from 'expo-router';
import { Button } from 'react-native';


export default function Home() {
  const router = useRouter();

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
      <Button 
        title="Go to Event List" 
        onPress={() => router.push('/EventList')} />
      <View style= {{ marginTop: 20 }}>
        <Button 
          title="Register Here" 
          onPress={() => router.push('/register')}/>
      </View>
    </View>
    
  );
    
}


