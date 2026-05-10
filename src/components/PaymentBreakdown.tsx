import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeIcon, StarIcon } from './Icons';
import { COLORS, FONTS, BOOKING_DATA } from '../constants/theme';

interface CostRowProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  sublabel: string;
  amount: string;
  isLast?: boolean;
}

const CostRow: React.FC<CostRowProps> = ({ icon, iconBg, label, sublabel, amount, isLast }) => (
  <View style={[styles.costRow, !isLast && styles.costRowBorder]}>
    <View style={styles.costRowLeft}>
      <View style={[styles.costIcon, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View>
        <Text style={styles.costLabel}>{label}</Text>
        <Text style={styles.costSublabel}>{sublabel}</Text>
      </View>
    </View>
    <Text style={styles.costAmount}>{amount}</Text>
  </View>
);

interface PaymentBreakdownProps {
  subtotal: number;
}

const formatINR = (n: number) =>
  '₹' + Math.round(n).toLocaleString('en-IN');

export const PaymentBreakdown: React.FC<PaymentBreakdownProps> = ({ subtotal }) => {
  return (
    <>
      <Text style={styles.sectionLabel}>Payment breakdown</Text>
      <View style={styles.card}>
        <CostRow
          iconBg={COLORS.blueLight}
          icon={<HomeIcon size={15} color={COLORS.blue} />}
          label="Venue cost"
          sublabel="DGB Convention Hall"
          amount={formatINR(BOOKING_DATA.venueCost)}
        />
        <CostRow
          iconBg={COLORS.greenLight}
          icon={<StarIcon size={15} color={COLORS.green} />}
          label="Services cost"
          sublabel="Add-ons & extras"
          amount={formatINR(BOOKING_DATA.servicesCost)}
          isLast
        />
        <View style={styles.subtotalRow}>
          <Text style={styles.subtotalLabel}>Subtotal</Text>
          <Text style={styles.subtotalAmount}>{formatINR(subtotal)}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionLabel: {
    fontSize: 10,
    fontFamily: FONTS.semiBold,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: COLORS.inkMuted,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  card: {
    marginHorizontal: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  costRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  costRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSoft,
  },
  costRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  costIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  costLabel: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: COLORS.inkSoft,
  },
  costSublabel: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: COLORS.inkMuted,
    marginTop: 1,
  },
  costAmount: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.ink,
  },
  subtotalRow: {
    backgroundColor: COLORS.surface2,
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtotalLabel: {
    fontSize: 13,
    fontFamily: FONTS.semiBold,
    color: COLORS.ink,
  },
  subtotalAmount: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.ink,
  },
});

export default PaymentBreakdown;
