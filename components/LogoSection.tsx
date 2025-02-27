import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LogoSection() {
  return (
    <View style={styles.logoContainer}>
      <Image 
        source={require('../assets/images/NEULogo.png')}
        style={styles.logo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>NEUVIS</Text>
        <Text style={styles.subtitle}>New Era University Visitor Identification System</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  titleContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
});