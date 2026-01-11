import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="pages/EventList" options={{ title: 'Event List' }} />
    </Stack>
  );
}