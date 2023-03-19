const express = require('express');
const bodyParser = require('body-parser');
const deviceModule = require('aws-iot-device-sdk').device;
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (e.g., HTML, CSS, JS)

const client = deviceModule({
  keyPath: 'static/js/Certs/private.key',
  certPath: 'static/js/Certs/certificate.pem.crt',
  caPath: 'static/js/Certs/Root.pem',
  host: 'a2895s239cpskm-ats.iot.us-east-1.amazonaws.com',
  clientId: 'RandomKey',
});

client.on('connect', function() {
  console.log('Connected to AWS IoT');
  client.subscribe("home/helloworld");
});

app.post('/publish', (req, res) => {
    client.publish('pet/feeder', '1', { qos: 1 }, 
     (err) => {
      if (err) {
        console.error('Failed to publish message:', err);
        res.status(500).json({ error: 'Failed to publish message' });
      } else {
        console.log('Message published to topic');
        res.status(200).json({ message: 'Message published to topic' });
      }
    });
  });
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
  });