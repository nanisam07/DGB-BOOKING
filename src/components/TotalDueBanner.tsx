import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface TotalDueBannerProps {
  totalDue: number;
  balance: number;
  noteText: string;
  noteColor: string;
}

const formatINR = (n: number) =>
  '₹' + Math.max(0, Math.round(n)).toLocaleString('en-IN');

export const TotalDueBanner: React.FC<TotalDueBannerProps> = ({
  totalDue, balance, noteText, noteColor,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.04, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
  }, [totalDue, balance]);

  return (
    <View style={styles.banner}>
      <View style={styles.left}>
        <Text style={styles.totalLabel}>Total due</Text>
        <Animated.Text style={[styles.totalAmount, { transform: [{ scale: scaleAnim }] }]}>
          {formatINR(totalDue)}
        </Animated.Text>
        <Text style={[styles.totalNote, { color: noteColor }]}>{noteText}</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.duePill}>
          <Text style={styles.duePillLabel}>Balance</Text>
          <Animated.Text style={[styles.duePillVal, { transform: [{ scale: scaleAnim }] }]}>
            {formatINR(balance)}
          </Animated.Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: COLORS.ink,
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: COLORS.ink,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 8,
  },
  left: {},
  totalLabel: {
    fontSize: 11,
    fontFamily: FONTS.semiBold,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 4,
  },
  totalAmount: {
    fontFamily: FONTS.serif,
    fontSize: 28,
    color: 'white',
    lineHeight: 32,
  },
  totalNote: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    marginTop: 3,
  },
  right: {},
  duePill: {
    backgroundColor: 'rgba(232,54,93,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(232,54,93,0.3)',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
  },
  duePillLabel: {
    fontSize: 10,
    fontFamily: FONTS.semiBold,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: COLORS.roseMuted,
  },
  duePillVal: {
    fontSize: 15,
    fontFamily: FONTS.semiBold,
    color: '#ff8fa8',
    marginTop: 2,
  },
});

export default TotalDueBanner;
