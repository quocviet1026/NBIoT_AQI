const config      = require('./config.js');
const mqttClient  = require('./mqtt.js');
const fs          = require('fs');
var   events = require('events');
var   eventEmitter = new events.EventEmitter();


/*
TELEMETRY:
{
  "TypePacket": "DATA",
  "DeviceIDEp": "<ID Device>",
  "TypeDevice": "Env_AQI",
  "Data": {
	"Temp": "<value>",
	"Humi": "<value>",
	"Press": "<value>",
	"CO": "<value>",
	"NO2": "<value>",
	"SO2": "<value>",
	"O3": "<value>",
	"PM2_5": "<value>",
	"PM10": "<value>"
  }
}

CONFIG:
{
  "TypePacket": "CONF",
  "DeviceIDEp": "<ID Device>",
  "TypeDevice": "Env_AQI",
  "Data": {
	"DataUT": "<value>"
  }
}
*/

/*Global Variable */
var deviceID = {};
var intervalID = {};
var defaultUT = config.DefaultUT;

/*Define Topic to Receive and Send message */
var topicSendTelemetryToAgent  		          = config.MQTT_TOPIC_APP_TO_AGENT_TELEMETRY; 	   //Topic to Send message Telemetry to Agent
var topicReceiveMessageConfigFromAgent      = config.MQTT_TOPIC_AGENT_TO_APP;        //Topic Receive Message Config From Agent

/*******************************Handle Message MQTT*********************************/
mqttClient.on('message', function(topic, message) {

    try {
      var messageParsed = JSON.parse(message);
  
      eventEmitter.emit(topic, messageParsed);
    } catch (e) {
      console.log('\n\n\nMessage from Server error: ' + e);
    }
});

function sendMessageMqtt(messageToSend, topic) {
    try {
      mqttClient.publish(topic, JSON.stringify(messageToSend), {qos: 0}, function(e) {
        
      });
    } catch (e) {
      console.log('Application Error attempting to send message : ' + 'error: ' + e);
    }  
}
/*************************************************************************************/

try {
  var dataRead = fs.readFileSync('/home/pi/NB_IoT/application/deviceID.txt', 'utf8');
  deviceID = dataRead;
  console.log('\n\n\nDevice ID: ',deviceID);

} catch (err) {
  console.error(err);
}

/********************************Random Data******************************************/
function genRandomData(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/******************************* Gen Random Data******************************************/
function sendDataDefault() {
  console.log('\n\n\n---------------->>> Send Data Default <<<----------------------');
  var objTelemetry = {};
  objTelemetry.TypePacket = "DATA";
  objTelemetry.DeviceIDEp = deviceID;
  objTelemetry.TypeDevice = "Env_AQI";
  objTelemetry.Data = {};
  objTelemetry.Data.Temp = "25";
  objTelemetry.Data.Humi = "80";
  objTelemetry.Data.Press = "550";
  objTelemetry.Data.CO = "150";
  objTelemetry.Data.NO2 = "75";
  objTelemetry.Data.SO2 = "75";
  objTelemetry.Data.O3 = "50";
  objTelemetry.Data.PM2_5 = "500";
  objTelemetry.Data.PM10 = "500";

  sendMessageMqtt( objTelemetry, topicSendTelemetryToAgent );
}

function processData() {
/*
TELEMETRY:
{
  "TypePacket": "DATA",
  "DeviceIDEp": "<ID Device>",
  "TypeDevice": "Env_AQI",
  "Data": {
	"Temp": "<value>",
	"Humi": "<value>",
	"Press": "<value>",
	"CO": "<value>",
	"NO2": "<value>",
	"SO2": "<value>",
	"O3": "<value>",
	"PM2_5": "<value>",
	"PM10": "<value>"
}
*/
  var Temp = new String ( genRandomData( 0, 100 ));//0-100 oC
  var Humi = new String ( genRandomData( 0, 100 ));//0-100%
  var Press = new String ( genRandomData( 300, 1100 ));//300 ~ 1100hPa
  var CO = new String ( genRandomData( 0, 300 ));//0-300ppm
  var NO2 = new String ( genRandomData( 0, 150 ));//0-150ppm
  var SO2 = new String ( genRandomData( 0, 20 ));//0-150ppm
  var O3 = new String ( genRandomData( 0, 100 ));//0-100ppm
  var PM2_5 = new String ( genRandomData( 0, 1000 ));//0-1000 ug/m3
  var PM10 = new String ( genRandomData( 0, 1000 ));//0-1000 ug/m3

  var objTelemetry = {};
  objTelemetry.TypePacket = "DATA";
  objTelemetry.DeviceIDEp = deviceID;
  objTelemetry.TypeDevice = "Env_AQI";
  objTelemetry.Data = {};
  objTelemetry.Data.Temp = Temp;
  objTelemetry.Data.Humi = Humi;
  objTelemetry.Data.Press = Press;
  objTelemetry.Data.CO = CO;
  objTelemetry.Data.NO2 = NO2;
  objTelemetry.Data.SO2 = SO2;
  objTelemetry.Data.O3 = O3;
  objTelemetry.Data.PM2_5 = PM2_5;
  objTelemetry.Data.PM10 = PM10;

  sendMessageMqtt( objTelemetry, topicSendTelemetryToAgent );
}

/*******************************Handle Application************************************/
intervalID = setInterval( processData, defaultUT);

eventEmitter.on(topicReceiveMessageConfigFromAgent, function(messageParsed) {
/* CONFIG:
{
  "TypePacket": "CONF",
  "DeviceIDEp": "<ID Device>",
  "TypeDevice": "Env_AQI",
  "Data": {
	"DataUT": "<value>"
  }
}
*/
  console.log('\n\n\nmessage from SERVER: ',messageParsed);
  var objMessage = messageParsed;
  var deviceIDEp = objMessage.DeviceIDEp;

  var dataUT = Number ( objMessage.Data.DataUT );

  clearInterval(intervalID);
  if ( dataUT >= defaultUT ) {
    intervalID = setInterval( processData, dataUT);
  } else {
    intervalID = setInterval( processData, defaultUT);
  }
  
//   if ( deviceID === deviceIDEp ) {
//     var dataUT = Number ( objMessage.Data.DataUT );

//     clearInterval(intervalID);
//     if ( dataUT >= defaultUT ){
//       intervalID = setInterval( processData, dataUT);
//     } else {
//       intervalID = setInterval( processData, defaultUT);
//     }
    
//   } else {
//     ;
//   }
});
/*************************************************************************************/