import {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';


export default function HeadcountCard({eventId} : {eventId: string | null}) {
    
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (false);
    const [count, setCount] = useState (0);

    const fetchHeadcount = () => {
        setLoading(true);
        setError(false); 

        setTimeout(() => {
            if (Math.random() < 0.3) {
                setCount (Math.floor(Math.random() * 100));
                setLoading (false);
            } 
            else {
                setError (true);
                setLoading (false);

            }
        }, 1000);
    }

    useEffect (() => {
        if (eventId) {
            fetchHeadcount();
        }

    }, [eventId]);

    if (loading) 
        return <Text> Loading headcount...</Text>

    if (error) 
        return (
            <View>
                <Text> Error loading headcount.</Text>
                <Button title="Retry" onPress={fetchHeadcount} />
            </View>
        );


    return (
        <View>
            <Text>Headcount: {count}</Text>
        </View>
    );
}