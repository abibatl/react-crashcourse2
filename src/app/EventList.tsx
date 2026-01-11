import {Text, View, FlatList, } from 'react-native';
import EventCard from '../components/EventCard';

export default function EventList() {
   const events= [
    {id: '1', name: 'Dance Workshop', date: '2025-01-10', location: 'Rush Building'},
    {id: '2', name: 'Watercolor Social', date: '2025-01-11', location: 'Academic Building'},
    {id: '3', name: 'Spring Festival', date: '2025-01-12', location: 'Lancaster Walk'},
    {id: '4', name: 'Baking Class', date: '2025-01-13', location: 'Main Building'},
    {id: '5', name: 'Food Fair', date: '2025-01-14', location: 'Lancaster Walk'},
    {id: '6', name: 'Art Social', date: '2025-01-15', location: 'City Streets'},
    ]  

    return (
        <View>
            <FlatList
            data={events}
            renderItem={({item}) => <EventCard name={item.name} date={item.date} location={item.location} />}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text>No events available</Text>}
        />
        </View>
    );
}