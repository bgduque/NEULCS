import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SidebarMenuProps {
  visible: boolean;
  onLogout: () => void;
}

export default function SidebarMenu({ visible, onLogout }: SidebarMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name="settings" size={24} color="black" />
        <Text style={styles.menuItemText}>Permission</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name="report-problem" size={24} color="black" />
        <Text style={styles.menuItemText}>Report Problem</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name="person" size={24} color="black" />
        <Text style={styles.menuItemText}>Change Role</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem} onPress={onLogout}>
        <MaterialIcons name="logout" size={24} color="black" />
        <Text style={styles.menuItemText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 100,
    left: 0,
    backgroundColor: 'white',
    width: '60%',
    zIndex: 1000,
    elevation: 5,
    borderRightWidth: 1,
    borderRightColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
});