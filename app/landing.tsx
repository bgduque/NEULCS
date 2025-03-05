import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

import Header from '../components/Header';
import SidebarMenu from '../components/SidebarMenu';
import LogoSection from '../components/LogoSection';
import ActionButton from '../components/ActionButton';
import PrivacyLink from '../components/PrivacyLink';

export default function Landing() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = async () => {
    try {
      console.log("Attempting to log out..."); // Debugging log
  
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        console.error("Logout failed:", error.message);
        alert("Logout failed. Please try again.");
      } else {
        console.log("Logout successful"); // Debugging log
        router.replace('/home'); // Redirect to home screen after logout
      }
    } catch (err) {
      console.error("Unexpected error during logout:", err);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header Component */}
      <Header 
        onMenuPress={toggleMenu}
        role="Security Guard"
        location="Main Entrance"
      />

      {/* Sidebar Menu Component */}
      <SidebarMenu 
        visible={menuVisible} 
        onLogout={handleLogout} 
      />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Logo Section Component */}
        <LogoSection />

        {/* ID Icon */}
        <View style={styles.idIconContainer}>
          <MaterialIcons name="badge" size={80} color="#333" />
        </View>

        {/* Generate Visitor ID Text */}
        <Text style={styles.generateText}>Generate Visitor ID</Text>

        {/* Action Buttons Components */}
        <ActionButton 
          icon="qr-code-scanner"
          text="Scan ID to Generate"
          onPress={() => router.push('/scanner')} // Navigate to scanner.tsx
        />

        <ActionButton 
          icon="edit"
          text="Manually Input Information"
          iconType="feather"
        />

        <ActionButton 
          icon="list"
          text="Visitor Logs"
        />

        {/* Privacy Link Component */}
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  idIconContainer: {
    marginBottom: 20,
  },
  generateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});