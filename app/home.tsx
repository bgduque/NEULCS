import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.content}>
        {/* Logo */}
        <Image 
          source={require('../assets/images/NEULogo.png')} 
          style={styles.logo}
        />
        
        {/* Title */}
        <Text style={styles.title}>NEUVIS</Text>
        
        {/* Subtitle */}
        <Text style={styles.subtitle}>
          New Era University Visitor Identification System
        </Text>
        
        {/* QR Code Icon */}
        <Image 
          source={require('../assets/images/HeroImage.png')}
          style={styles.qrCode}
        />
        
        {/* Sign in Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign in using Google Account</Text>
        </TouchableOpacity>
        
        {/* Privacy Policy Link */}
        <TouchableOpacity>
          <Text style={styles.privacyLink}>Privacy & Policy</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 50,
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
  privacyLink: {
    fontSize: 14,
    color: '#0099ff',
    textDecorationLine: 'underline',
  },
});