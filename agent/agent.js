var mqtt                          	= require('mqtt');
var JsonDB 							= require('node-json-db');
var util 							= require('util');
var	shell 							= require('shelljs');
var Config 							= require('./config.js');

/*PI*/
var Loggin 	 	= new JsonDB("/home/pi/NB_IoT/UserData/Loggin", true, false);
var Flag 	 	= new JsonDB("/home/pi/NB_IoT/UserData/Flag", true, false);
var AEID  	 	= new JsonDB("/home/pi/NB_IoT/UserData/AEID", true, false);
var RI 		 	= new JsonDB("/home/pi/NB_IoT/UserData/ri", true, false);
var RN 		 	= new JsonDB("/home/pi/NB_IoT/UserData/ResourceName", true, false);
var Topic 	 	= new JsonDB("/home/pi/NB_IoT/UserData/Communicate_with_gateway", true, false);

/*Window*/
// var Loggin 	 	= new JsonDB("../UserData/Loggin", true, false);
// var Flag 	 	= new JsonDB("../UserData/Flag", true, false);
// var AEID  	 	= new JsonDB("../UserData/AEID", true, false);
// var RI 		 	= new JsonDB("../UserData/ri", true, false);
// var RN 		 	= new JsonDB("../UserData/ResourceName", true, false);
// var Topic 	 	= new JsonDB("../UserData/Communicate_with_gateway", true, false);





/**************************************************************************/
/*Connected: */
function Tooltest_Publish_Send_Connected(messageSend) 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Send_Connected");
		var messPub = messageSend;

	    var channel = "TEST_sendConnected";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Send_Connected: ' + e));
	    }
}

/*reconnect*/
function Tooltest_Publish_Send_Reconnect() 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Send_Reconnect");
		var messPub = {};
		messPub.message = "RECONNECTING..."

	    var channel = "TEST_sendReconnect";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Send_Reconnect: ' + e));
	    }
}

/*sendNotACKres*/
function Tooltest_Publish_Send_NotACKres() 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Send_NotACKres");
		var messPub = {};
		messPub.message = "NOTackresponse..."

	    var channel = "TEST_sendNotACKres";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Send_NotACKres: ' + e));
	    }
}


function Tooltest_Publish_Send_Cnt_Command(messageSend) 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Send_Cnt_Command");
		var messPub = messageSend;

	    var channel = "TEST_sendCntCommand";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Send_Cnt_Command: ' + e));
	    }
}

/*Telemetry*/
function Tooltest_Publish_Send_Cnt_Telemetry(messageSend) 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Send_Cnt_Telemetry");
		var messPub = messageSend;

	    var channel = "TEST_sendCntTelemetry";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Send_Cnt_Telemetry: ' + e));
	    }
}


function Tooltest_Publish_Receive_2001_Cnt_Telemetry_And_Command(messageSend) 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Receive_2001_Cnt_Telemetry_And_Command");
		var messPub = messageSend;

	    var channel = "TEST_receive2001CntTelemetryAndCommand";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Receive_2001_Cnt_Telemetry: ' + e));
	    }
}


/*RemoveDeviceItSelf*/
function Tooltest_Publish_Send_RemoveDeviceItSelf(messageSend) 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Send_RemoveDeviceItSelf");
		var messPub = messageSend;

	    var channel = "TEST_sendRemoveDeviceItSelf";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Send_RemoveDeviceItSelf: ' + e));
	    }
}

/*NOT support RSC*/
function Tooltest_Publish_Send_Not_Support_RSC(messageSend) 
{		
		/*StateLED: On / Off*/
		////console.log("JUMP to Tooltest_Publish_Send_Not_Support_RSC");
		var messPub = messageSend;

	    var channel = "TEST_NOTsupportRSC";
	    var payload = messPub;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish Tooltest_Publish_Send_Not_Support_RSC: ' + e));
	    }
}

/**************************************************************************/




/*``````
	Define flag conneted to plafrom:
	if agent send "connected" to cnt device_status and receive rsc 2001 of this message -> Set flag = 1
	if End time out (3minute) this flag  = 0 -> Of led Pair -> Cannot connect to Platform
*/
var flagConnetedToPlatform = 0; 
var flagAdapterReady = 0; 

function checkAgentConnectSuccessToPlatform() {
	// //console.log("Jump to checkAgentConnectSuccessToPlatform");
	setTimeout(checkFlagConnetedToPlatform,180000);
}

checkAgentConnectSuccessToPlatform();

function checkFlagConnetedToPlatform() {
	if(flagConnetedToPlatform == 0){
		//console.log("ERROR ---> Cannot connect to Platform");
		/*Off LED:*/
		Agent_Off_LED_PAIR();
	}
	else if (flagConnetedToPlatform == 1) {
		// //console.log("SUCCESS --->  connected to Platform");
		/*Off LED:*/
		Agent_On_LED_PAIR();
	}
	else {
		//console.log("checkFlagConnetedToPlatform check flag ERROR---> flag:",flagConnetedToPlatform);
	}
}


function reStartThisProcess() {
	//   process.on("exit", function () {
	//     require("child_process").spawn(process.argv.shift(), process.argv, {
	//         cwd: process.cwd(),
	//         detached : true,
	//         stdio: "inherit"
	//     });
	//   });

  //Restart by systemctl --> just exit process
  process.exit();
}

var flag_message_response_comming = 0;
var storeTimeOut;

function setTimeOutCheckResponseInit() {
	// //console.log("JUMP to setTimeOutCheckResponseInit");
	flag_message_response_comming = 0
	var flagInitCheck = check_flag_init_done();
	clearTimeout(storeTimeOut);
	if(flagInitCheck == 0) {
		storeTimeOut = setTimeout(handleCheckResponseInit,10000);
	}
}

function handleCheckResponseInit() {
	// //console.log("JUMP to handleCheckResponseInit");
	if (flag_message_response_comming == 0) {
		////console.log("Nothing comming ---> ERROR ---> Restart NOW!!!");
		reStartThisProcess();
	}else{
		//console.log("Message have came ---> SUCCESS ---> NEXT STEP!!!");
	}
}

function clearTimeOutCheckResponseInit() {
	// //console.log("JUMP to clearTimeOutCheckResponseInit");
	clearTimeout(storeTimeOut);
}

var mqttClient = {
	Agent:null,
};

function Agent_On_LED_PAIR() 
{		
		/*StateLED: On / Off*/
		// //console.log("JUMP to Agent_On_LED_PAIR");
		var messControlLedPair = {};
		messControlLedPair.SmartConfigSuccess = "On";

	    var channel = "LED_CONTROL";
	    var payload = messControlLedPair;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 2}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish commands to Agent_On_LED_PAIR: ' + e));
	    }
}

function Agent_Off_LED_PAIR() 
{		
		/*StateLED: On / Off*/
		// //console.log("JUMP to Agent_Off_LED_PAIR");
		var messControlLedPair = {};
		messControlLedPair.SmartConfigFail = "On";

	    var channel = "LED_CONTROL";
	    var payload = messControlLedPair;
	    try {
	       mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 2}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish commands to Agent_On_LED_PAIR: ' + e));
	    }
}

function Agent_PublishData_To_Platform(topic,message) 
{
		////console.log(("JUMP  to Agent_PublishData_To_Platform"));
		////console.log('message: ',util.inspect(message,false, null, true));
	    var channel = topic;
	    var payload = message;
	    try {
	      mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 2}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish commands to Platform COMMAND: ' + e));
	    }
}

function Agent_PublishData_To_Platform_Telemetry(topic,message) 
{
		////console.log(("JUMP  to Agent_PublishData_To_Platform"));
	    var channel = topic;
	    var payload = message;
	    try {
	      mqttClient.Agent.publish(channel, JSON.stringify(payload), {qos: 0}, function(e) {
	      ////console.log(('MQTT Published:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      //console.log(('Error Agent attempting to publish telemetry to Telemetry: ' + e));
	    }
}


/*Function about flag*/
function write_flag_to_file(strFlagName,value){
  try {
      var flag = Flag.getData("/Flag");
  } catch (e) {
    //console.log(('Error Get data from Flagjson: ' + e));
  }

  try {
      flag[strFlagName] = value;
      Flag.push("/Flag",flag);
      shell.exec('sync');
  } catch (e) {
    //console.log(('Error Put data to Flagjson: ' + e));
  }
}

function read_flag_from_file(strFlagName){
  ////console.log('JUMP to read_flag_from_file');
  try {
      var flag = Flag.getData("/Flag");
  } catch (e) {
    //console.log(('Error Get data from Flagjson: ' + e));
  }
  return flag[strFlagName];
}


/*Function about login*/
function write_data_login(str_login_type, strvalue) {
    ////console.log(("JUMP to write_data_login"));
    try {
        var loggin = Loggin.getData("/Loggin");
        //console.log(loggin);
    } catch (e) {
        //console.log(('Error Get data from loginjson: ' + e));
    }

    try {
        loggin[str_login_type] = strvalue;
        Loggin.push("/Loggin", loggin);
        // //console.log(("Write data LOGGIN to file SUCCESS!!!"));
    } catch (e) {
        //console.log(('Error Put data to loginjson: ' + e));
    }
}

/*Function about AE-ID*/
// publish to request AE-ID
function Request_AE_ID(){
	// Step 6, publish to topic: /oneM2M/reg_req/Credential-ID/CSE-ID/json
	////console.log(("JUMP to Request_AE_ID"));
	var payload_req_AEID = crt_payload_req_AEID();	// Payload: Create <AE> request
	try {		
		Agent_PublishData_To_Platform(topic_pub_req_AEID,payload_req_AEID); // Create AE-ID request
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();
	} catch (e) {
	    //console.log(('ERROR Publist request AE_ID: ' + e));
	}
}
// publish to get back AE-ID
function Request_getback_AE_ID(){
	// Step 6, publish to topic: /oneM2M/reg_req/Credential-ID/CSE-ID/json
	////console.log(("JUMP to Request_AE_ID"));
	var payload_get_back_AEID = crt_payload_get_back_AEID();	// Payload: Create <AE> request
	try {		
		Agent_PublishData_To_Platform(topic_pub_req_AEID,payload_get_back_AEID); // Create AE-ID request
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();
	} catch (e) {
	    //console.log(('ERROR Publist getback AE_ID: ' + e));
	}
}

// get AE-IED from message
function Get_AE_ID_frm_mess(message){
	var AE_ID = message.pc['m2m:ae'].aei;
	return AE_ID;
};

// get AE-IED from file
function Get_AE_ID_frm_file(){
	////console.log('JUMP to Get_AE_ID_frm_file');
	try {
		var AE_ID = AEID.getData("/AE_ID/AE_ID");
	} catch (e) {
	    //console.log(('ERROR Get AE_ID from file: ' + e));
	}
	return AE_ID;
};

// write AE-IED to file
function write_AEID_to_file(strAE_ID) {
  try {
      AEID.push("/AE_ID",{AE_ID:strAE_ID});
      ////console.log(("Write AEID to file SUCCESS!!!"));
      shell.exec('sync');
  } catch (e) {
    //console.log(('Error Write AEID to file: ' + e));
  }
};

/*Function get back ri container*/
// publish to get back ri 
function Request_getback_ri_sub_cnt_platform_config(){
	////console.log(("JUMP to Request_getback_ri_sub_cnt_platform_config"));
	var payload_get_back_ri_cnt_config_platform = crt_payload_get_back_ri_cnt_config_platform();	// Payload: Create <AE> request
	try {		
		Agent_PublishData_To_Platform(topic_pub_req_AEID,payload_get_back_ri_cnt_config_platform); // Create AE-ID request
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();
	} catch (e) {
	    //console.log(('ERROR Request_getback_ri_sub_cnt_platform_config: ' + e));
	}
}

// publish to get back ri container sub container 
function Request_getback_ri_sub_cnt_command_application(){
	////console.log(("JUMP to Request_getback_ri_sub_cnt_command_application"));
	var payload_get_back_ri_cnt_command_application = crt_payload_get_back_ri_cnt_command_application();	// Payload: Create <AE> request
	try {		
		Agent_PublishData_To_Platform(topic_pub_req_AEID,payload_get_back_ri_cnt_command_application); // Create AE-ID request
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();
	} catch (e) {
	    //console.log(('ERROR Request_getback_ri_sub_cnt_command_application: ' + e));
	}
}


/*Function about ri*/
// get ri from message
function Get_ri_frm_mess(message){
	var ri = message.pc['m2m:sub'].ri;
	return ri;
};

function write_ri_to_file(str_ri_type,strvalue){
  try {
      var ri = RI.getData("/ri");
  } catch (e) {
    //console.log(('Error Get data from rijson: ' + e));
  }

  try {
      ri[str_ri_type] = strvalue;
      RI.push("/ri",ri);
      shell.exec('sync');
  } catch (e) {
    //console.log(('Error Put data to rijson: ' + e));
  }
}

function read_ri_from_file(str_ri_type){
  ////console.log('JUMP to read_flag_from_file');
  try {
      var ri = RI.getData("/ri");
  } catch (e) {
    //console.log(('Error Get data from rijson: ' + e));
  }
  return ri[str_ri_type];
}


/**************************** HANDLE COMMUNICATE WITH ADAPTER*********************************/
//Subscribe Topic Communicate With Adapter
function subscribe_to_topic_adapter() {
	mqttClient.Agent.subscribe(Config.MQTT_TOPIC_ADAPTER_TO_AGENT, {qos: 0}, function(err) {
		if (!err) {
		  ////console.log('MQTT Agent Subscribed to topic1: ' + topic_1);
		} else {
		  //console.log(('MQTT Client Agent ERROR Subscribed to topic1: ' + err));
		}
	});	
}

function handle_message_adapter(messageParsed) {
	switch (messageParsed.typeMessage) {
		case "STATUS": { //Adapter Connect, Subscribe success -> Agent start.
			if(messageParsed.dataMessage === '1') {
				console.log('Adapter Ready ---> Start Agent Process');
				flagAdapterReady = 1;
				start_agent_logic_process();
			}
			if(messageParsed.dataMessage === '0') {
				flagAdapterReady = 0;
				flagConnetedToPlatform = 0;
			}
			break;
		}
		default :
			console.log('handle_message_adapter error ---> Not support typeMessage: ', messageParsed.typeMessage);
			break;
	}

}

/*******************************************************************************************/

/**************************** HANDLE COMMUNICATE WITH APPLICATION*********************************/
//Subscribe Topic Communicate With Application
function subscribe_to_topic_application() {
	//Subscribe Topic handle TELEMETRY
	const topic_app_telemetry = Config.MQTT_TOPIC_APP_TO_AGENT_TELEMETRY;
	const topic_app_status = Config.MQTT_TOPIC_APP_TO_AGENT_STATUS;
	const topic_app_response = Config.MQTT_TOPIC_APP_TO_AGENT_RESPONSE;

	mqttClient.Agent.subscribe(topic_app_telemetry, {qos: 0}, function(err) {
		if (!err) {
		  ////console.log('MQTT Agent Subscribed to topic1: ' + topic_1);
		} else {
		  //console.log(('MQTT Client Agent ERROR Subscribed to topic1: ' + err));
		}
	});

	//Subscribe Topic handle STATUS
	mqttClient.Agent.subscribe(topic_app_status, {qos: 0}, function(err) {
		if (!err) {
		  ////console.log('MQTT Agent Subscribed to topic1: ' + topic_1);
		} else {
		  //console.log(('MQTT Client Agent ERROR Subscribed to topic1: ' + err));
		}
	});

	//Subscribe Topic handle RESPONSE
	mqttClient.Agent.subscribe(topic_app_response, {qos: 0}, function(err) {
		if (!err) {
		  ////console.log('MQTT Agent Subscribed to topic1: ' + topic_1);
		} else {
		  //console.log(('MQTT Client Agent ERROR Subscribed to topic1: ' + err));
		}
	});
}

function handle_application_telemetry(messageParsed) {
	//console.log(('message from Application Telemetry: ') + util.inspect(messageParsed,false, null, true));
	/*Send data receive from Application to Platform*/

	if((flagAdapterReady == 1) && (flagConnetedToPlatform == 1)){
		var payload_send_command_to_app = crt_contenInstance_to_app_telemetry(JSON.stringify(messageParsed));			
		Agent_PublishData_To_Platform_Telemetry(topic_pub_req_command,payload_send_command_to_app);	
		Tooltest_Publish_Send_Cnt_Telemetry(payload_send_command_to_app);	
	}else{
		console.log("NOT flagAdapterReady ---> NOT SEND TELEMETRY");
	}	
}


/*******************************************************************************************/

// Step 10, subscribe to topic1 and topic2
// > topic1: /oneM2M/req/+/AE-ID/json
// > topic2: /oneM2M/resp/AE-ID/+/json
function Init_subscribe_to_topic1_topic2() {
	////console.log(("JUMP  to Init_subscribe_to_topic1_topic2"));
	var topic_1 = '/oneM2M/req/+/' + DeviceID + '/json';
	var topic_2 = '/oneM2M/resp/' + DeviceID + '/+/json';

	// Step 10, subscribe to topic1: /oneM2M/reg/+/AE-ID/json
	mqttClient.Agent.subscribe(topic_1, {qos: 2}, function(err) {
		if (!err) {
		  ////console.log('MQTT Agent Subscribed to topic1: ' + topic_1);
		} else {
		  //console.log(('MQTT Client Agent ERROR Subscribed to topic1: ' + err));
		}
	});

	// Step 10, subscribe to topic2: /oneM2M/resp/AE-ID/+/json
	 mqttClient.Agent.subscribe(topic_2, {qos: 2}, function(err) {
		if (!err) {
		  ////console.log('MQTT Agent Subscribed to topic2: ' + topic_2);
		} else {
		  //console.log(('MQTT Client Agent ERROR Subscribed to topic2: ' + err));
		}
	});
}

// Create <container> request for config platform
// Create <subscription> request of config platform container
function oneplatform_config_register() {
	////console.log(("JUMP  to oneplatform_config_register --->>> ham (1)"));
	if (flag_container_receive_one_command == 0) 
	{									// Not created container for one platform config
		// Step 15, publish to topic: /oneM2M/req/AE-ID/CSE-ID/json
		var payload_req_cont_platform_command = crt_payload_req_cont_platform_command();	// Payload: Create <container> request for config platform
		////console.log(("Publish Request Creat Container Platform Command"));
		Agent_PublishData_To_Platform(topic_pub_req_command,payload_req_cont_platform_command);	// Create container for one platform config
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();	
	} else if (flag_subscription_receive_one_command == 0) 
	{						// Already created container for one platform config
		// Step 18, publish to topic: /oneM2M/req/AE-ID/CSE-ID/json
		var payload_req_sub_platform_command = crt_payload_req_sub_platform_command();	// Payload: Create <subscription> request of config platform container
		////console.log(("Publish Request Subscription Platform Command"));
		Agent_PublishData_To_Platform(topic_pub_req_command,payload_req_sub_platform_command);	// Create subscription for on platform config
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();
	} else {
		// Step 23, publish to topic: /oneM2M/req/AE-ID/CSE-ID/json
		application_commmand_register();											// Create container for application command
	}
}

// Create <container> request for command
// Create <subscription> request of command container
function application_commmand_register() {
	////console.log(("JUMP  to application_commmand_register --->>> ham (2)"));
	if (flag_container_receive_app_command == 0) {													// Not created container for application command
		// Step 23, publish to topic: /oneM2M/req/AE-ID/CSE-ID/json
		var payload_req_cont_application_command = crt_payload_req_cont_application_command();		// Payload: Create <container> request for command
		////console.log(("Publish Request Creat Container Application Command"));
		Agent_PublishData_To_Platform(topic_pub_req_command,payload_req_cont_application_command);	// Create container for application command
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();
	} else if (flag_subscription_receive_app_command == 0) {										// Already created container for application command
		// Step 26, publish to topic: /oneM2M/req/AE-ID/CSE-ID/json
		var payload_req_sub_application_command = crt_payload_req_sub_application_command();		// Payload: Create <subscription> request of command container
		////console.log(("Publish Request Subscription Application Command"));
		Agent_PublishData_To_Platform(topic_pub_req_command,payload_req_sub_application_command);	// Create subscription for application command
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();
	} else {
      	data_periodic_register();																	// Create container for telemetry
	}
}

// Create <container> request for telemetry
function data_periodic_register() {
	////console.log(("JUMP  to data_periodic_register --->>> ham (3)"));
	if (flag_container_send_data_periodic == 0) {													// Not created container for telemetry
		// Step 12, publish to topic: /oneM2M/req/AE-ID/CSE-ID/json
		var payload_req_cont_telemetry = crt_payload_req_cont_send_telemetry_command();				// Payload: Create <container> request for telemetry
		////console.log(("Publish Request Creat Container Telemetry"));
		Agent_PublishData_To_Platform(topic_pub_req_command,payload_req_cont_telemetry);			// Create container for telemetry
		/*set Timeout wait message response*/
		setTimeOutCheckResponseInit();		
	}
	else
	{
		ri.platform = read_ri_from_file("platform");
		ri.application = read_ri_from_file("application");

		if((ri.platform == "error")||(ri.platform == "")||(ri.platform == undefined)){
			Request_getback_ri_sub_cnt_platform_config();
		}
		else if((ri.application == "error")||(ri.application == "")||(ri.application == undefined)){
			Request_getback_ri_sub_cnt_command_application();
		}else if((ri.platform != "error")&&(ri.platform != "")&&(ri.platform != undefined)&&(ri.application != "error")&&(ri.application != "")&&(ri.application != undefined)){
			// //console.log(("--->>>>>>>>>>>>>>>>>>>>AGENT INIT DONE SUCCESS SUCCESS SUCCESS!!!<<<<<<<<<<<<<<<<<<<<<<<---"));
			/*Send status connected to Platform after inin done*/
			var send_status_connected_to_app = crt_send_status_connected_to_app("");
			Agent_PublishData_To_Platform(topic_pub_req_command,send_status_connected_to_app);
			//listSendConnected.pushDataSendConnected();
			Tooltest_Publish_Send_Connected(send_status_connected_to_app);
		}	
	}
}


/*********************************Creat payload to publish*********************************/
//req aeid
function crt_payload_req_AEID(){
	var payload_req_AEID = {};
	payload_req_AEID.fr = Username;
	payload_req_AEID.op = 1;
	payload_req_AEID.pc = {
	  "m2m:ae" : {
	    "api": api,
	    "rr" : true,
	    "poa": ["mqtt://" + Username],
	    "rn": DeviceName,
	    "srv" : ["3"] 
	  }
	};
	payload_req_AEID.rqi 			= rqi.aeid;
	payload_req_AEID.to  			= CSE_ID + CES_NAME;
	payload_req_AEID.ty  			= 2;
	payload_req_AEID.tkns 		 	= [];
	payload_req_AEID.tkns[0]		= token;
	return payload_req_AEID;
}

//req get back aeid
function crt_payload_get_back_AEID() {
	var payload_get_back_AEID = {};
	payload_get_back_AEID.fr = Username;
	payload_get_back_AEID.op = 2;
	payload_get_back_AEID.rqi 			= rqi.aeid;
	payload_get_back_AEID.to  			= CSE_ID + CES_NAME + '/' + DeviceName;
	payload_get_back_AEID.ty  			= 2;
	payload_get_back_AEID.tkns 		 	= [];
	payload_get_back_AEID.tkns[0]		= token;
	return payload_get_back_AEID;
}

//req get back ri container config_platform
function crt_payload_get_back_ri_cnt_config_platform(){
	////console.log("JUMP to crt_payload_get_back_ri_cnt_config_platform");
	var payload_get_back_ri_cnt_config_platform = {};
	payload_get_back_ri_cnt_config_platform.fr = Username;
	payload_get_back_ri_cnt_config_platform.op = 2;
	payload_get_back_ri_cnt_config_platform.rqi 			= rqi.subscription.platform;
	payload_get_back_ri_cnt_config_platform.to  			= CSE_ID + CES_NAME + '/' + DeviceName + '/' + rn.container.platform + '/' + rn.subscription.platform;
	payload_get_back_ri_cnt_config_platform.ty  			= 23;
	payload_get_back_ri_cnt_config_platform.tkns 		 	= [];
	payload_get_back_ri_cnt_config_platform.tkns[0]			= token;
	////console.log('payload_get_back_ri_cnt_config_platform: ',util.inspect(payload_get_back_ri_cnt_config_platform,false, null, true));
	return payload_get_back_ri_cnt_config_platform;
}

//req get back ri container command application
function crt_payload_get_back_ri_cnt_command_application(){
	////console.log("JUMP to crt_payload_get_back_ri_cnt_command_application");
	var payload_get_back_ri_cnt_command_application = {};
	payload_get_back_ri_cnt_command_application.fr = Username;
	payload_get_back_ri_cnt_command_application.op = 2;
	payload_get_back_ri_cnt_command_application.rqi 			= rqi.subscription.application;
	payload_get_back_ri_cnt_command_application.to  			= CSE_ID + CES_NAME + '/' + DeviceName + '/' + rn.container.application + '/' + rn.subscription.application;
	payload_get_back_ri_cnt_command_application.ty  			= 23;
	payload_get_back_ri_cnt_command_application.tkns 		 	= [];
	payload_get_back_ri_cnt_command_application.tkns[0]		= token;
	////console.log('payload_get_back_ri_cnt_command_application: ',util.inspect(payload_get_back_ri_cnt_command_application,false, null, true));
	return payload_get_back_ri_cnt_command_application;
}

/*Command Platform*/
// req container platform
function crt_payload_req_cont_platform_command(){ 			//Creat conatiner receiver command Platform
	var payload_req_cont_platform_command = {};
	payload_req_cont_platform_command.fr = AE_ID;
	payload_req_cont_platform_command.op = 1;
	payload_req_cont_platform_command.pc = {
	  "m2m:cnt" : {
	    "rn": rn.container.platform,
	  }
	};
	payload_req_cont_platform_command.rqi 	= rqi.container.platform;
	payload_req_cont_platform_command.to  	= CSE_ID + CES_NAME + '/' + DeviceName;
	payload_req_cont_platform_command.ty  	= 3;
	payload_req_cont_platform_command.tkns		= [];
	payload_req_cont_platform_command.tkns[0]	= token;
	return payload_req_cont_platform_command;
}

//req sub container platform
function crt_payload_req_sub_platform_command()
{
	var payload_req_sub_platform_command = {};
	payload_req_sub_platform_command.fr = AE_ID;
	payload_req_sub_platform_command.op = 1;
	payload_req_sub_platform_command.pc = {
	  "m2m:sub" : {
	    "rn": rn.subscription.platform,
	    "enc": {
	      "net": [3]
	    },
	    "nu": CSE_ID + '/' + AE_ID,
	    "nct": 1
	  }
	};
	payload_req_sub_platform_command.rqi 	= rqi.subscription.platform;
	payload_req_sub_platform_command.to  	= CSE_ID + CES_NAME + '/' + DeviceName + '/' + rn.container.platform;
	payload_req_sub_platform_command.ty  	= 23;
	payload_req_sub_platform_command.tkns 	= [];
	payload_req_sub_platform_command.tkns[0] = token;
	return	payload_req_sub_platform_command;
}


/*Command App*/
// req container App
function crt_payload_req_cont_application_command() 			//Creat conatiner receiver command App
{	
	var payload_req_cont_application_command = {};
	payload_req_cont_application_command.fr = AE_ID;
	payload_req_cont_application_command.op = 1;
	payload_req_cont_application_command.pc = {
	  "m2m:cnt" : {
	    "rn": rn.container.application,
	  }
	};
	payload_req_cont_application_command.rqi = rqi.container.application;
	payload_req_cont_application_command.to  = CSE_ID + CES_NAME + '/' + DeviceName;
	payload_req_cont_application_command.ty  = 3;
	payload_req_cont_application_command.tkns = [];
	payload_req_cont_application_command.tkns[0] = token;
	return payload_req_cont_application_command;
}
//req sub container App
function crt_payload_req_sub_application_command()
{
	var payload_req_sub_application_command = {};
	payload_req_sub_application_command.fr = AE_ID;
	payload_req_sub_application_command.op = 1;
	payload_req_sub_application_command.pc = {
	  "m2m:sub" : {
	    "rn": rn.subscription.application,
	    "enc": {
	      "net": [3]
	    },
	    "nu": CSE_ID + '/' + AE_ID,
	    "nct": 1
	  }
	};
	payload_req_sub_application_command.rqi = rqi.subscription.application;
	payload_req_sub_application_command.to  = CSE_ID + CES_NAME + '/' + DeviceName + '/' + rn.container.application;
	payload_req_sub_application_command.ty  = 23;
	payload_req_sub_application_command.tkns = [];
	payload_req_sub_application_command.tkns[0] = token;
	return payload_req_sub_application_command;
}

/*Send data to app (telemetry)*/
// command
function crt_payload_req_cont_send_telemetry_command()	//Creat container send telemetry
{
	var payload_req_cont_telemetry = {};
	payload_req_cont_telemetry.fr = AE_ID;
	payload_req_cont_telemetry.op = 1;
	payload_req_cont_telemetry.pc = {
	  "m2m:cnt" : {
	    "rn": rn.container.telemetry,
	  }
	};
	payload_req_cont_telemetry.rqi = rqi.container.telemetry;
	payload_req_cont_telemetry.to  = CSE_ID + CES_NAME + '/' + DeviceName; //+ '/' + rn.container.telemetry;
	payload_req_cont_telemetry.ty  = 3;
	payload_req_cont_telemetry.tkns = [];
	payload_req_cont_telemetry.tkns[0] = token;
	return payload_req_cont_telemetry;
}

//creat contentInstance to App
function crt_contenInstance_to_app_telemetry(strContent)
{
	var contentInstance_to_App = {};
	contentInstance_to_App.fr = AE_ID;
	contentInstance_to_App.op = 1;
	contentInstance_to_App.pc = {
	  "m2m:cin" : {
	    "cnf": "text/plains:0",
	    "con": strContent
	  }
	};
	contentInstance_to_App.rqi = Math.random();
	contentInstance_to_App.to  = CSE_ID + CES_NAME + '/' + DeviceName + '/' + rn.container.telemetry;
	contentInstance_to_App.ty  = 4;
	contentInstance_to_App.tkns = [];
	contentInstance_to_App.tkns[0] = token;
	return contentInstance_to_App;
}

function crt_contenInstance_to_app_command(strContent)
{
	var contentInstance_to_App = {};
	contentInstance_to_App.fr = AE_ID;
	contentInstance_to_App.op = 1;
	contentInstance_to_App.pc = {
	  "m2m:cin" : {
	    "cnf": "text/plains:0",
	    "con": strContent
	  }
	};
	contentInstance_to_App.rqi = Math.random();
	contentInstance_to_App.to  = CSE_ID + CES_NAME + '/' + DeviceName + '/' + rn.container.application;
	contentInstance_to_App.ty  = 4;
	contentInstance_to_App.tkns = [];
	contentInstance_to_App.tkns[0] = token;
	return contentInstance_to_App;
}

//creat send Status ConnectED to App
function crt_send_status_connected_to_app(moreData)
{
	var dataStatus 							= {};
	dataStatus.deviceId 					= AE_ID;
	dataStatus.deviceName 					= DeviceName;
	dataStatus.status 						= "connected";


	var send_status_connected_to_app = {};
	send_status_connected_to_app.fr = AE_ID;
	send_status_connected_to_app.op = 1;
	send_status_connected_to_app.pc = {
	  "m2m:cin" : {
	    "cnf": "text/plains:0",
	    "con": (JSON.stringify(dataStatus))
	  }
	};
	randomRqiCntDeviceStatus();
	send_status_connected_to_app.rqi = rqi.device_status;
	send_status_connected_to_app.to  = CSE_ID + CES_NAME + '/' + AppName + '/' + rn.container.status;
	send_status_connected_to_app.ty  = 4;
	send_status_connected_to_app.tkns = [];
	send_status_connected_to_app.tkns[0] = token;
	return send_status_connected_to_app;
}


//Creat response to platform after receive command
function crt_response_to_platform(str_rqi)
{
	var response_to_platform = {};
	response_to_platform.rsc = 2000;
	response_to_platform.rqi = str_rqi;
	response_to_platform.fr =  AE_ID;
	response_to_platform.to = CSE_ID;
	response_to_platform.tkns = [];
	response_to_platform.tkns[0] = token;
	return response_to_platform;
}

//---------------------------------------------------------------------------------------------

/*********************************Check field message receive*********************************/
function check_field_res_cnt_device_stt(messageparsed)
{
	if((JSON.stringify(messageparsed)).indexOf("m2m:cin") != -1)
	{
		if(messageparsed.rqi == rqi.device_status)
		{
			return 1;
		}
		else
			return 0;
	}
	else
		return 0;
}

function check_field_crt_aeid(messageparsed)
{
	if((JSON.stringify(messageparsed)).indexOf("m2m:ae") != -1)
	{
		if(messageparsed.rqi == rqi.aeid)
		{
			return 1;
		}
		else
			return 0;
	}
	else
		return 0;
}

function check_field_crt_cnt_platform_command(messageparsed)
{
	if((JSON.stringify(messageparsed)).indexOf("m2m:cnt") != -1)
	{
		if(messageparsed.rqi == rqi.container.platform)
		{
			if(messageparsed.pc["m2m:cnt"].rn == rn.container.platform)
			{
				return 1;
			}
			else 
				return 0;
		}
		else
			return 0;
	}
	else
		return 0;
}

function check_field_crt_cnt_application_command(messageparsed)
{
	if((JSON.stringify(messageparsed)).indexOf("m2m:cnt") != -1)
	{
		if(messageparsed.rqi == rqi.container.application)
		{
			if(messageparsed.pc["m2m:cnt"].rn == rn.container.application)
			{
				return 1;
			}
			else 
				return 0;
		}
		else
			return 0;
	}
	else
		return 0;
}

function check_field_crt_cnt_telemetry(messageparsed)
{
	if((JSON.stringify(messageparsed)).indexOf("m2m:cnt") != -1)
	{
		if(messageparsed.rqi == rqi.container.telemetry)
		{
			if(messageparsed.pc["m2m:cnt"].rn == rn.container.telemetry)
			{
				return 1;
			}
			else 
				return 0;
		}
		else
			return 0;
	}
	else
		return 0;
}

function check_field_sub_platform_command(messageparsed)
{
	if((JSON.stringify(messageparsed)).indexOf("m2m:sub") != -1)
	{
		if(messageparsed.rqi == rqi.subscription.platform)
		{

			return 1;
		}
		else
			return 0;
	}
	else
		return 0;
}

function check_field_sub_application_command(messageparsed)
{
	if((JSON.stringify(messageparsed)).indexOf("m2m:sub") != -1)
	{
		if(messageparsed.rqi == rqi.subscription.application)
		{

			return 1;
		}
		else
			return 0;
	}
	else
		return 0;
}



//----------------------------------------------------- Response conflict
function check_field_crt_aeid_conflict(messageparsed)
{
		// //console.log("JUMP to check_field_crt_aeid_conflict");
		// //console.log("messageparsed.rqi: ",messageparsed.rqi);
		// //console.log("rqi.aeid: ",rqi.aeid);
		if(messageparsed.rqi == rqi.aeid)
		{
			//console.log("check rqi SUCCESS");
			return 1;
		}
		else{
			//console.log("check rqi ERROR");
			return 0;
		}
}

function check_field_crt_cnt_platform_command_conflict(messageparsed)
{
		// //console.log("JUMP to check_field_crt_cnt_platform_command_conflict");
		// //console.log("messageparsed.rqi: ",messageparsed.rqi);
		// //console.log("rqi.subscription.platform: ",rqi.container.platform);
		if(messageparsed.rqi == rqi.container.platform)
		{
			//console.log("check rqi SUCCESS");
			return 1;
		}
		else{
			//console.log("check rqi ERROR");
			return 0;
		}
}

function check_field_crt_cnt_application_command_conflict(messageparsed)
{
		// //console.log("JUMP to check_field_crt_cnt_application_command_conflict");
		// //console.log("messageparsed.rqi: ",messageparsed.rqi);
		// //console.log("rqi.subscription.platform: ",rqi.container.telemetry);
		if(messageparsed.rqi == rqi.container.application)
		{
			//console.log("check rqi SUCCESS");
			return 1;
		}
		else{
			//console.log("check rqi ERROR");
			return 0;
		}
}

function check_field_crt_cnt_telemetry_conflict(messageparsed)
{
		// //console.log("JUMP to check_field_crt_cnt_telemetry_conflict");
		// //console.log("messageparsed.rqi: ",messageparsed.rqi);
		// //console.log("rqi.subscription.platform: ",rqi.container.telemetry);
		if(messageparsed.rqi == rqi.container.telemetry)
		{
			//console.log("check rqi SUCCESS");
			return 1;
		}
		else{
			//console.log("check rqi ERROR");
			return 0;
		}
}

function check_field_sub_platform_command_conflict(messageparsed)
{
		// //console.log("JUMP to check_field_sub_platform_command_conflict");
		// //console.log("messageparsed.rqi: ",messageparsed.rqi);
		// //console.log("rqi.subscription.platform: ",rqi.subscription.platform);
		if(messageparsed.rqi == rqi.subscription.platform)
		{
			//console.log("check rqi SUCCESS");
			return 1;
		}
		else{
			//console.log("check rqi ERROR");
			return 0;
		}
}

function check_field_sub_application_command_conflict(messageparsed)
{
		// //console.log("JUMP to check_field_sub_application_command_conflict");
		// //console.log("messageparsed.rqi: ",messageparsed.rqi);
		// //console.log("rqi.subscription.application: ",rqi.subscription.application);
		if(messageparsed.rqi == rqi.subscription.application)
		{
			//console.log("check rqi SUCCESS");
			return 1;
		}
		else{
			//console.log("check rqi ERROR");
			return 0;
		}
}
//---------------------------------------------------------------------------------------------

function check_flag_init_done () {
	var flag_Init_Done_check = flag_AEID * flag_container_receive_one_command * flag_subscription_receive_one_command * flag_container_receive_app_command * flag_subscription_receive_app_command * flag_container_send_data_periodic; 
	return flag_Init_Done_check;
}

/***************************Communicate with Gateway by MQTT Local***************************/
/*Connect to MQTT Broker Local on Gateway when init done!!!*/
var agentConneted = 0;

/*Publish data command to Gateway*/
function Agent_PublishData_To_Application_Command(message)
{
		//console.log(("JUMP  to Agent_PublishData_To_Application_Command"));
	    var channel = Config.MQTT_TOPIC_AGENT_TO_APP;
	    var payload = message;
	    try {
	      mqttClient.Agent.publish(channel, (payload), {qos: 2}, function(e) {
	      //console.log(('MQTT Agent Published to Gateway:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      console.log(('Error Agent attempting to publish commands to Gateway: ' + e));
	    }
}

/*Publish data response to Gateway*/
function Agent_PublishData_To_Gateway_Response(message)
{
		//console.log(("JUMP  to Agent_PublishData_To_Gateway_Response"));
	    var channel = Topic_Pub_To_Gateway_Response;
	    var payload = message;
	    try {
	      mqttClient.Agent.publish(channel,  JSON.stringify(payload), {qos: 0}, function(e) {
	      //console.log(('MQTT Agent Published to Gateway:' + '\nTopic:' + channel + '\nPayload: ' + JSON.stringify(payload)));
	      });
	    } catch (e) {
	      console.log(('Error Agent attempting to publish response to Gateway: ' + e));
	    }
}
//---------------------------------------------------------------------------------------------


/***************************Handle command of Platform***************************/
function Handle_Command_Platform(commandPlatform) {
    var messageParsed = JSON.parse(commandPlatform);
    if (messageParsed.hasOwnProperty('accessToken')) {
        ////console.log(('SUCCESS hasOwnProperty accessToken'));
        newToken = messageParsed.accessToken;
        if ((newToken == "") || (newToken == undefined)) {
            //console.log(('Error read NEW TOKEN'));
        } else {
            ////console.log("New Token-- " + newToken);
            write_data_login("token", newToken);
            //Update username, password of mqtt local with mobile
            // mqttEncrypts.updateUserDataMQTT();
            //RESTART AGENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            reStartThisProcess();
        }
    } else {
        //console.log(('ERROR , DONT hasOwnProperty accessToken'));
    }
}
//---------------------------------------------------------------------------------------------

/************************Recall Process Init************************/
function recall_init() {
	////console.log("JUMP to recall_init");
	flag_Init_Done = check_flag_init_done();
	if(flag_Init_Done != 1) //If process init with platform not DONE -> try init
	{
		if (flag_AEID != 1) {					// Not gotten AE-ID yet
		  	////console.log('NOT HAVE AEID yet');
		  	Request_AE_ID();	// Publish to request AE-ID
		}else{//01/12/2020
			oneplatform_config_register(); 
		}
	}else{
		//console.log("rsc 4008 from Platform but Im not Process");
	}
}


/******************************Start Agent Process********************************/
function start_agent_logic_process()
{
	if (flag_AEID != 1) {					// Not gotten AE-ID yet
		////console.log('NOT HAVE AEID yet');
		Request_AE_ID();	// Publish to request AE-ID
	}else{//01/12/2020
		oneplatform_config_register(); 
	}
}

// >>>>>>>>>>>>>>>>>>>>>>>>> ---- <<<<<<<<<<<<<<<<<<<<<<<<<<<<< //
// >>>>>>>>>>>>>>>>>>>>>>>>> MAIN <<<<<<<<<<<<<<<<<<<<<<<<<<<<< //
// >>>>>>>>>>>>>>>>>>>>>>>>> ---- <<<<<<<<<<<<<<<<<<<<<<<<<<<<< //



/*Define Topic Communicate with Gateway*/
var Topic_Pub_To_Gateway_Command;
Topic_Pub_To_Gateway_Command = "MessageOutSideAgentToAgentProcessCommand";
var Topic_Pub_To_Gateway_Response;
Topic_Pub_To_Gateway_Response = "MessageOutSideAgentToAgentProcessResponse";

// var Topic_Sub_From_Gateway_Command;
// Topic_Sub_From_Gateway_Command = Topic.getData("/topic/GatewayToAgentCommand");
// var Topic_Sub_From_Gateway_Telemetry;
// Topic_Sub_From_Gateway_Telemetry = Topic.getData("/topic/GatewayToAgentTelemetry");
// var Topic_Sub_From_Gateway_Cnt_Device_Status;
// Topic_Sub_From_Gateway_Cnt_Device_Status = Topic.getData("/topic/GatewayToAgentDeviceStatus");


/*Define AE_ID*/
var AE_ID;

/*Define flags*/
var flag_AEID;
var flag_container_receive_one_command;
var flag_subscription_receive_one_command;
var flag_container_receive_app_command;
var flag_subscription_receive_app_command;
var flag_container_send_data_periodic;

/*Define string*/

var api = "vn.vnpttech.agritech";

var rn_container_status = RN.getData("/rn/container/status/");
////console.log("--------->>>>>>>>>rn_container_status: " + rn_container_status);
var rn_container_application = RN.getData("/rn/container/application/");
////console.log("--------->>>>>>>>>rn_container_application: " + rn_container_application);
var rn_container_platform = RN.getData("/rn/container/platform/");
////console.log("--------->>>>>>>>>rn_container_platform: " + rn_container_platform);
var rn_container_telemetry = RN.getData("/rn/container/telemetry/");
////console.log("--------->>>>>>>>>rn_container_telemetry: " + rn_container_telemetry);
var rn_subscription_application = RN.getData("/rn/subscription/application/");
////console.log("--------->>>>>>>>>rn_subscription_application: " + rn_subscription_application);
var rn_subscription_platform = RN.getData("/rn/subscription/platform/");
////console.log("--------->>>>>>>>>rn_subscription_platform: " + rn_subscription_platform);

var rn = {
	container:
	{
		application 	: rn_container_application,
		platform 		: rn_container_platform,
		telemetry 		: rn_container_telemetry,
		status 			: rn_container_status
	},
	subscription:
	{
		application 	: rn_subscription_application,
		platform 		: rn_subscription_platform		
	}
};

/*Define rqi*/
var rqi = {
	aeid:"m_creartAE" + (Math.random()).toString(),
	container:
	{
		application:"m_createCont_appCommand" + (Math.random()).toString(),
		platform:"m_createCont_platformCommand" + (Math.random()).toString(),
		telemetry:"m_createCont_telemetry" + (Math.random()).toString()
	},
	subscription:
	{
		application:"m_createSub_appCommand" + (Math.random()).toString(),
		platform:"m_createSub_platformCommand" + (Math.random()).toString(),		
	},
	contentInstance : "m_createCin8558" + (Math.random()).toString(),
	device_status : ""
};
/*
var rqi = {
	aeid:"m_creartAE",
	container:
	{
		// application:"m_createCont8558",
		// platform:"m_createCont5885",
		// telemetry:"m_createCont6868",
		application:"m_createCont_appCommand",
		platform:"m_createCont_platformCommand",
		telemetry:"m_createCont_telemetry"
	},
	subscription:
	{
		// application:"m_createSub8558",
		// platform:"m_createSub5885"
		application:"m_createSub_appCommand",
		platform:"m_createSub_platformCommand",		
	},
	contentInstance : "m_createCin8558",
	device_status : ""
};
*/

function randomRqiCntDeviceStatus () {
	rqi.device_status = "cnt_device_status" + (Math.random()).toString();
}

/*Define ri*/
var ri = {
	application:null,
	platform:null
};

/*Get Username(DeviceID), Password(Token) from file*/
var Username;
var Password;
var DeviceName;
var AppName;

try {
	Username = Loggin.getData("/Loggin/deviceID");
} catch (e) {
	Username = "";
}

try {
	Password = Loggin.getData("/Loggin/token");
} catch (e) {
	Password = "";
}

try {
	DeviceName = Loggin.getData("/Loggin/deviceName");
} catch (e) {
	DeviceName = "";
}

try {
	AppName = Loggin.getData("/Loggin/appName");
} catch (e) {
	AppName = "";
}

var token;
token = Password;

var DeviceID;
DeviceID = Username;
var Credential_ID;
Credential_ID = DeviceID;

/*Get flag from file*/
flag_AEID 								= read_flag_from_file("flag_AEID");
flag_container_receive_one_command 		= read_flag_from_file("flag_container_receive_one_command");
flag_subscription_receive_one_command 	= read_flag_from_file("flag_subscription_receive_one_command");
flag_container_receive_app_command 		= read_flag_from_file("flag_container_receive_app_command");
flag_subscription_receive_app_command	= read_flag_from_file("flag_subscription_receive_app_command");
flag_container_send_data_periodic 		= read_flag_from_file("flag_container_send_data_periodic");
var flag_Init_Done = check_flag_init_done();
// //console.log("flag_Init_Done ---> ",flag_Init_Done);

/*Get AE_ID from file*/
AE_ID =	Get_AE_ID_frm_file();


/*Get ri from file*/
if(flag_subscription_receive_one_command == 1)
{
	ri.platform = read_ri_from_file("platform");
}
if(flag_subscription_receive_app_command == 1)
{
	ri.application = read_ri_from_file("application");
}

var CSE_ID;
var CES_NAME;
CSE_ID 		= "/in-cse";
CES_NAME	= "/in-name";

var topic_pub_req_command;
var topic_sub_req_command;
var topic_sub_receive_command;
var topic_pub_response_command;
var topic_pub_req_AEID;
var topic_sub_req_AEID;

// topic_pub_req_AEID 		= '/oneM2M/reg_req/' + Credential_ID  + CSE_ID + '/json';
topic_pub_req_AEID 		= '/oneM2M/req/' + Credential_ID  + CSE_ID + '/json';
////console.log("topic_pub_req_AEID: ", topic_pub_req_AEID);
// topic_sub_req_AEID 		= '/oneM2M/reg_resp/' + Credential_ID  + CSE_ID + '/json';
topic_sub_req_AEID 		= '/oneM2M/resp/' + Credential_ID  + CSE_ID + '/json';

////console.log("topic_sub_req_AEID: ", topic_sub_req_AEID);

if ((AE_ID == "") || (AE_ID == undefined))
{
	//console.log(("I do NOT have AE_ID"));
}
else
{
	////console.log(("I ALREADY have AE_ID"));
	topic_pub_req_command 	= '/oneM2M/req' + '/' + AE_ID + CSE_ID + '/json';
	////console.log(("topic_pub_req_command: " + topic_pub_req_command));
	topic_sub_req_command 	= '/oneM2M/resp/' + AE_ID +  CSE_ID + '/json'; //NOT USE
	////console.log(("topic_sub_req_command: " + topic_sub_req_command));
	topic_sub_receive_command   = '/oneM2M/req' + CSE_ID + '/' + AE_ID  + '/json';
	////console.log(("topic_sub_receive_command: " + topic_sub_receive_command));
	topic_pub_response_command  = '/oneM2M/resp' + CSE_ID + '/' + AE_ID  + '/json';
	////console.log(("topic_pub_response_command: " + topic_pub_response_command));
}

if((Username == "")||(Password == "")||(Username == undefined)||(Password == undefined))	// N?u chua c�: B�o l?i chua c� User, Pass --> d?ng chuong tr�nh 
{
	//console.log(("ERROR: Can not get Username and Password!!!"));
}
else
{
	console.log(("Get Username and Password SUCCESS!!!, START AGENT"));

  	var optionsAgent = {
	   port: 1883,
	   host: "127.0.0.1",
	};

	// Step 2, connect to mqtt broker
	mqttClient.Agent =  mqtt.connect(optionsAgent);
														
	mqttClient.Agent.on('connect', function() {
		//console.log('MQTT Client Agent connected to Platform ');

		Init_subscribe_to_topic1_topic2();

		subscribe_to_topic_application();

		subscribe_to_topic_adapter();
  	});

	mqttClient.Agent.on('error', function() {
	  // //console.log(('MQTT Client Agent CONNECT to PLATFORM ERROR:'));
	});

	//MQTT Handle MQTT Message receive
	mqttClient.Agent.on('message', function(topic, message) {
		////console.log(('message from PLATFORM is comming!!!!'));
		////console.log("topic: ", topic);
	  try {
	    var messageParsed = JSON.parse(message);
	    console.log("message from PLATFORM is comming ---> topic: ", topic);
	    console.log('message from PLATFORM is comming ---> payload: ',util.inspect(messageParsed,false, null, true));
	    Tooltest_Publish_Receive_2001_Cnt_Telemetry_And_Command(messageParsed);

	    switch (topic) {

	      case topic_sub_req_AEID:
	       {
				////console.log(("JUMP  to receive message for topic_sub_req_AEID"));
				/*Set flag: message response in Init process is comming*/
				flag_message_response_comming = 1;

				if (messageParsed.rsc == "2001") {
					//console.log("RESPONSE 2001 ---> SUCCESS SUCCESS SUCCESS OK");
					Agent_PublishData_To_Gateway_Response(messageParsed);

					if(check_field_res_cnt_device_stt(messageParsed) == 1) //18/12/2020
					{
						console.log("------------>>>>>>>>>> CONNECTED TO PLATFORM SUCCESS  <<<<<<<<<--------------");
						flagConnetedToPlatform = 1;
					}
					else if(check_field_crt_aeid(messageParsed) == 1)						// Step 8, pass check field create AE-ID response
					{
						////console.log(("check_field_crt_aeid pass"));
						AE_ID = Get_AE_ID_frm_mess(messageParsed);						// Get AE-ID
						if (AE_ID == "" || AE_ID == undefined) {						// AE-ID is not failure
							Request_AE_ID();											// Request AE-ID again
						} else {
							topic_pub_req_command 	= '/oneM2M/req' + '/' + AE_ID + CSE_ID + '/json';						//creat topic pub req command
							////console.log(("topic_pub_req_command: " + topic_pub_req_command));
							topic_sub_req_command 	= '/oneM2M/resp/' + AE_ID +  CSE_ID + '/json';							//creat topic sub req command
							////console.log(("topic_sub_req_command: " + topic_sub_req_command));
							topic_sub_receive_command   = '/oneM2M/req' + CSE_ID + '/' + AE_ID  + '/json';
							////console.log(("topic_sub_receive_command: " + topic_sub_receive_command));	//creat topic sub receive command
					     	topic_pub_response_command  = '/oneM2M/resp' + CSE_ID + '/' + AE_ID  + '/json';
					     	////console.log(("topic_pub_response_command: " + topic_pub_response_command));	//creat topic pub response command

					     	flag_AEID = 1;        										// Set flag
					    	write_AEID_to_file(AE_ID);									// Write AE_ID to file
					    	write_flag_to_file("flag_AEID",flag_AEID);					// Write flag to file
							oneplatform_config_register();     							//	request container and subcription		
						}      		
					}
					else if (check_field_crt_cnt_platform_command(messageParsed) == 1) {											// Response of Create container for platform config
						////console.log(("check_field_crt_cnt_platform_command pass"));
						flag_container_receive_one_command = 1;																// Set flag
						write_flag_to_file("flag_container_receive_one_command",flag_container_receive_one_command);		// Write flag to file
						oneplatform_config_register();																		// Create subscription for on platform config, goi ham 1
					} else if (check_field_sub_platform_command(messageParsed) == 1) {										// Response of Create subscription for platform config
						////console.log(("check_field_sub_platform_command pass"));
						flag_subscription_receive_one_command = 1;
						ri.platform = Get_ri_frm_mess(messageParsed);
						write_flag_to_file("flag_subscription_receive_one_command",flag_subscription_receive_one_command);	// Write flag to file
						write_ri_to_file("platform",ri.platform);
						application_commmand_register();																	// Create container for application command, goi ham 2
					} else if (check_field_crt_cnt_application_command(messageParsed) == 1) {								// Response of Create container for application command
						////console.log(("check_field_crt_cnt_application_command pass"));
						flag_container_receive_app_command = 1;																// Set flag
						write_flag_to_file("flag_container_receive_app_command",flag_container_receive_app_command);		// Write flag to file
						application_commmand_register();																	// Create subscription for on platform config
					} else if (check_field_sub_application_command(messageParsed) == 1) {									// Response of Create subscription for on platform config
						////console.log(("check_field_sub_application_command pass"));
						flag_subscription_receive_app_command = 1;			
						ri.application = Get_ri_frm_mess(messageParsed);												// Set flag
						write_flag_to_file("flag_subscription_receive_app_command",flag_subscription_receive_app_command);	// Write flag to file
						write_ri_to_file("application",ri.application);					
						data_periodic_register();																			// Create container for telemetry
					} else if (check_field_crt_cnt_telemetry(messageParsed) == 1) { 										// Response of Create container for telemetry
						////console.log(("check_field_crt_cnt_telemetry pass"));
						flag_container_send_data_periodic = 1;						// Set flag
						write_flag_to_file("flag_container_send_data_periodic",flag_container_send_data_periodic);			// Write flag to file      	
						data_periodic_register();	
					}
				}

				else if (messageParsed.rsc == "2000") {
					////console.log("RESPONSE 2000 ---> SUCCESS SUCCESS SUCCESS OK");
					if(check_field_crt_aeid_conflict(messageParsed) == 1)						// Step 8, pass check field create AE-ID response
					{
						////console.log(("check_field_crt_aeid pass"));
						AE_ID = Get_AE_ID_frm_mess(messageParsed);						// Get AE-ID
						if (AE_ID == "" || AE_ID == undefined) {						// AE-ID is not failure
							Request_AE_ID();											// Request AE-ID again
						} else {
							topic_pub_req_command 	= '/oneM2M/req' + '/' + AE_ID + CSE_ID + '/json';						//creat topic pub req command
							////console.log(("topic_pub_req_command: " + topic_pub_req_command));
							topic_sub_req_command 	= '/oneM2M/resp/' + AE_ID +  CSE_ID + '/json';							//creat topic sub req command
							////console.log(("topic_sub_req_command: " + topic_sub_req_command));
							topic_sub_receive_command   = '/oneM2M/req' + CSE_ID + '/' + AE_ID  + '/json';
							////console.log(("topic_sub_receive_command: " + topic_sub_receive_command));	//creat topic sub receive command
					     	topic_pub_response_command  = '/oneM2M/resp' + CSE_ID + '/' + AE_ID  + '/json';
					     	////console.log(("topic_pub_response_command: " + topic_pub_response_command));	//creat topic pub response command

					     	flag_AEID = 1;        										// Set flag
					    	write_AEID_to_file(AE_ID);									// Write AE_ID to file
					    	write_flag_to_file("flag_AEID",flag_AEID);					// Write flag to file
							oneplatform_config_register();     							//	request container and subcription		
						}      		
					}
					else if (check_field_crt_cnt_platform_command_conflict(messageParsed) == 1) {											// Response of Create container for platform config
						////console.log(("check_field_crt_cnt_platform_command pass"));
						flag_container_receive_one_command = 1;																// Set flag
						write_flag_to_file("flag_container_receive_one_command",flag_container_receive_one_command);		// Write flag to file
						oneplatform_config_register();																		// Create subscription for on platform config, goi ham 1
					} else if (check_field_sub_platform_command_conflict(messageParsed) == 1) {										// Response of Create subscription for platform config
						////console.log(("check_field_sub_platform_command pass"));
						flag_subscription_receive_one_command = 1;
						ri.platform = Get_ri_frm_mess(messageParsed);															// Set flag
						write_flag_to_file("flag_subscription_receive_one_command",flag_subscription_receive_one_command);	// Write flag to file
						write_ri_to_file("platform",ri.platform);
						application_commmand_register();																	// Create container for application command, goi ham 2
					} else if (check_field_crt_cnt_application_command_conflict(messageParsed) == 1) {								// Response of Create container for application command
						////console.log(("check_field_crt_cnt_application_command pass"));
						flag_container_receive_app_command = 1;																// Set flag
						write_flag_to_file("flag_container_receive_app_command",flag_container_receive_app_command);		// Write flag to file
						application_commmand_register();																	// Create subscription for on platform config
					} else if (check_field_sub_application_command_conflict(messageParsed) == 1) {									// Response of Create subscription for on platform config
						////console.log(("check_field_sub_application_command pass"));
						flag_subscription_receive_app_command = 1;
						ri.application = Get_ri_frm_mess(messageParsed);															// Set flag
						write_flag_to_file("flag_subscription_receive_app_command",flag_subscription_receive_app_command);	// Write flag to file
						write_ri_to_file("application",ri.application);			
						data_periodic_register();																			// Create container for telemetry
					} else if (check_field_crt_cnt_telemetry_conflict(messageParsed) == 1) { 										// Response of Create container for telemetry
						////console.log(("check_field_crt_cnt_telemetry pass"));
						flag_container_send_data_periodic = 1;						// Set flag
						write_flag_to_file("flag_container_send_data_periodic",flag_container_send_data_periodic);			// Write flag to file      	
						data_periodic_register();	
					}
				}

				else if(messageParsed.rsc == "4105") {
					////console.log("RESPONSE 4105 ---> CONFLICT CONFLICT CONFLICT");
					if(check_field_crt_aeid_conflict(messageParsed) == 1)						// Step 8, pass check field create AE-ID response
					{
						////console.log(("RESPONSE of request create AEID"));
						////console.log(("Conflict -> request getback AEID"));
						Request_getback_AE_ID();											// Request AE-ID again     		
					}
					else if (check_field_crt_cnt_platform_command_conflict(messageParsed) == 1) {											// Response of Create container for platform config
						////console.log(("RESPONSE of request CREATE container platform_config"));
						////console.log(("Conflict -> set flag, next step to SUB container platform_config"));
						flag_container_receive_one_command = 1;																// Set flag
						write_flag_to_file("flag_container_receive_one_command",flag_container_receive_one_command);		// Write flag to file
						oneplatform_config_register();	
					} else if (check_field_sub_platform_command_conflict(messageParsed) == 1) {
						////console.log(("RESPONSE of request create SUB platform_config"));
						////console.log(("Conflict ->request getback ri SUB container platform_config"));
						Request_getback_ri_sub_cnt_platform_config();											// Create container for application command, goi ham 2
					} else if (check_field_crt_cnt_application_command_conflict(messageParsed) == 1) {		
						////console.log(("RESPONSE of request CREATE container command application"));
						////console.log(("Conflict -> set flag, next step to SUB container command application"));
						flag_container_receive_app_command = 1;																// Set flag
						write_flag_to_file("flag_container_receive_app_command",flag_container_receive_app_command);		// Write flag to file
						application_commmand_register();
					} else if (check_field_sub_application_command_conflict(messageParsed) == 1) {									// Response of Create subscription for on platform config
						////console.log(("RESPONSE of request create SUB command application"));
						////console.log(("Conflict ->request getback ri SUB container platform_config"));
						Request_getback_ri_sub_cnt_command_application();																			// Create container for telemetry
					} else if (check_field_crt_cnt_telemetry_conflict(messageParsed) == 1) { 										// Response of Create container for telemetry
						////console.log(("check_field_crt_cnt_telemetry pass"));
						flag_container_send_data_periodic = 1;						// Set flag
						write_flag_to_file("flag_container_send_data_periodic",flag_container_send_data_periodic);			// Write flag to file      	
						data_periodic_register();	
					}else {
						//console.log("CHECK field ALL ERROR");
					}					
				}
				else if(messageParsed.rsc == "4008") {
					////console.log("RESPONSE 4008 ---> TIMEOUT TIMEOUT TIMEOUT ");
					Tooltest_Publish_Send_Not_Support_RSC(messageParsed);
					/*Recall Process Init*/
					recall_init();
				}
				else {
					////console.log("NOT SUPPORT rsc");
					Tooltest_Publish_Send_Not_Support_RSC(messageParsed);
				}   								
				break;
	       }

	       case topic_sub_receive_command:
	       {
	       		////console.log(("JUMP  to receive message for topic_sub_receive_command --->>> receive COMMAND"));
	       		if(messageParsed.to == ('/' + AE_ID))
	       		{
		       		if(messageParsed.pc["m2m:sgn"].sur == ri.platform)
		       		{
		       			////console.log(("--->>>SUCCESS SUCCESS SUCCESS Pass check field rqi --->>> RECEIVE COMMAND of PLATFORM"));
		       			////console.log('messageParsed: ',util.inspect(messageParsed,false, null, true));
		       			
		       			var contentPlatform = (messageParsed.pc["m2m:sgn"].nev.rep["m2m:cin"].con).replace(/\\/gi, "");
		       			////console.log(("contentPlatform: " + contentPlatform));

		       			var payload_send_response_to_platform = crt_response_to_platform((messageParsed.rqi).toString());		//Send Response
		  				Agent_PublishData_To_Platform(topic_pub_response_command,payload_send_response_to_platform);

		  				Handle_Command_Platform(contentPlatform);																//Handle command
		       		}
		       		else if(messageParsed.pc["m2m:sgn"].sur == ri.application)
		       		{
		       			////console.log(("--->>>Pass check field rqi--->>>RECEIVE COMMAND of APPLICATION"));
		       			////console.log('messageParsed: ',util.inspect(messageParsed,false, null, true));
		       			var contentApp = (messageParsed.pc["m2m:sgn"].nev.rep["m2m:cin"].con);	

		       			////console.log(("content: " + contentApp));
		        		var payload_send_response_to_platform = crt_response_to_platform((messageParsed.rqi).toString());
		  				Agent_PublishData_To_Platform(topic_pub_response_command,payload_send_response_to_platform);			//Send response to Platform after reveive command
		       			
		       			Agent_PublishData_To_Application_Command(contentApp);     															//Send command to Gateway after parse and get content
		       			//Tooltest_Publish_Receive_Cnt_Command(messageParsed);
		       		}
		       		else{
		       			console.log(("Check field RQI FAIL!!!"));
		       		}
	       		}
	       		else{
	       			//console.log(("ERROR COMMAND because wrong destination"));
	       		}
	       		break;       		
	       }

		   case Config.MQTT_TOPIC_ADAPTER_TO_AGENT: 
		   {
				console.log('Message From Adapter: ', messageParsed);
				handle_message_adapter(messageParsed);
				break;
		   }

		   case Config.MQTT_TOPIC_APP_TO_AGENT_TELEMETRY: 
		   {
				console.log('Message From App Telemetry: ', messageParsed);
				handle_application_telemetry(messageParsed);
				break;
		   }

	       default:
		   {
				console.log("ERROR Wrong Topic: ",topic);
				break;
		   }
	    }

	  } catch (e) {
	    console.log(('Error Parsing MQTT Received from Platform: ' + e + ' \ntopic: '+ topic + '\nmessage: ' + message));
	  }
	});
}
