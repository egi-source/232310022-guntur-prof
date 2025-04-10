import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import ProfileCard from './components/ProfileCard';
import styles from './components/styles/profileStyle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileCard />
      </ScrollView>
    </SafeAreaView>
  );
}
