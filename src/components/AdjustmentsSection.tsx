import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { GSTIcon, GiftIcon, DollarIcon, CreditCardIcon, CashIcon, CardTabIcon, UPIIcon, BankIcon } from './Icons';
import { COLORS, FONTS } from '../constants/theme';

export type PaymentMode = 'Cash' | 'Card' | 'UPI' | 'Bank';

interface AdjustmentRowProps {
  iconBg: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  inputValue: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isLast?: boolean;
}

const AdjustmentRow: React.FC<AdjustmentRowProps> = ({
  iconBg, icon, label, sublabel, inputValue, onChangeText, placeholder, isLast,
}) => (
  <View style={[styles.fieldRow, !isLast && styles.fieldRowBorder]}>
    <View style={styles.fieldLeft}>
      <View style={[styles.fieldIcon, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <Text style={styles.fieldSublabel} numberOfLines={1}>{sublabel}</Text>
      </View>
    </View>
    <TextInput
      style={styles.fieldInput}
      value={inputValue}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={COLORS.inkMuted}
      keyboardType="numeric"
      returnKeyType="done"
    />
  </View>
);

interface PaymentTabProps {
  mode: PaymentMode;
  isActive: boolean;
  onPress: () => void;
  icon: React.ReactNode;
}

const PaymentTab: React.FC<PaymentTabProps> = ({ mode, isActive, onPress, icon }) => (
  <TouchableOpacity
    style={[styles.payTab, isActive && styles.payTabActive]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={{ opacity: isActive ? 1 : 0.6 }}>
      {React.cloneElement(icon as React.ReactElement, {
        color: isActive ? COLORS.rose : COLORS.inkMuted,
      })}
    </View>
    <Text style={[styles.payTabText, isActive && styles.payTabTextActive]}>
      {mode}
    </Text>
  </TouchableOpacity>
);

interface AdjustmentsSectionProps {
  gst: string;
  discount: string;
  amountPaid: string;
  paymentMode: PaymentMode;
  onGstChange: (v: string) => void;
  onDiscountChange: (v: string) => void;
  onAmountPaidChange: (v: string) => void;
  onPaymentModeChange: (mode: PaymentMode) => void;
  gstSublabel: string;
  discountSublabel: string;
  paidSublabel: string;
}

const PAYMENT_MODES: { mode: PaymentMode; icon: React.ReactElement }[] = [
  { mode: 'Cash', icon: <CashIcon size={13} /> },
  { mode: 'Card', icon: <CardTabIcon size={13} /> },
  { mode: 'UPI', icon: <UPIIcon size={13} /> },
  { mode: 'Bank', icon: <BankIcon size={13} /> },
];

export const AdjustmentsSection: React.FC<AdjustmentsSectionProps> = ({
  gst, discount, amountPaid, paymentMode,
  onGstChange, onDiscountChange, onAmountPaidChange, onPaymentModeChange,
  gstSublabel, discountSublabel, paidSublabel,
}) => {
  return (
    <>
      <Text style={styles.sectionLabel}>Adjustments</Text>
      <View style={styles.card}>
        {/* GST Row */}
        <AdjustmentRow
          iconBg={COLORS.amberLight}
          icon={<GSTIcon size={15} color={COLORS.amber} />}
          label="GST"
          sublabel={gstSublabel}
          inputValue={gst}
          onChangeText={onGstChange}
          placeholder="%"
        />

        {/* Discount Row */}
        <AdjustmentRow
          iconBg={COLORS.roseLight}
          icon={<GiftIcon size={15} color={COLORS.rose} />}
          label="Discount"
          sublabel={discountSublabel}
          inputValue={discount}
          onChangeText={onDiscountChange}
          placeholder="₹"
        />

        {/* Amount Paid Row */}
        <AdjustmentRow
          iconBg={COLORS.greenLight}
          icon={<DollarIcon size={15} color={COLORS.green} />}
          label="Amount paid"
          sublabel={paidSublabel}
          inputValue={amountPaid}
          onChangeText={onAmountPaidChange}
          placeholder="₹"
          isLast
        />

        {/* Payment Mode */}
        <View style={styles.payModeSection}>
          <View style={styles.fieldLeft}>
            <View style={[styles.fieldIcon, { backgroundColor: COLORS.blueLight }]}>
              <CreditCardIcon size={15} color={COLORS.blue} />
            </View>
            <Text style={styles.fieldLabel}>Payment mode</Text>
          </View>
          <View style={styles.payTabsRow}>
            {PAYMENT_MODES.map(({ mode, icon }) => (
              <PaymentTab
                key={mode}
                mode={mode}
                isActive={paymentMode === mode}
                onPress={() => onPaymentModeChange(mode)}
                icon={icon}
              />
            ))}
          </View>
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
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 13,
    gap: 12,
  },
  fieldRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSoft,
  },
  fieldLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  fieldIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  fieldLabel: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: COLORS.inkSoft,
  },
  fieldSublabel: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: COLORS.inkMuted,
    marginTop: 1,
  },
  fieldInput: {
    width: 100,
    height: 38,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: COLORS.surface2,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: COLORS.ink,
    textAlign: 'right',
    paddingHorizontal: 12,
    ...Platform.select({
      ios: {},
      android: { paddingVertical: 0 },
    }),
  },
  payModeSection: {
    paddingHorizontal: 18,
    paddingVertical: 13,
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderSoft,
  },
  payTabsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  payTab: {
    flex: 1,
    height: 36,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: COLORS.surface2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    flexDirection: 'row',
  },
  payTabActive: {
    backgroundColor: COLORS.roseLight,
    borderColor: COLORS.roseMuted,
  },
  payTabText: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.inkMuted,
  },
  payTabTextActive: {
    color: COLORS.rose,
    fontFamily: FONTS.semiBold,
  },
});

export default AdjustmentsSection;
