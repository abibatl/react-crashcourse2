import {View, Text} from 'react-native';

export default function HelloCard({name} : {name: string}) {
    return (
        <View style={{padding:10}}>
            <Text>Hello, {name}</Text>
        </View>
    );  
}