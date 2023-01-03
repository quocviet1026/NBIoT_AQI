"use strict"

var mqtt                  = require('mqtt');
var Config                = require('./config.js');

/*--------------------------------------------------------Connect to MQTT LOCAL----------------------------------------------------------------------------*/

var optionsLocal = {
  port: Config.MQTT_BROKER_LOCAL_PORT,
  host: Config.MQTT_BROKER_LOCAL_ADDRESS,
};

var mqttClient =  mqtt.connect(optionsLocal);

mqttClient.on('connect', function() {

  mqttClient.subscribe(Config.MQTT_TOPIC_AGENT_TO_APP, {qos: 2}, function(err) {
    if (!err) {
      console.log('--->>>Application MQTT Subscribe success<<---');
      
    } else {
      console.log('--->>>Application MQTT Subscribe error <<<---: ' + err);
    }
  });
});

mqttClient.on('error', function() {
    console.log('--->>>Application MQTT on error <<<---: ' + err);
});


module.exports = mqttClient;



