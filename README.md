# Pet-feeder

Hardware:
- Raspberry Pi 4
- Servo motor 
- Physical container to store pet food

Software:
- AWS IoT thing
- Raspberry Pi - Backend code for subscribing to IoT topic and controlling Servo motor via Raspberry Pi Pins.
- AWS EC2 - Frontend code for publishing to IoT topic by clicking a button on a webpage.

Architecture:
- Apache Server on EC2.
- Code stored on GitHub.
