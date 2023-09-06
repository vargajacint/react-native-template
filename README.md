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

### Navigation

This project relies on [React Navigation](https://reactnavigation.org) and exclusively utilizes Native Navigators, a highly recommended practice. Each navigator is organized within its respective folder located in the `navigators` directory. Similarly, individual screens are organized into distinct folders within the `screens` directory. It is imperative to maintain a streamlined navigation hierarchy, striving to keep it as flat as possible.

### Constants

In the `constants` folder, you will find essential variables such as `ICON`, `SPACING`, `FONT`, and `THEME`. These constants are configurable to align with your specific design and configuration requirements. Please adjust these values accordingly to suit your design and settings.

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
