# Teleguide

Progressive Web App and Android Wear OS app to control LEGO Power Functions via BLE with your smartphone or smartwatch

## Requirements

- A device running a modern browser with Web Bluetooth support and a gyroscope.
- Arduino compatible board
- BLE module
- IR LED
- LEGO Robot with Power Functions receiver

## Getting Started

You can use the app [directly from your browser]() or you can download the soon available app from Google Play on your Wear OS device!

You'll need a gateway to forward the commands to the Power Functions receiver. Follow these steps to create it yourself:
- Wire your components according to the schematic in the [Arduino Sketch](arduino/teleguide/teleguide.ino)
- Flash the Arduino sketch (It needs the LEGOPowerFunctions library. You can download it directly from the Arduino IDE)
- Have fun!

## Libraries

- [LEGOPowerFunctions](https://github.com/schultzy51/LEGOPowerFunctions)

## Authors

- **Ettore Forigo** - [Hexwell](https://github.com/Hexwell)
