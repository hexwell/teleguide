/*
 * AUTHOR: Ettore Forigo (Hexwell | ettore.forigo<at>gmail.com)
 * 
 * HARDWARE:
 *   - BLE module on serial
 *   - IR LED on pin 2
*/

#include "legopowerfunctions.h"


#define IR_PIN 2

#define SERIAL_BAUDRATE 115200
#define CMD_SIZE 4

#define PF_LEVELS 7
#define BWDS_MIN (PWM_REV1 + 1)


LEGOPowerFunctions lego(IR_PIN);


void setup() {
  Serial.begin(SERIAL_BAUDRATE);
}

void loop() {}

void serialEvent(){
  byte cmd[CMD_SIZE];
  size_t read_bytes = Serial.readBytes(cmd, sizeof(cmd));

  if (read_bytes != sizeof(cmd)) return;

  int8_t pitch, roll, channel;
  pitch = cmd[1];
  roll = cmd[2];
  channel = cmd[3];

  if (!(CH1 <= channel && channel <= CH4)) return;

  roll = -roll;

  int right, left;

  if (pitch) {
    right = constrain(pitch * (roll + PF_LEVELS) / PF_LEVELS, -PF_LEVELS, PF_LEVELS);
    left = -constrain(pitch * abs(roll - PF_LEVELS) / PF_LEVELS, -PF_LEVELS, PF_LEVELS);

  } else
    right = left = constrain(roll, -PF_LEVELS, PF_LEVELS);

  // send
  // (right and left values: invert the scale if negative value -> going backwards (dictated by lib, see lib's docs.))
  lego.ComboPWM(right < 0 ? BWDS_MIN + right : right, left < 0 ? BWDS_MIN + left : left, channel);
}
