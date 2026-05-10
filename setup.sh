#!/bin/bash
# DGB Booking App — Quick Setup Script

set -e

echo "🚀 Setting up DGB Booking App..."

# Install expo dependencies
npx expo install \
  expo-font \
  expo-linear-gradient \
  expo-status-bar \
  react-native-svg \
  react-native-reanimated

# Install Google Fonts
npx expo install \
  @expo-google-fonts/dm-sans \
  @expo-google-fonts/playfair-display

# Install NativeWind
npm install nativewind@^4.0.1
npm install --save-dev tailwindcss@^3.4.0

echo "✅ All dependencies installed!"
echo ""
echo "📱 Run the app with:"
echo "   npx expo start"
echo ""
echo "Press 'i' for iOS, 'a' for Android"
