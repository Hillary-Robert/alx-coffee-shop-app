# alx-coffee-shop-app


ALX Coffee Shop (Expo + React Native)
A simple coffee shop app made with Expo Router, React Native, and NativeWind (Tailwind).
It has a Home screen with a 2-column grid, a Detail page, a Cart screen, a Favorites page (static), and an Alerts page.
Features
Home
Location, search, and a promo banner


Category chips (All Coffee, Latte, Americano, etc.)


2 cards per row (uses ScrollView, not FlatList)


Tap a card to open the detail page


Detail
Big image, rating, and “Read more” description


Size picker (S / M / L)


Buy Now button → opens Cart with item info


Cart
Deliver / Pick Up toggle


Address block and quick actions


Quantity stepper, discount line, total price


Favorites
Static list (change IDs in code to choose items)


Alerts
Simple notifications grouped by Today / Earlier (Yet to be worked on as at the time of this commit)


Tech
Expo + React Native


Expo Router (file-based navigation)


NativeWind (Tailwind classes in RN)


react-native-safe-area-context


@expo/vector-icons



Folder Structure
app/
  _layout.tsx                 # Root stack + SafeAreaProvider
  (tabs)/                     # Bottom tabs group
    _layout.tsx               # Tabs (Home, Favorite, Cart, Alert)
    favorite.tsx
    cart.tsx
    alert.tsx
    (home)/                   # Home tab stack
      _layout.tsx             # Stack (index + coffee/[id])
      index.tsx               # Home screen (grid + chips)
      coffee/
        [id].tsx              # Dynamic detail page
components/
  header.tsx
  coffeeCard.tsx
  CategoryChips.tsx
interfaces.ts
samples.ts (or data/coffee.ts)
styles/
  global.css
assets/
  images + icons

Note: Route group names like (tabs) and (home) are not part of the URL.
 When navigating, do not include them (e.g., use /coffee/[id]).
Getting Started
Install
# install dependencies
yarn
# or
npm install

# align native packages with your Expo SDK
npx expo install

Run
# start the dev server (clears cache on first run)
npx expo start -c

Press i for iOS, a for Android, or scan the QR with Expo Go.

Commands
# start dev server
npx expo start

# start with cache clear
npx expo start -c

Credits
Figma design inspiration:
 Coffee Shop Mobile App Design — Community

