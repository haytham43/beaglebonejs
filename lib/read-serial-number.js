let fs = require('fs');
let Buffer = require('buffer').Buffer;

async function readSerialNumber () {
    fd = await fs.openSync("/sys/bus/i2c/devices/0-0050/eeprom", 'r');
    let buffer = new Buffer.alloc(16);
    let bytesRead = await fs.readSync(fd, buffer, 0, 12, 16);      // length = 12, position = 16
    return buffer.toString('utf-8', 0, bytesRead);
};

module.exports = readSerialNumber;
