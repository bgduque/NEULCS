import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

interface ActionButtonProps {
  icon: string;
  text: string;
  onPress?: () => void;
  iconType?: 'material' | 'feather';
}

export default function ActionButton({ 
  icon, 
  text, 
  onPress, 
  iconType = 'material' 
}: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      {iconType === 'material' ? (
        <MaterialIcons name={icon as any} size={24} color="white" />
      ) : (
        <Feather name={icon as any} size={24} color="white" />
      )}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});