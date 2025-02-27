import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface PrivacyLinkProps {
  style?: object;
  textStyle?: object;
}

export default function PrivacyLink({ style, textStyle }: PrivacyLinkProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push('/privacy');
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
      <Text style={[styles.link, textStyle]}>Privacy & Policy</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  link: {
    fontSize: 14,
    color: '#0099ff',
    textDecorationLine: 'underline',
  },
});