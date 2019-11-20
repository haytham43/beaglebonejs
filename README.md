# BeagleboneJS

A lightweight Node.js I/O library for the BeagleBone

## Why another I/O library for the BeagleBone?
There are many Node.js I/O libraries for the BeagleBone already, however, the most notable ones are:
- [beaglebone-io](https://www.npmjs.com/package/beaglebone-io): A plugin for the famous [Johnny-Five](http://johnny-five.io/) I/O framework
- [bonescript](http://beagleboard.org/Support/BoneScript): A library for the Beagle family line.

### The library needs to 
- run on all versions of Node.js (6.x -> 12.x)
- provide a single-shot ADC read
- support EEPROM read

While beaglebone-io ran perfectly on all tested versions, it lacked what I exactly wanted from the ADC. Only continuous mode is supported (analogRead). While BoneScript provided this functionality, I couldn't manage to install it successfully with the latest Node.js versions (12.x).

## Considerations
This library depends on the Linux IIO (Industrial I/O) subsystem. It's not present or enabled by default on all Beaglebone images and you may need to enable it. To test if enabled, check for the presence of the path `/sys/bus/iio/devices/iio\:device0`.

The Linux IIO subsystem is enabled by default in the latest Debian images from [beaglebone.org](https://beagleboard.org/latest-images).
