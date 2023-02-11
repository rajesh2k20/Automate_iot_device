// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
var awsIot = require('aws-iot-device-sdk');



const express= require("express");

const path=require("path");

const app= express();






app.use(express.static(path.join(__dirname, 'public')));

const server= app.listen(3000, function(){

  console.log("server is connected");

})

var device = awsIot.device({
  keyPath: 'privatekey.key',
  certPath: 'certificate.crt',
   caPath: 'AmazonRootCA1.pem',
 clientId: 'client1',
    host: 'a3k1cz6w2xtu3h-ats.iot.us-east-1.amazonaws.com',
});


// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.

device.on('connect', function() {
   console.log('connected to AWS ');
   // device.subscribe('topic_1');
   // device.publish('esp32/sub', JSON.stringify({ Led: 1 }));
 });

device.on('message', function(topic, payload) {
   console.log('message', topic, payload.toString());
});



let io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`)
    // Recieve event
    socket.on('command', (data) => {
        
      device.publish('', JSON.stringify({ Led: data }));

      
    })



    
})




// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.


