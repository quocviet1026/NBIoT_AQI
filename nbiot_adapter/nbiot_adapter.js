"use strict"

var mqtt                = require('mqtt'),
  util                  = require('util'),
  MQTTEmitter           = require('mqtt-emitter');
var JsonDB 				= require('node-json-db');

const serialSimCom = require('./serialSimCom');

const serial_options = {
  path: '/dev/ttyAMA0',
  baudRate: 115200,
}

var Loggin 	 	= new JsonDB("/home/pi/NB_IoT/UserData/Loggin", true, false);
var Username;
try {
	Username = Loggin.getData("/Loggin/deviceID");
} catch (e) {
	Username = "";
}
var DeviceID;
DeviceID = Username;

var Password;
try {
	Password = Loggin.getData("/Loggin/token");
} catch (e) {
	Password = "";
}

var CSE_ID = "/in-cse";

//var OneHome_mqttbroker_ip = "18.197.239.198";
var OneHome_mqttbroker_domain = "\"staging.oneiot.com.vn\"";
var OneHome_mqttbroker_ip;
var OneHome_mqttbroker_user = "oneiot";
var OneHome_mqttbroker_pass = "oneiot@123";

var Config = {
  MQTT_BROKER_LOCAL_PORT          : 1883,                           //MQTT Local port
  MQTT_BROKER_LOCAL_ADDRESS       : "127.0.0.1",                    //MQTT Local Address
  
//  LOCAL_USERNAME                  : "simcom7022",
//  LOCAL_PASSWORD                  : "vnpt123",

  /*Topic communicate with Agent*/
  MQTT_TOPIC_SEND_MESSAGE_TO_AGENT             : "Adapter_To_Agent",

  MQTT_TOPIC_SUB_AGENT_1 : '/oneM2M/req' + '/' + '+' + CSE_ID + '/json',
  MQTT_TOPIC_SUB_AGENT_2 : '/oneM2M/resp' + CSE_ID + '/' + '+' + '/json',
  MQTT_TOPIC_SUB_PLATFORM_1 : '/oneM2M/req/+/' + DeviceID + '/json',
  MQTT_TOPIC_SUB_PLATFORM_2 : '/oneM2M/resp/' + DeviceID + '/+/json',
};

//Trigger to agent process
var simcomInitDone_mess = {
  typeMessage : "STATUS",
  dataMessage : "1" 
};
var simcomInitError_mess = {
  typeMessage : "STATUS",
  dataMessage : "0" 
};

var simcomInit_FLAG = 0;

// Set up module sim, Connect to mqtt broker and subscribe to One_topic
async function initSimcom7022(simcomATSerial,mqttLocal) {

  // set init status
  simcomInit_FLAG = 1;

  // Restart the Chip
  await mySleep(1000);
  simcomATSerial.send("AT+QCRST\r");
  await mySleep(5000);

  // Request IMEI of simcom module
  simcomATSerial.send("AT+CGSN=1\r");
  await mySleep(2000);

  // Let the modem display network connection status
  simcomATSerial.send("AT+CEREG=5\r");
  await mySleep(1000);

  // Switch off the radio module
  simcomATSerial.send("AT+CFUN=0\r");
  await mySleep(1500);

  // Set the frequency band to 3 for NB-IoT of Viettel in Vietnam
  simcomATSerial.send("AT+QCBAND=0,3\r");
  await mySleep(1000);

  // Switch on the radio again
  simcomATSerial.send("AT+CFUN=1,1\r");
  await mySleep(5000);

  // Auto get IP
  simcomATSerial.send("AT+CGCONTRDP\r");
  await mySleep(2000);

  // Test the internet
  //simcomATSerial.send("AT+QCPING=\"www.google.com.vn\"\r");
  //await mySleep(1000);

  // Get Ip of One mqtt broker
  simcomATSerial.send("AT+CDNSGIP="+OneHome_mqttbroker_domain+"\r");
  await mySleep(5000);

  // Start MQTT service
  simcomATSerial.send("AT+CMQTTSTART\r");
  await mySleep(1000);

  // Acquire a client
  simcomATSerial.send("AT+CMQTTACCQ=0,\"SAE33241962-039a-4927-b8cd-a1a37ff187ab\",0\r");
  await mySleep(1000);

  // Connect to MQTT server
  simcomATSerial.send("AT+CMQTTCONNECT=0,"+"\""+"tcp://"+OneHome_mqttbroker_ip+":18830\""+",64800,1,"+"\""+OneHome_mqttbroker_user+"\""+","+"\""+OneHome_mqttbroker_pass+"\""+"\r");
  await mySleep(3000);

  // Subscribe to MQTT_TOPIC_SUB_PLATFORM_1
  var len_subtopic_1 = Config.MQTT_TOPIC_SUB_PLATFORM_1.length;
  simcomATSerial.send("AT+CMQTTSUB=0,"+len_subtopic_1+",1\r");
  await mySleep(2000);
  simcomATSerial.send(Config.MQTT_TOPIC_SUB_PLATFORM_1+"\r");  // Subscribe topic
  await mySleep(2000);

  // Subscribe to MQTT_TOPIC_SUB_PLATFORM_2
  var len_subtopic_2 = Config.MQTT_TOPIC_SUB_PLATFORM_2.length;
  simcomATSerial.send("AT+CMQTTSUB=0,"+len_subtopic_2+",1\r");
  await mySleep(2000);
  simcomATSerial.send(Config.MQTT_TOPIC_SUB_PLATFORM_2+"\r");  // Subscribe topic
  await mySleep(2000);

  try {
    mqttLocal.publish(Config.MQTT_TOPIC_SEND_MESSAGE_TO_AGENT, JSON.stringify(simcomInitDone_mess), {qos: 0}, function(e) {
      console.log("sendMessageMqttToAgent ---> Succesfully" );
    });
  } catch (e) {
    console.log('Error attempting to sendMessageMqttToAgent : ' + 'error: ' + e);
  }

  // clear init status
  simcomInit_FLAG = 0;
}

// Connect to mqtt server again when connection lost
async function connectMqtt(simcomATSerial, mqttLocal) {

  // Trigger to agent process
  try {
    mqttLocal.publish(Config.MQTT_TOPIC_SEND_MESSAGE_TO_AGENT, JSON.stringify(simcomInitError_mess), {qos: 0}, function(e) {
      console.log("sendMessageMqttToAgent ---> Succesfully" );
    });
  } catch (e) {
    console.log('Error attempting to sendMessageMqttToAgent : ' + 'error: ' + e);
  }
  await mySleep(2000);

  // Connect to MQTT server again
  simcomATSerial.send("AT+CMQTTCONNECT=0,"+"\""+"tcp://"+OneHome_mqttbroker_ip+":18830\""+",64800,1,"+"\""+OneHome_mqttbroker_user+"\""+","+"\""+OneHome_mqttbroker_pass+"\""+"\r");
  await mySleep(3000);

  // Trigger to agent process
  try {
    mqttLocal.publish(Config.MQTT_TOPIC_SEND_MESSAGE_TO_AGENT, JSON.stringify(simcomInitDone_mess), {qos: 0}, function(e) {
      console.log("sendMessageMqttToAgent ---> Succesfully" );
    });
  } catch (e) {
    console.log('Error attempting to sendMessageMqttToAgent : ' + 'error: ' + e);
  }
  await mySleep(1000);
}

// Init simcom again when receive ERROR
async function initSimcom7022_again(simcomATSerial, mqttLocal) {

  // Trigger to agent process
  try {
    mqttLocal.publish(Config.MQTT_TOPIC_SEND_MESSAGE_TO_AGENT, JSON.stringify(simcomInitError_mess), {qos: 0}, function(e) {
      console.log("sendMessageMqttToAgent ---> Succesfully" );
    });
  } catch (e) {
    console.log('Error attempting to sendMessageMqttToAgent : ' + 'error: ' + e);
  }
  await mySleep(2000);

  // Init simcom again
  initSimcom7022(simcomATSerial, mqttLocal);
}

/*--------------------------------------------------------Connect to MQTT PLATFORM----------------------------------------------------------------------------*/

var optionsMqttPlatform = {
     port: 1883,
     host: "staging.oneiot.com.vn",	  
     username: Username,
     password: Password,
     clientId: DeviceID,
};

/*--------------------------------------------------------Connect to MQTT LOCAL-------------------------------------------------------------------------------*/

var optionsLocal = {
  port: Config.MQTT_BROKER_LOCAL_PORT,
  host: Config.MQTT_BROKER_LOCAL_ADDRESS,
};

var mqttClientLocal =  mqtt.connect(optionsLocal);

mqttClientLocal.on('connect', function() {

    console.log('Connect to Broker Succesfully');

    mqttClientLocal.subscribe(Config.MQTT_TOPIC_SUB_AGENT_1, {qos: 2}, function(err) {
        if (!err) {
          console.log('Subscribe to Agent_to_SimCom Succesfully');
        } else {
          console.log('Subscribe to Agent_to_SimCom Fail: ' + err);
        }
    });

    mqttClientLocal.subscribe(Config.MQTT_TOPIC_SUB_AGENT_2, {qos: 2}, function(err) {
        if (!err) {
          console.log('Subscribe to Agent_to_SimCom Succesfully');
        } else {
          console.log('Subscribe to Agent_to_SimCom Fail: ' + err);
        }
    });
});

 mqttClientLocal.on('error', function() {
  // Subscribe to all topics
  //Logger.server.log('info', 'MQTT Client Error: ');
});

/*--------------------------------------------------------Connect to SIMCOM serial-------------------------------------------------------------------------------*/

// Auto open serial port with options
console.log("Simcom: auto open serial port with options",serial_options);
var simcomClient = serialSimCom.connect(serial_options);

// Subscribe to OnePlatform mqtt
// MQTT_TOPIC_SUB_AGENT_1
// MQTT_TOPIC_SUB_AGENT_2
console.log("Simcom: Subscribe to OnePlatform mqtts");
console.log(Config.MQTT_TOPIC_SUB_AGENT_1);
console.log(Config.MQTT_TOPIC_SUB_AGENT_2);
initSimcom7022(serialSimCom, mqttClientLocal);

/*--------------------------------------------------------Process function ----------------------------------------------------------------------------*/
// Sleep function
function mySleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Use aasync function to use mysleep
async function sendMessageMqttToSim(simcomATSerial, topic, message) {
  console.log("\nsendMessageMqttToSim ---> topic:"+topic);
  console.log('sendMessageMqttToSim ---> message:'+message);

  // Disconnect from MQTT server
  // simcomATSerial.send("AT+CMQTTDISC=0,30\r");
  // await mySleep(1000);

  // Connect to MQTT server
  // simcomATSerial.send("AT+CMQTTCONNECT=0,"+"\""+"tcp://"+OneHome_mqttbroker_ip+":1883\""+",64800,1\r");
  // await mySleep(3000);

  // Input the topic of publish message
  simcomATSerial.send("AT+CMQTTTOPIC=0,"+topic.length+"\r");
  await mySleep(2000);
  simcomATSerial.send(topic+"\r");
  await mySleep(1000);

  // Input the publish message
  simcomATSerial.send("AT+CMQTTPAYLOAD=0,"+message.length+"\r");
  await mySleep(2000);
  simcomATSerial.send(message+"\r");
  await mySleep(1000);

  // Publish a message to server
  simcomATSerial.send("AT+CMQTTPUB=0,1,60\r");
  await mySleep(1000);
}

function sendMessageMqttToAgent(message) {
  var get_topic;
  var get_payload;

  // remove <CR><LF> 
  message = message.replaceAll("\r","");
  message = message.replaceAll("\n","");
  // remove white space
  message = message.replaceAll(" ","");

  // split message string 1:START/2:TOPIC/3:PAYLOAD/4:END
  var data = message.split("+CMQTTRX");

  // get the length of topic message
  var len_topic = data[1].split(",")[1];
  // get the length of payload message
  var len_payload = data[1].split(",")[2];

  get_topic = data[2].slice(-len_topic);

  var payload_index = data[3].indexOf("{");
  get_payload = data[3].slice(payload_index);

  console.log("\nsendMessageMqttToAgent ---> topic:"+get_topic);
  console.log('sendMessageMqttToAgent ---> message:'+get_payload);

  try {
    mqttClientLocal.publish(get_topic, get_payload, {qos: 0}, function(e) {
      console.log("sendMessageMqttToAgent ---> Succesfully" );
    });
  } catch (e) {
    console.log('Error attempting to sendMessageMqttToAgent : ' + 'error: ' + e);
  }
}

function getmqttrokerIP(message) {

  // remove <CR><LF> 
  message = message.replaceAll("\r","");
  message = message.replaceAll("\n","");
  // remove white space
  message = message.replaceAll(" ","");

  // split message string
  OneHome_mqttbroker_ip = message.split(",")[2];
  OneHome_mqttbroker_ip = OneHome_mqttbroker_ip.replaceAll("\"","");
  console.log('OneHome_mqttbroker_ip' + OneHome_mqttbroker_ip);
}

function getsimcomIMEI(message) {

  const fs = require('fs');
  var simcomIMEI;

  // remove <CR><LF> 
  message = message.replaceAll("\r","");
  message = message.replaceAll("\n","");
  // remove white space
  message = message.replaceAll(" ","");

  // split message string
  simcomIMEI = message.split(":")[1];
  simcomIMEI = simcomIMEI.replaceAll("\"","");
  console.log('simcomIMEI:' + simcomIMEI);

  try {
    fs.writeFileSync("../application/deviceID.txt", simcomIMEI);   //'a+' is append mode
    console.log("File written successfully");
  } catch(err) {
    console.error("File written error",err);
  }
}

/*--------------------------------------------------------Parser and handle message from Agent ----------------------------------------------------------------------------*/
/*
When recevice message from agent:
- Get Topic
- Get Message
- Send Message, Topic to Sim
*/

mqttClientLocal.on('message', function(topic, message_payload) {

  try {
    // NOT doing init simcom
    if (simcomInit_FLAG == 0) {
      var messageParsed = JSON.parse(message_payload);

      //console.log("message from AGENT is comming ---> topic: ", topic);
      //console.log('message from AGENT is comming ---> payload: ',util.inspect(messageParsed,false, null, true));

      message_payload = message_payload.toString();
      // remove <CR><LF> 
      message_payload = message_payload.toString().replaceAll("\r","");
      message_payload = message_payload.toString().replaceAll("\n","");
      // remove white space
      message_payload = message_payload.replaceAll(" ","");
      //Receive message from agent, send to Simcom
      sendMessageMqttToSim(serialSimCom, topic, message_payload);
    }
  } catch (e) {
    console.log('\n\n\nMessage from Server error: ' + e);
  }
});

/*--------------------------------------------------------Parser and handle message from Simcom ----------------------------------------------------------------------------*/
/*
When recevice message from Simcom:
- Get Topic
- Get Message
- Send Message, Topic to Sim
*/

simcomClient.on('mqtt_message', function(message_payload) {

  try {
    //Receive message from agent, send to Simcom
    // NOT doing init simcom
    if (simcomInit_FLAG == 0) {
      sendMessageMqttToAgent(message_payload);
    }
  } catch (e) {
    console.log('\n\n\nMessage from Simcom error: ' + e);
  }
});

simcomClient.on('resp_message', function(message_payload) {

  try {
    //Receive message from agent, send to Simcom
    if (message_payload.includes("CDNSGIP")) {
      getmqttrokerIP(message_payload);
    } else if (message_payload.includes("CGSN")) {
      getsimcomIMEI(message_payload);
    }else if (message_payload.includes("CMQTTCONNLOST")) {
      // NOT doing init simcom
      if (simcomInit_FLAG == 0) {
        connectMqtt(serialSimCom, mqttClientLocal);
      }
    } else if (message_payload.includes("ERROR")) {
      // NOT doing init simcom
      if (simcomInit_FLAG == 0) {
        simcomInit_FLAG = 1;
        initSimcom7022_again(serialSimCom, mqttClientLocal);  // init again
      }
    }
  } catch (e) {
    console.log('\n\n\nMessage from Simcom error: ' + e);
  }
});