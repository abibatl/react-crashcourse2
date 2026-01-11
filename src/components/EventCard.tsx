import {View, Text} from 'react-native';


export default function EventCard({name, date, location} : {name: string, date: string, location: string}) {
    return (
        <View style={{padding:10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{name}</Text>
            <Text>{date}</Text>
            <Text>{location}</Text>
        </View>
    );
}