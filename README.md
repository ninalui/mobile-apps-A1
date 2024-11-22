# Number Guessing Game App

A simple number guessing game built with React Native and Expo.

<div align="center">
  <img src="https://github.com/user-attachments/assets/4c4e51e3-9cd7-48b4-b9c3-4cc480c36e36" width="300" />
  <img src="https://github.com/user-attachments/assets/5b00973a-04e7-428c-9a2d-d9b09215b205" width="300" />
</div>

### Features

- User registration with name, email, and phone number.
- Number guessing game with hints, attempt counter, and timer (user has 4 attempts and 1 minute).
- Game results and game over screens.
- Game over screen shows an image corresponding to the number generated from Picsum.
- The random number generated is a multiple of the last digit of the user's phone number, between 1 and 100 inclusive.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ninalui/number-guessing-game-app.git
    cd number-guessing-game
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
### Usage

1. Start the development server:
    ```sh
    npx expo start
    ```

2. Use the Expo Go app to run the project:
    - Download the Expo Go app from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
    - Open the Expo Go app on your mobile device.
    - Scan the QR code displayed in the terminal or on the web page that opens after running `npx expo start`.
  
### Dependencies

- [Expo](https://expo.dev/) - "~51.0.28"
- [Expo Checkbox](https://docs.expo.dev/versions/latest/sdk/checkbox/) - "~3.0.0"
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) - "~13.0.2"
- [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar/) - "~2.0.0"
- [React](https://reactjs.org/) - "18.2.0"
- [React Native](https://reactnative.dev/) - "0.76.2"
---
This mobile app was created as part of coursework with CS5520 Mobile Apps Development at Northeastern University.
