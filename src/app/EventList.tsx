import {Text, View, FlatList, Pressable, Button } from 'react-native';
import EventCard from '../components/EventCard';
import {useState} from 'react'; 
import { router } from 'expo-router';

export default function EventList() {
   const events= [
    {id: '1', name: 'Dance Workshop', date: '2025-01-10', location: 'Rush Building'},
    {id: '2', name: 'Watercolor Social', date: '2025-01-11', location: 'Academic Building'},
    {id: '3', name: 'Spring Festival', date: '2025-01-12', location: 'Lancaster Walk'},
    {id: '4', name: 'Baking Class', date: '2025-01-13', location: 'Main Building'},
    {id: '5', name: 'Food Fair', date: '2025-01-14', location: 'Lancaster Walk'},
    {id: '6', name: 'Art Social', date: '2025-01-15', location: 'City Streets'},
    ]  

    const [selectedEventId, setSelectedEventId] = useState<string | null>(null); /*string | null is typescript that means id can either be a string or a null */
    const selectedEvent = events.find(event => event.id === selectedEventId); //finding the selected event based on the id

    return (
        <View> 
            <Text style={{ fontSize: 16, marginBottom: 10}}>    
                selected: {selectedEvent ? selectedEvent.name : 'none'}
            </Text>

            {selectedEvent && (  //renders button only if an event is selected
                <Button
                    title = "Go to Event Home"
                    onPress={() => router.push({ pathname: '/EventHome', params: { id: selectedEventId } })}>
                </Button>
            )}
            <FlatList
                data={events}
                renderItem={({item}) =>(
                <Pressable onPress={() => setSelectedEventId(item.id)}>
                    <View style={{
                        backgroundColor: item.id === selectedEventId ? '#9bb9ff' : 'white',
                    }}>
                    <EventCard name={item.name} date={item.date} location={item.location} />
                    </View>
                </Pressable>
            )}
            
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>No events available</Text>}
        />
        </View>
    );
}