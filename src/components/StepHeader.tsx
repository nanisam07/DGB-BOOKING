import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft, CheckIcon } from './Icons';
import { COLORS, FONTS } from '../constants/theme';

interface Step {
  label: string;
  status: 'done' | 'active' | 'pending';
}

interface StepHeaderProps {
  onBack?: () => void;
}

const STEPS: Step[] = [
  { label: 'Event', status: 'done' },
  { label: 'Venue', status: 'done' },
  { label: 'Date & Time', status: 'done' },
  { label: 'Confirm', status: 'active' },
];

const StepCircle: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
  const isDone = step.status === 'done';
  const isActive = step.status === 'active';

  return (
    <View
      style={[
        styles.stepCircle,
        isDone && styles.stepCircleDone,
        isActive && styles.stepCircleActive,
        !isDone && !isActive && styles.stepCirclePending,
      ]}
    >
      {isDone ? (
        <CheckIcon size={13} color={COLORS.rose} strokeWidth={2.5} />
      ) : (
        <Text
          style={[
            styles.stepNumber,
            isActive && styles.stepNumberActive,
          ]}
        >
          {index + 1}
        </Text>
      )}
    </View>
  );
};

export const StepHeader: React.FC<StepHeaderProps> = ({ onBack }) => {
  return (
    <View style={styles.container}>
      {/* Nav Row */}
      <View style={styles.navRow}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
          <ChevronLeft size={16} color={COLORS.inkMuted} strokeWidth={2} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Add New Booking</Text>
      </View>

      {/* Step Indicators */}
      <View style={styles.stepsRow}>
        {STEPS.map((step, index) => (
          <View key={step.label} style={styles.stepItem}>
            {/* Connector line before (except first) */}
            {index > 0 && (
              <View
                style={[
                  styles.connector,
                  STEPS[index - 1].status === 'done' && styles.connectorDone,
                ]}
              />
            )}
            <StepCircle step={step} index={index} />
            <Text
              style={[
                styles.stepLabel,
                step.status === 'active' && styles.stepLabelActive,
                step.status === 'done' && styles.stepLabelDone,
              ]}
            >
              {step.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    paddingTop: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginRight: 12,
  },
  backText: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.inkMuted,
  },
  title: {
    fontSize: 17,
    fontFamily: FONTS.serif,
    color: COLORS.ink,
  },
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 16,
    position: 'relative',
  },
  stepItem: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  connector: {
    position: 'absolute',
    top: 14,
    right: '50%',
    left: '-50%',
    height: 2,
    backgroundColor: COLORS.border,
    zIndex: 0,
  },
  connectorDone: {
    backgroundColor: COLORS.roseMuted,
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    marginBottom: 5,
  },
  stepCircleDone: {
    backgroundColor: COLORS.roseMuted,
  },
  stepCircleActive: {
    backgroundColor: COLORS.rose,
    shadowColor: COLORS.rose,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  stepCirclePending: {
    backgroundColor: COLORS.surface3,
  },
  stepNumber: {
    fontSize: 11,
    fontFamily: FONTS.semiBold,
    color: COLORS.inkMuted,
  },
  stepNumberActive: {
    color: COLORS.surface,
  },
  stepLabel: {
    fontSize: 10,
    fontFamily: FONTS.medium,
    color: COLORS.inkMuted,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  stepLabelActive: {
    color: COLORS.rose,
    fontFamily: FONTS.semiBold,
  },
  stepLabelDone: {
    color: COLORS.inkSoft,
  },
});

export default StepHeader;
