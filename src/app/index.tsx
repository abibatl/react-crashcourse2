import { View, Text } from 'react-native';
import HelloCard from '../components/HelloCard';
import {router, useRouter} from 'expo-router';
import { Button } from 'react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home() {
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('qrToken');
        if (token) {
          router.replace(`/myqr?token=${token}`);
        } else {
          router.replace('/register');
        }
      } catch (error) {
        console.log('Error loading token:', error);
        router.replace('/register');
      }
    };
    
    checkToken();
  }, []);

  return (
    <View style={{ padding: 40 }}>
      <Text>Loading...</Text>
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


