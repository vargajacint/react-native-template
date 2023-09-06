# React Native Starter template

This repository aims to be a template for bare React Native projects

## Installing

```bash
yarn
cd ios
bundle install # installing gems
bundle exec pod install # installing pods
```

## Running

### iOS

```bash
yarn ios
```

### Android

```bash
yarn android
```

## Setup

### Rename

In the initial phase, it is imperative to initiate the project renaming process and update the bundle identifier comprehensively throughout the project, encompassing the folder structure. To facilitate this task, please use the provided command-line interface (CLI) tool.

<details>
<summary>Following this, execute this command</summary>

```bash
npx react-native-rename "Dakai" -b "com.dakai.app"
```

</details>

### Environment variables

Please position your `.env.development`, `.env.production`, or `.env` file, containing your variables, within the root folder. Subsequently, ensure that you modify the `utils/env.d.ts` file to align with your environment variables.

_Note: Following the adjustment of your environment variables, it is imperative to restart your Metro server and clear the cache._

### Navigation

This project relies on [React Navigation](https://reactnavigation.org) and exclusively utilizes Native Navigators, a highly recommended practice. Each navigator is organized within its respective folder located in the `navigators` directory. Similarly, individual screens are organized into distinct folders within the `screens` directory. It is imperative to maintain a streamlined navigation hierarchy, striving to keep it as flat as possible.

### Constants

In the `constants` folder, you will find essential variables such as `ICON`, `SPACING`, `FONT` and `THEME`. These constants are configurable to align with your specific design and configuration requirements. Please adjust these values accordingly to suit your design and settings.

### Splash

This project relies on [React Native BootSplash](https://github.com/zoontek/react-native-bootsplash) for managing the splash screen. To customize the splash image, replace the existing `assets/images/logo.svg` file with your desired image, run the code above and rebuild the application.

<details>
<summary>Following this, execute this command</summary>

```bash
yarn react-native generate-bootsplash src/assets/images/logo.svg \
  --platforms=android,ios \
  --background=000000 \
  --logo-width=156 \
  --assets-output=src/assets/splash \
  --flavor=main
```

</details>

### Font

This project relies on [Oxygen font](https://fonts.google.com/specimen/Oxygen) designed by Vernon Adams. To customize fonts, replace the existing `assets/fonts/*` files with your desired fonts, run the code above.

<details>
<summary>Following this, execute this command</summary>

```bash
npx react-native-asset
```

</details>

### API

The preferred approach for retrieving data from the server involves the utilization of [SWR](https://swr.vercel.app), a powerful resource for managing data fetching. SWR incorporates a robust caching mechanism, bolstered by [MMKV](https://github.com/Tencent/MMKV) storage, to optimize data retrieval and management.

The Data Transfer Object (DTO) interfaces can be located within the `typings/DTOs.ts` file. Ideally, this file should be generated automatically, ensuring alignment with server interface specifications and preventing any potential interface discrepancies. This practice helps maintain consistency and reliability in data communication between the client and server.

### Auth

The primary objective of this project is not to provide an exhaustive authentication implementation, as authentication requirements can vary significantly across different Dakai projects. Instead, this project offers a standardized flow that seamlessly aligns with JWT-based authentication practices.

For a practical illustration of token-based authentication, including token refreshing and a comprehensive approach to handling errors, please refer to the following resource: [Token-Based Authentication Example](https://github.com/DakaiGroup/tiltt-customer-application/blob/a33e6d873957d9f8184c6d5f081eb0be0e5c5d61/src/hooks/useAPI.ts#L16).

## Release

### Proguard

This project utilizes Proguard as an obfuscation tool. Kindly remember to regularly update and maintain your `android/app/proguard-rules.pro` file.

## Updating

To ensure the continuous maintenance and currency of this project, I recommend diligently tracking the updates to the project's React Native version using the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/). This entails meticulous scrutiny of changes, version by version, line by line.

## Useful commands

<details>
<summary>Updating gems</summary>

```bash
cd ios
bundle update
```

</details>

<details>
<summary>Updating pods</summary>

```bash
cd ios
bundle exec pod install --repo-update
```

</details>

<details>
<summary>Reset Metro cache</summary>

```bash
yarn start --reset-cache
```

</details>

<details>
<summary>Cleaning Gradlew</summary>

```bash
cd android
./gradlew clean
```

</details>

<details>
<summary>iOS cleaning god mode</summary>

If it's not enough run the [clean-rn](https://github.com/mrousavy/clean-rn) CLI tool

```bash
rm -rf node_modules
rm -rf vendor
yarn
cd ios
rm -rf build
rm -rf Pods
rm -f Podfile.lock
```

</details>
