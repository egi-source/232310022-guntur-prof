import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from './styles/profileStyle';

export default function ContactCard() {
  return (
    <View style={styles.innerCard}>
      <Text style={styles.cardTitle}>Contacto</Text>
      <View style={styles.contactRow}>
        <MaterialIcons name="email" size={20} color="#555" />
        <Text style={styles.contactText}>apazarenato@gmail.com</Text>
      </View>
      <View style={styles.contactRow}>
        <Entypo name="link" size={20} color="#555" />
        <Text style={styles.contactText}>https://renatodevs.vercel.app</Text>
      </View>
      <View style={styles.contactRow}>
        <Entypo name="location-pin" size={20} color="#555" />
        <Text style={styles.contactText}>Perú</Text>
      </View>
    </View>
  );
}
