const config = require('./config.js');
const mqttClient = require('./mqtt.js');
const fs = require('fs');
const schedule = require('node-schedule');
var events = require('events');
var eventEmitter = new events.EventEmitter();


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
var intervalOneHour = {};

/*Define Topic to Receive and Send message */
var topicSendTelemetryToAgent = config.MQTT_TOPIC_APP_TO_AGENT_TELEMETRY; 	   //Topic to Send message Telemetry to Agent
var topicReceiveMessageConfigFromAgent = config.MQTT_TOPIC_AGENT_TO_APP;        //Topic Receive Message Config From Agent

/*******************************Handle Message MQTT*********************************/
mqttClient.on('message', function (topic, message) {

  try {
    var messageParsed = JSON.parse(message);

    eventEmitter.emit(topic, messageParsed);
  } catch (e) {
    console.log('\n\n\nMessage from Server error: ' + e);
  }
});

function sendMessageMqtt(messageToSend, topic) {
  try {
    mqttClient.publish(topic, JSON.stringify(messageToSend), { qos: 0 }, function (e) {

    });
  } catch (e) {
    console.log('Application Error attempting to send message : ' + 'error: ' + e);
  }
}
/*************************************************************************************/

try {
  var dataRead = fs.readFileSync('/home/pi/NB_IoT/application/deviceID.txt', 'utf8');
  deviceID = dataRead;
  console.log('\n\n\nDevice ID: ', deviceID);

} catch (err) {
  console.error(err);
}

/********************************Random Data******************************************/
function genRandomData(min, max) {
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

  sendMessageMqtt(objTelemetry, topicSendTelemetryToAgent);
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

  if (config.AQIConditionGood) {
    var Temp = new String(genRandomData(config.GoodAtmosphere.Temp[0], config.GoodAtmosphere.Temp[1]));
    var Humi = new String(genRandomData(config.GoodAtmosphere.Humi[0], config.GoodAtmosphere.Humi[1]));
    var Press = new String(genRandomData(config.GoodAtmosphere.Press[0], config.GoodAtmosphere.Press[1]));
    var CO = new String(genRandomData(config.GoodAtmosphere.CO[0], config.GoodAtmosphere.CO[1]));
    var NO2 = new String(genRandomData(config.GoodAtmosphere.NO2[0], config.GoodAtmosphere.NO2[1]));
    var SO2 = new String(genRandomData(config.GoodAtmosphere.SO2[0], config.GoodAtmosphere.SO2[1]));
    var O3 = new String(genRandomData(config.GoodAtmosphere.O3[0], config.GoodAtmosphere.O3[1]));
    var PM2_5 = new String(genRandomData(config.GoodAtmosphere.PM2_5[0], config.GoodAtmosphere.PM2_5[1]));
    var PM10 = new String(genRandomData(config.GoodAtmosphere.PM10[0], config.GoodAtmosphere.PM10[1]));
  } else {
    var Temp = new String(genRandomData(config.BadAtmosphere.Temp[0], config.BadAtmosphere.Temp[1]));
    var Humi = new String(genRandomData(config.BadAtmosphere.Humi[0], config.BadAtmosphere.Humi[1]));
    var Press = new String(genRandomData(config.BadAtmosphere.Press[0], config.BadAtmosphere.Press[1]));
    var CO = new String(genRandomData(config.BadAtmosphere.CO[0], config.BadAtmosphere.CO[1]));
    var NO2 = new String(genRandomData(config.BadAtmosphere.NO2[0], config.BadAtmosphere.NO2[1]));
    var SO2 = new String(genRandomData(config.BadAtmosphere.SO2[0], config.BadAtmosphere.SO2[1]));
    var O3 = new String(genRandomData(config.BadAtmosphere.O3[0], config.BadAtmosphere.O3[1]));
    var PM2_5 = new String(genRandomData(config.BadAtmosphere.PM2_5[0], config.BadAtmosphere.PM2_5[1]));
    var PM10 = new String(genRandomData(config.BadAtmosphere.PM10[0], config.BadAtmosphere.PM10[1]));
  }

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

  sendMessageMqtt(objTelemetry, topicSendTelemetryToAgent);
}

function processDataOneHour() {
  /*
  TELEMETRY:
  {
  "TypePacket": "HAQI",
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
    "PM10": "<value>",
    "AQIS": "<value>"
  }
}
  */
  if (config.AQIConditionGood) {
    var Temp = new String(genRandomData(config.GoodAtmosphere.Temp[0], config.GoodAtmosphere.Temp[1]));
    var Humi = new String(genRandomData(config.GoodAtmosphere.Humi[0], config.GoodAtmosphere.Humi[1]));
    var Press = new String(genRandomData(config.GoodAtmosphere.Press[0], config.GoodAtmosphere.Press[1]));
    var CO = new String(genRandomData(config.GoodAtmosphere.CO[0], config.GoodAtmosphere.CO[1]));
    var NO2 = new String(genRandomData(config.GoodAtmosphere.NO2[0], config.GoodAtmosphere.NO2[1]));
    var SO2 = new String(genRandomData(config.GoodAtmosphere.SO2[0], config.GoodAtmosphere.SO2[1]));
    var O3 = new String(genRandomData(config.GoodAtmosphere.O3[0], config.GoodAtmosphere.O3[1]));
    var PM2_5 = new String(genRandomData(config.GoodAtmosphere.PM2_5[0], config.GoodAtmosphere.PM2_5[1]));
    var PM10 = new String(genRandomData(config.GoodAtmosphere.PM10[0], config.GoodAtmosphere.PM10[1]));
    var AQIS = new String(genRandomData(config.GoodAtmosphere.AQIS[0], config.GoodAtmosphere.AQIS[1]));
  } else {
    var Temp = new String(genRandomData(config.BadAtmosphere.Temp[0], config.BadAtmosphere.Temp[1]));
    var Humi = new String(genRandomData(config.BadAtmosphere.Humi[0], config.BadAtmosphere.Humi[1]));
    var Press = new String(genRandomData(config.BadAtmosphere.Press[0], config.BadAtmosphere.Press[1]));
    var CO = new String(genRandomData(config.BadAtmosphere.CO[0], config.BadAtmosphere.CO[1]));
    var NO2 = new String(genRandomData(config.BadAtmosphere.NO2[0], config.BadAtmosphere.NO2[1]));
    var SO2 = new String(genRandomData(config.BadAtmosphere.SO2[0], config.BadAtmosphere.SO2[1]));
    var O3 = new String(genRandomData(config.BadAtmosphere.O3[0], config.BadAtmosphere.O3[1]));
    var PM2_5 = new String(genRandomData(config.BadAtmosphere.PM2_5[0], config.BadAtmosphere.PM2_5[1]));
    var PM10 = new String(genRandomData(config.BadAtmosphere.PM10[0], config.BadAtmosphere.PM10[1]));
    var AQIS = new String(genRandomData(config.BadAtmosphere.AQIS[0], config.BadAtmosphere.AQIS[1]));
  }

  var objTelemetry = {};
  objTelemetry.TypePacket = "HAQI";
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
  objTelemetry.Data.AQIS = AQIS;

  sendMessageMqtt(objTelemetry, topicSendTelemetryToAgent);
}

function processDataDaily() {
  /*
  TELEMETRY:
  {
  "TypePacket": "DAQI",
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
    "PM10": "<value>",
    "AQIS": "<value>"
  }
}
}
  */
  if (config.AQIConditionGood) {
    var Temp = new String(genRandomData(config.GoodAtmosphere.Temp[0], config.GoodAtmosphere.Temp[1]));
    var Humi = new String(genRandomData(config.GoodAtmosphere.Humi[0], config.GoodAtmosphere.Humi[1]));
    var Press = new String(genRandomData(config.GoodAtmosphere.Press[0], config.GoodAtmosphere.Press[1]));
    var CO = new String(genRandomData(config.GoodAtmosphere.CO[0], config.GoodAtmosphere.CO[1]));
    var NO2 = new String(genRandomData(config.GoodAtmosphere.NO2[0], config.GoodAtmosphere.NO2[1]));
    var SO2 = new String(genRandomData(config.GoodAtmosphere.SO2[0], config.GoodAtmosphere.SO2[1]));
    var O3 = new String(genRandomData(config.GoodAtmosphere.O3[0], config.GoodAtmosphere.O3[1]));
    var PM2_5 = new String(genRandomData(config.GoodAtmosphere.PM2_5[0], config.GoodAtmosphere.PM2_5[1]));
    var PM10 = new String(genRandomData(config.GoodAtmosphere.PM10[0], config.GoodAtmosphere.PM10[1]));
    var AQIS = new String(genRandomData(config.GoodAtmosphere.AQIS[0], config.GoodAtmosphere.AQIS[1]));
  } else {
    var Temp = new String(genRandomData(config.BadAtmosphere.Temp[0], config.BadAtmosphere.Temp[1]));
    var Humi = new String(genRandomData(config.BadAtmosphere.Humi[0], config.BadAtmosphere.Humi[1]));
    var Press = new String(genRandomData(config.BadAtmosphere.Press[0], config.BadAtmosphere.Press[1]));
    var CO = new String(genRandomData(config.BadAtmosphere.CO[0], config.BadAtmosphere.CO[1]));
    var NO2 = new String(genRandomData(config.BadAtmosphere.NO2[0], config.BadAtmosphere.NO2[1]));
    var SO2 = new String(genRandomData(config.BadAtmosphere.SO2[0], config.BadAtmosphere.SO2[1]));
    var O3 = new String(genRandomData(config.BadAtmosphere.O3[0], config.BadAtmosphere.O3[1]));
    var PM2_5 = new String(genRandomData(config.BadAtmosphere.PM2_5[0], config.BadAtmosphere.PM2_5[1]));
    var PM10 = new String(genRandomData(config.BadAtmosphere.PM10[0], config.BadAtmosphere.PM10[1]));
    var AQIS = new String(genRandomData(config.BadAtmosphere.AQIS[0], config.BadAtmosphere.AQIS[1]));
  }

  var objTelemetry = {};
  objTelemetry.TypePacket = "DAQI";
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
  objTelemetry.Data.AQIS = AQIS;

  sendMessageMqtt(objTelemetry, topicSendTelemetryToAgent);
}

/*******************************Handle Application************************************/
/**
  * @brief  {} set Element Daily Count Flag by Rule ID
  * @param  {}
  * @retval {Number} if success then return 1 else return -1.
  */
function sendDataDaily(hour, minute, arr_dayOfWeek) {
  var ret;
  try {
    var rule_start = new schedule.RecurrenceRule();
    rule_start.dayOfWeek = arr_dayOfWeek;
    rule_start.hour = hour;
    rule_start.minute = minute;

    schedule.scheduleJob(rule_start, function () {
      processDataDaily();
    });
    ret = 1;
    return ret;
  } catch (error) {
    console.error(error);
    ret = -1;
    return ret;
  }
}

/*******************************Handle Application************************************/
sendDataDaily(config.Hour, config.Minute, config.ArrDayOfWeek);

intervalID = setInterval(processData, defaultUT);

intervalOneHour = setInterval(processDataOneHour, 1000 * 60 * 60);

eventEmitter.on(topicReceiveMessageConfigFromAgent, function (messageParsed) {
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
  console.log('\n\n\nmessage from SERVER: ', messageParsed);
  var objMessage = messageParsed;
  var deviceIDEp = objMessage.DeviceIDEp;

  var dataUT = Number(objMessage.Data.DataUT);

  clearInterval(intervalID);
  if (dataUT >= defaultUT) {
    intervalID = setInterval(processData, dataUT);
  } else {
    intervalID = setInterval(processData, defaultUT);
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