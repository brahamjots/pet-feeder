# Welcome to the Pet-feeder Readme!

The Pet-feeder is a system that allows you to remotely feed your pet using a Raspberry Pi 4 and an upside-down plastic bottle to store pet food. The system is controlled by a servo motor connected to a plastic lid at the mouth of the plastic bottle, which is connected to GPIO pin 18 on the Raspberry Pi. The system is also connected to AWS IoT Thing, which allows you to publish to an IoT topic using a frontend code on an AWS EC2 instance.

To get started with the Pet-feeder, you will need to follow the instructions below.

## Hardware:
- Raspberry Pi 4
- Upside-down plastic bottle to store pet food
- Servo motor connected to a plastic lid at the mouth of the plastic bottle.
- GPIO pin 18 is being used to control the motor.

## Software:
- AWS IoT thing
- Raspberry Pi - Backend code for subscribing to IoT topic and controlling Servo motor via Raspberry Pi Pins.
- AWS EC2 - Frontend code for publishing to IoT topic by clicking a button on a webpage.

## Architecture:
- Expres Server on EC2.
- To keep the server.js program (i.e. webpage) running as a background process, I used the statement, "nohup node server.js &".
- To keep the petfeeder.py program (i.e. backend) running as a background process, I used the statement, "nohup python3 petfeeder.py &".

## Instructions:
- On Raspberry Pi, open a terminal and enter the following commands:
  cd Desktop
  nohup python3 petfeeder.py &
- On EC2 terminal (SSH), enter the following commands: 
  sudo su
  cd /root/expres
  nohup node server.js &
  
### The program should be running now.
### To access the webpage, enter the public IP address of the ec2 server followed by the port number 3000. For example, 192.168.23.32:3000
### Make sure to use http, not https.
 
### When the button is clicked, the motor activates and pet-food drops into the bowl.
