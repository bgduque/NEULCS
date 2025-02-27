import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import PrivacyLink from '../components/PrivacyLink';

// We could create these components separately if they'll be reused elsewhere in the admin interface
const Logo = () => (
  <Image 
    source={require('../assets/images/NEULogo.png')} 
    style={styles.logo}
  />
);

const Title = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>NEUVIS</Text>
    <Text style={styles.subtitle}>
      New Era University Visitor Identification System
    </Text>
  </View>
);

const HeroImage = () => (
  <Image 
    source={require('../assets/images/HeroImage.png')}
    style={styles.qrCode}
  />
);

const SignInButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity 
    style={styles.signInButton}
    onPress={onPress}
  >
    <Text style={styles.signInText}>Sign in using Google Account</Text>
  </TouchableOpacity>
);

export default function Home() { 
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/landing');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.content}>
        <Logo />
        <Title />
        <HeroImage />
        <SignInButton onPress={handleSignIn} />
        <PrivacyLink />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  qrCode: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  signInButton: {
    width: '100%',
    maxWidth: 300,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInText: {
    fontSize: 16,
  },
});