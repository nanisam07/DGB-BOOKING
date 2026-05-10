import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon } from './Icons';
import { COLORS, FONTS, BOOKING_DATA } from '../constants/theme';

interface HeroChipProps {
  icon: React.ReactNode;
  label: string;
}

const HeroChip: React.FC<HeroChipProps> = ({ icon, label }) => (
  <View style={styles.chip}>
    {icon}
    <Text style={styles.chipText}>{label}</Text>
  </View>
);

export const HeroBookingCard: React.FC = () => {
  return (
    <View style={styles.card}>
      {/* Decorative circle top-right */}
      <View style={styles.decorCircleTop} />
      {/* Decorative circle bottom-left */}
      <View style={styles.decorCircleBottom} />

      {/* Top Row */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.eyebrow}>Booking confirmation</Text>
          <Text style={styles.venueName}>{BOOKING_DATA.eventName}</Text>
        </View>
        <View style={styles.bookingIdBadge}>
          <Text style={styles.bookingIdText}>{BOOKING_DATA.bookingId}</Text>
        </View>
      </View>

      {/* Chips Row */}
      <View style={styles.chipsRow}>
        <HeroChip
          icon={<CalendarIcon size={12} />}
          label={BOOKING_DATA.date}
        />
        <HeroChip
          icon={<ClockIcon size={12} />}
          label={BOOKING_DATA.time}
        />
        <HeroChip
          icon={<MapPinIcon size={12} />}
          label={BOOKING_DATA.location}
        />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Client Row */}
      <View style={styles.clientRow}>
        <View>
          <Text style={styles.clientLabel}>Client</Text>
          <Text style={styles.clientName}>{BOOKING_DATA.clientName}</Text>
        </View>
        <View style={styles.clientPhone}>
          <PhoneIcon size={12} />
          <Text style={styles.clientPhoneText}>{BOOKING_DATA.clientPhone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: COLORS.rose,
    borderRadius: 20,
    padding: 20,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: COLORS.rose,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  decorCircleTop: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  decorCircleBottom: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  eyebrow: {
    fontSize: 10,
    fontFamily: FONTS.semiBold,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 3,
  },
  venueName: {
    fontFamily: FONTS.serif,
    fontSize: 22,
    color: 'white',
    lineHeight: 26,
  },
  bookingIdBadge: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bookingIdText: {
    fontSize: 11,
    fontFamily: FONTS.semiBold,
    color: 'white',
    letterSpacing: 0.5,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 2,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  chipText: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: 'rgba(255,255,255,0.92)',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 14,
  },
  clientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clientLabel: {
    fontSize: 10,
    fontFamily: FONTS.semiBold,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  clientName: {
    fontSize: 15,
    fontFamily: FONTS.semiBold,
    color: 'white',
  },
  clientPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  clientPhoneText: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: 'rgba(255,255,255,0.75)',
  },
});

export default HeroBookingCard;
