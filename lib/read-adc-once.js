let fs = require('fs');
let path = require('path');

const ADC_PATH = '/sys/bus/iio/devices/iio\:device0'

const PINS = {
    'A0': path.join(ADC_PATH, 'in_voltage0_raw'),
    'A1': path.join(ADC_PATH, 'in_voltage1_raw'),
    'A2': path.join(ADC_PATH, 'in_voltage2_raw'),
    'A3': path.join(ADC_PATH, 'in_voltage3_raw'),
    'A4': path.join(ADC_PATH, 'in_voltage4_raw'),
    'A5': path.join(ADC_PATH, 'in_voltage5_raw'),
    'A6': path.join(ADC_PATH, 'in_voltage6_raw'),
    'A7': path.join(ADC_PATH, 'in_voltage7_raw')
};

async function readAdcOnce (pin) {
    return new Promise((resolve, reject) => {
        if (!PINS.hasOwnProperty(pin)){
            reject(new Error(`Invalid pin ${pin}`))
        }

        let pinPath = PINS[pin];
        let data;
        try {
            data = fs.readFileSync(pinPath, 'utf8')
        } catch(err) {
            reject(err);
        }
        resolve(Number(data));
    });
}

module.exports = readAdcOnce;