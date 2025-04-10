import React, { useState } from 'react';
import { View, Text, Image, Pressable, Alert, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles/profileStyle';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function ProfileCard() {
  const [image, setImage] = useState('https://i.imgur.com/RfHhCTk.png');

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission dibutuhkan', 'Izinkan akses ke galeri terlebih dahulu.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.card}>
      <Pressable onPress={pickImage}>
        <Image source={{ uri: image }} style={styles.profileImage} />
      </Pressable>

      <Text style={styles.name}>Guntur Purnama </Text>
      <Text style={styles.role}>Blockchain developer</Text>

      <View style={styles.socialContainer}>
        <FontAwesome name="github" size={24} color="#333" />
        <Entypo name="linkedin" size={24} color="#0e76a8" />
        <Entypo name="twitter" size={24} color="#1DA1F2" />
      </View>

      <View style={styles.innerCard}>
        <Text style={styles.cardTitle}>TI 23 KA </Text>
        <Text style={styles.description}>
          Npm : 232310022
        </Text>
      </View>

      <View style={styles.innerCard}>
        <Text style={styles.cardTitle}>Contacto</Text>
        <View style={styles.contactRow}>
          <MaterialIcons name="email" size={20} color="#555" />
          <Text style={styles.contactText}>232310022@ibik.ac.id </Text>
        </View>
        <View style={styles.contactRow}>
          <Entypo name="link" size={20} color="#555" />
          <Text
            style={styles.contactText}
            onPress={() => Linking.openURL('https://www.instagram.com/gunturpurnama_/')}
          >
            https://www.instagram.com/gunturpurnama_/
          </Text>
        </View>
        <View style={styles.contactRow}>
          <Entypo name="location-pin" size={20} color="#555" />
          <Text style={styles.contactText}>Bogor</Text>
        </View>
      </View>

      <Pressable style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact</Text>
      </Pressable>
    </View>
  );
}
