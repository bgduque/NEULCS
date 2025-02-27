import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface HeaderProps {
  onMenuPress: () => void;
  role: string;
  location: string;
}

export default function Header({ onMenuPress, role, location }: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      
      <View style={styles.headerRight}>
        <Text style={styles.roleText}>{role}</Text>
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuButton: {
    padding: 5,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  roleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
});