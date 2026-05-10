import { useState, useMemo } from 'react';
import { BOOKING_DATA } from '../constants/theme';
import type { PaymentMode } from '../components/AdjustmentsSection';

const COLORS_GREEN = '#5DCAA5';
const NOTE_MUTED = 'rgba(255,255,255,0.45)';

const fmt = (n: number) =>
  '₹' + Math.max(0, Math.round(n)).toLocaleString('en-IN');

export const useBookingCalculator = () => {
  const subtotal = BOOKING_DATA.venueCost + BOOKING_DATA.servicesCost; // 277000

  const [gst, setGst] = useState('');
  const [discount, setDiscount] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [paymentMode, setPaymentMode] = useState<PaymentMode>('Cash');

  const calculations = useMemo(() => {
    const gstPct = parseFloat(gst) || 0;
    const discountAmt = parseFloat(discount) || 0;
    const paid = parseFloat(amountPaid) || 0;

    const gstAmt = subtotal * gstPct / 100;
    const afterGST = subtotal + gstAmt;
    const totalDue = Math.max(0, afterGST - discountAmt);
    const balance = Math.max(0, totalDue - paid);

    const gstSublabel = gstPct > 0
      ? `${fmt(gstAmt)} (${gstPct}% on ${fmt(subtotal)})`
      : `₹0 on ${fmt(subtotal)}`;

    const discountSublabel = discountAmt > 0
      ? `${fmt(discountAmt)} off — saving ${afterGST > 0 ? ((discountAmt / afterGST) * 100).toFixed(1) : 0}%`
      : 'No discount applied';

    const paidSublabel = `Balance: ${fmt(totalDue - paid)}`;

    let noteText: string;
    let noteColor: string;

    if (balance === 0) {
      noteText = 'Fully paid ✓';
      noteColor = COLORS_GREEN;
    } else if (paid > 0) {
      noteText = `${fmt(paid)} received · ${fmt(balance)} pending`;
      noteColor = NOTE_MUTED;
    } else {
      noteText = 'Full amount pending';
      noteColor = NOTE_MUTED;
    }

    return {
      subtotal,
      totalDue,
      balance,
      gstSublabel,
      discountSublabel,
      paidSublabel,
      noteText,
      noteColor,
    };
  }, [gst, discount, amountPaid, subtotal]);

  return {
    gst, setGst,
    discount, setDiscount,
    amountPaid, setAmountPaid,
    paymentMode, setPaymentMode,
    ...calculations,
  };
};
