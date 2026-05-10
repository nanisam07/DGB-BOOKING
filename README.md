# DGB Booking App — Confirm Booking Screen

A pixel-perfect React Native mobile UI built with **Expo + NativeWind**, replicating a premium luxury event booking experience.

---

## 📁 Folder Structure

```
DGBBookingApp/
├── App.tsx                          # Entry point, font loading
├── app.json                         # Expo config
├── babel.config.js                  # NativeWind Babel config
├── metro.config.js                  # NativeWind Metro config
├── tailwind.config.js               # Tailwind / NativeWind config
├── tsconfig.json                    # TypeScript config
├── global.css                       # Tailwind base CSS
├── package.json
└── src/
    ├── constants/
    │   └── theme.ts                 # Colors, fonts, booking data constants
    ├── hooks/
    │   └── useBookingCalculator.ts  # All financial calc logic (GST, discount, balance)
    ├── screens/
    │   └── ConfirmBookingScreen.tsx # Main screen — composes all sections
    └── components/
        ├── Icons.tsx                # All SVG icons (react-native-svg)
        ├── StepHeader.tsx           # Back button + 4-step progress indicator
        ├── HeroBookingCard.tsx      # Rose gradient hero card
        ├── PaymentBreakdown.tsx     # Venue + Services + Subtotal card
        ├── AdjustmentsSection.tsx   # GST / Discount / Paid / Payment mode tabs
        ├── TotalDueBanner.tsx       # Dark navy total + balance pill
        └── ConfirmButton.tsx        # Fixed bottom CTA with success animation
```

---

## 🚀 Installation & Setup

### 1. Create Expo project (if starting fresh)

```bash
npx create-expo-app DGBBookingApp --template blank-typescript
cd DGBBookingApp
```

### 2. Install all dependencies

```bash
# Core
npx expo install expo-font expo-linear-gradient expo-status-bar

# Fonts
npx expo install @expo-google-fonts/dm-sans @expo-google-fonts/playfair-display

# SVG
npx expo install react-native-svg

# Animations
npx expo install react-native-reanimated

# NativeWind (Tailwind for React Native)
npm install nativewind@^4.0.1
npm install --save-dev tailwindcss@^3.4.0
```

### 3. Copy source files

Copy all files from this repo into your project maintaining the folder structure above.

### 4. Configure Babel

Ensure `babel.config.js` contains:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

### 5. Configure Metro

Ensure `metro.config.js` contains:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: "./global.css" });
```

### 6. Run the app

```bash
npx expo start
```

Press `i` for iOS simulator, `a` for Android emulator, or scan QR code with Expo Go.

---

## 🎨 Design System

| Token         | Value        |
|---------------|--------------|
| Rose Primary  | `#E8365D`    |
| Rose Light    | `#ffeef3`    |
| Rose Muted    | `#f9c9d6`    |
| Ink (Navy)    | `#1a1a2e`    |
| Ink Soft      | `#4a4a6a`    |
| Ink Muted     | `#9898b0`    |
| Surface       | `#ffffff`    |
| Surface 2     | `#f7f7fb`    |
| Background    | `#f0f0f8`    |
| Green         | `#1DAA6B`    |
| Amber         | `#F59B00`    |
| Blue          | `#1A73E8`    |

**Fonts:** DM Sans (400/500/600/700) + Playfair Display (500/600 + Italic)

---

## ⚙️ Features & Functionality

| Feature | Description |
|--------|-------------|
| Step Progress | 4-step indicator, completed steps show check icons |
| Hero Card | Rose gradient with booking ID badge, date/time/location chips, client info |
| GST Input | Dynamically calculates GST amount and updates total |
| Discount Input | Deducts from total, shows savings percentage |
| Amount Paid | Updates balance shown in pill |
| Payment Mode | Cash / Card / UPI / Bank tab switcher |
| Total Banner | Dark navy banner with live-updating total + balance pill |
| Confirm Button | Animates to green "Booking Confirmed!" then resets after 2.5s |
| Keyboard Avoidance | `KeyboardAvoidingView` for proper input handling |

---

## 📦 Complete Dependencies

```json
{
  "expo": "~51.0.0",
  "expo-font": "~12.0.10",
  "expo-status-bar": "~1.12.1",
  "expo-linear-gradient": "~13.0.2",
  "@expo-google-fonts/dm-sans": "latest",
  "@expo-google-fonts/playfair-display": "latest",
  "react-native-svg": "15.2.0",
  "react-native-reanimated": "~3.10.1",
  "nativewind": "^4.0.1",
  "tailwindcss": "^3.4.0"
}
```
