import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {router, useRouter} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register(){ 
    const router = useRouter();
    
    const [name, setName] = useState(''); 
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async () => {
        setNameError('');
        setPhoneError('');
        setEmailError('');
        
        let hasError = false;

        if(name.trim() === ''){
            setNameError('Name is required');
            hasError = true;
        }
        if (phone.trim() === '') {
            setPhoneError('Phone number is required');
            hasError = true;
        }
        if (email.trim() === '') {
            setEmailError('Email is required');
            hasError = true;
        }
        if (!hasError) {
            const token = `QR_TEST_${Date.now()}`;
            router.push({
                pathname: '/myqr',
                params: {token}
            })
            try {
                await AsyncStorage.setItem('qrToken', token);
                router.push(`/myqr?token=${token}`);
                } catch (error) {
                console.log('Error saving token:', error);
                }
         }
    };


    return(
        <View style={{ padding: 20 }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 30}}>
                Registration Form
            </Text>
            <TextInput style = {styles.input}
                placeholder="Full name"
                value= {name}
                onChangeText = {setName}
            />
            {nameError !== '' && (
                <Text style={{ color: 'red', marginBottom: 10 }}>{nameError}</Text>
            )}
            <TextInput style = {styles.input}
                placeholder="Phone number"
                value= {phone}
                onChangeText = {setPhone}
            />
            {phoneError !== '' && (
                <Text style={{ color: 'red', marginBottom: 10 }}>{phoneError}</Text>
            )}
            <TextInput style = {styles.input}
                placeholder="Email"
                value= {email}
                onChangeText = {setEmail}
            />
            {emailError !== '' && (
                <Text style={{ color: 'red', marginBottom: 10 }}>{emailError}</Text>
            )}
            <TouchableOpacity
                onPress={handleSubmit}
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    input: {
        height: 40, 
        borderColor: 'black',
        marginBottom: 20
    }
}