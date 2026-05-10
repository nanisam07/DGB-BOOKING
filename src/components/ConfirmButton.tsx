import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { ConfirmIcon, SuccessCheckIcon } from './Icons';
import { COLORS, FONTS } from '../constants/theme';

interface ConfirmButtonProps {
  onPress?: () => void;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onPress }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const bgAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    // Scale down then up
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.97, duration: 80, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();

    // Animate background color
    Animated.timing(bgAnim, { toValue: 1, duration: 300, useNativeDriver: false }).start();

    setIsSuccess(true);
    onPress?.();

    setTimeout(() => {
      Animated.timing(bgAnim, { toValue: 0, duration: 300, useNativeDriver: false }).start();
      setIsSuccess(false);
    }, 2500);
  };

  const bgColor = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.rose, COLORS.green],
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handlePress}
          disabled={isSuccess}
        >
          <Animated.View style={[styles.button, { backgroundColor: bgColor }]}>
            {isSuccess ? (
              <SuccessCheckIcon size={18} color="white" strokeWidth={2.5} />
            ) : (
              <ConfirmIcon size={18} color="white" strokeWidth={2} />
            )}
            <Text style={styles.buttonText}>
              {isSuccess ? 'Booking Confirmed!' : 'Confirm & Book'}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundC: 'transparent',
  },
  button: {
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: COLORS.rose,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: 'white',
    letterSpacing: 0.3,
  },
});

export default ConfirmButton;
