import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { StepHeader } from '../components/StepHeader';
import { HeroBookingCard } from '../components/HeroBookingCard';
import { PaymentBreakdown } from '../components/PaymentBreakdown';
import { AdjustmentsSection } from '../components/AdjustmentsSection';
import { TotalDueBanner } from '../components/TotalDueBanner';
import { ConfirmButton } from '../components/ConfirmButton';
import { useBookingCalculator } from '../hooks/useBookingCalculator';
import { COLORS } from '../constants/theme';

export const ConfirmBookingScreen: React.FC = () => {
  const {
    gst, setGst,
    discount, setDiscount,
    amountPaid, setAmountPaid,
    paymentMode, setPaymentMode,
    subtotal,
    totalDue,
    balance,
    gstSublabel,
    discountSublabel,
    paidSublabel,
    noteText,
    noteColor,
  } = useBookingCalculator();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.surface} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <View style={styles.container}>
          {/* Step Header — fixed at top */}
          <StepHeader onBack={() => console.log('Back pressed')} />

          {/* Scrollable Content */}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Hero Card */}
            <HeroBookingCard />

            {/* Payment Breakdown */}
            <PaymentBreakdown subtotal={subtotal} />

            {/* Adjustments */}
            <AdjustmentsSection
              gst={gst}
              discount={discount}
              amountPaid={amountPaid}
              paymentMode={paymentMode}
              onGstChange={setGst}
              onDiscountChange={setDiscount}
              onAmountPaidChange={setAmountPaid}
              onPaymentModeChange={setPaymentMode}
              gstSublabel={gstSublabel}
              discountSublabel={discountSublabel}
              paidSublabel={paidSublabel}
            />

            {/* Total Due Banner */}
            <TotalDueBanner
              totalDue={totalDue}
              balance={balance}
              noteText={noteText}
              noteColor={noteColor}
            />

            {/* Bottom spacer for fixed button */}
            <View style={styles.bottomSpacer} />
          </ScrollView>

          {/* Fixed Bottom CTA */}
          <ConfirmButton onPress={() => console.log('Booking confirmed!')} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  bottomSpacer: {
    height: 100,
  },
});

export default ConfirmBookingScreen;
