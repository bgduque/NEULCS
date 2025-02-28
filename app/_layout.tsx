import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="landing" />
        <Stack.Screen name="privacy" />
        <Stack.Screen name="scanner" />  
        <Stack.Screen name="scanned-form" /> 
      </Stack>
    </SafeAreaProvider>
  );
}