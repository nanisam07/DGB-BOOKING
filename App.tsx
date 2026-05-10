import './global.css';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import {
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_500Medium_Italic,
} from '@expo-google-fonts/playfair-display';
import { StatusBar } from 'expo-status-bar';
import { ConfirmBookingScreen } from './src/screens/ConfirmBookingScreen';
import { COLORS } from './src/constants/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return <View style={styles.loading} />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <ConfirmBookingScreen />
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
});
