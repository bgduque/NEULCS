import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [startCamera, setStartCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState('Phil NatID');
  const cameraRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === 'granted') {
        setHasPermission(true);
        setStartCamera(true);
      } else {
        Alert.alert('Access denied');
      }
    };

    requestPermission();
  }, []);

  const takePicture = async () => {
    if (!cameraRef.current) return;

    try {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken:', photo.uri);

      
      router.push({
        pathname: '/scannedForm',
        params: { imageUri: photo.uri },
      });
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  };

  return (
    <View style={styles.container}>
      {startCamera && hasPermission ? (
        <CameraView style={{ flex: 1, width: '100%' }} ref={cameraRef} facing="back">
         
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

       
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Ionicons name="camera" size={24} color="white" />
          </TouchableOpacity>

       
          <View style={styles.overlay}>
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />
          </View>

  
          <View style={styles.buttonGroup}>
         
            <TouchableOpacity
              style={[
                styles.button,
                selectedOption === 'Phil NatID' && styles.selectedButton,
                styles.firstButton,
              ]}
              onPress={() => setSelectedOption('Phil NatID')}
            >
              {selectedOption === 'Phil NatID' && (
                <Ionicons name="checkmark" size={20} color="white" style={styles.checkIcon} />
              )}
              <Text style={styles.buttonText}>Phil NatID</Text>
            </TouchableOpacity>

           
            <View style={styles.separator} />

        
            <TouchableOpacity
              style={[
                styles.button,
                selectedOption === "Driver's License" && styles.selectedButton,
              ]}
              onPress={() => setSelectedOption("Driver's License")}
            >
              {selectedOption === "Driver's License" && (
                <Ionicons name="checkmark" size={20} color="white" style={styles.checkIcon} />
              )}
              <Text style={styles.buttonText}>Driver's License</Text>
            </TouchableOpacity>

          
            <View style={styles.separator} />

           
            <TouchableOpacity
              style={[styles.button, styles.lastButton]}
              onPress={() => console.log('Other option pressed')}
            >
              <Text style={styles.buttonText}>Other</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cornerTopLeft: {
    position: 'absolute',
    top: '15%',
    left: '10%',
    width: 75,
    height: 110,
    borderTopWidth: 8,
    borderLeftWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  cornerTopRight: {
    position: 'absolute',
    top: '15%',
    right: '10%',
    width: 75,
    height: 110,
    borderTopWidth: 8,
    borderRightWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: '30%',
    left: '10%',
    width: 75,
    height: 110,
    borderBottomWidth: 8,
    borderLeftWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: '30%',
    right: '10%',
    width: 75,
    height: 110,
    borderBottomWidth: 8,
    borderRightWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  buttonGroup: {
    position: 'absolute',
    bottom: 110,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '85%',
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: '#22c55e',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkIcon: {
    marginRight: 5,
  },
  firstButton: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  lastButton: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  separator: {
    width: 2,
    backgroundColor: 'white',
    height: '100%',
    alignSelf: 'center',
  },
});
