import time
import AWSIoTPythonSDK.MQTTLib as AWSIoTPyMQTT
import RPi.GPIO as GPIO

# Set up GPIO for servo control
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)

# Set up AWS IoT MQTT client
iot_client = AWSIoTPyMQTT.AWSIoTMQTTClient("my_rpi")
iot_client.configureEndpoint("YOUR_ENDPOINT", 8883)
iot_client.configureCredentials("rootCA.pem", "private.pem.key", "certificate.pem.crt")


# Custom MQTT message callback
def custom_callback(client, userdata, message):
    payload = message.payload.decode("utf-8")
    print("Received message:", payload)

    if payload == "1":
        print("Moving servo to 90 degrees")
        pwm = GPIO.PWM(11, 50)
        pwm.start(0)
        duty = 2.5 + 90 / 18
        GPIO.output(11, True)
        pwm.ChangeDutyCycle(duty)
        time.sleep(1)
        print("Moving servo back to start")
        duty = 2.5 + 0 / 18
        GPIO.output(11, True)
        pwm.ChangeDutyCycle(duty)
        time.sleep(1)
        pwm.stop()
    else:
        print("Invalid message, ignoring...")


# Connect to AWS IoT MQTT broker and subscribe to topic
iot_client.connect()
iot_client.subscribe("my_topic", 1, custom_callback)

# Wait for messages
while True:
    time.sleep(1)
