import React from 'react';
import { View } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import styles from './styles/profileStyle';

export default function SocialIcons() {
  return (
    <View style={styles.socialContainer}>
      <FontAwesome name="github" size={24} color="#333" />
      <Entypo name="linkedin" size={24} color="#0e76a8" />
      <Entypo name="twitter" size={24} color="#1DA1F2" />
    </View>
  );
}
