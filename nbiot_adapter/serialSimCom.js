const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
var events = require('events');

class simTransport {
	#port;
	#parser;
	eventEmmiter;
	mqtt_mess_flag;
	data_merge_buffer;

	constructor() {
		this.eventEmmiter = new events.EventEmitter();
	};

	connect(option) {
		this.port = new SerialPort(option);
		this.parser = this.port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
		this.listent();
		return this.eventEmmiter;
	};

	listent() {
		let that = this;

		that.parser.on('data', function(data) {
			//console.log('receive:'+data.toString());
			console.log(data.toString());

			// Begin of mqtt message
			if (data.toString().includes("CMQTTRXSTART")) {
				that.mqtt_mess_flag = true;
				that.data_merge = "";
				that.data_merge += data.toString();
				//console.log(that.data_merge);

			// End of mqtt message
			} else if (data.toString().includes("CMQTTRXEND")) {
				that.mqtt_mess_flag = false;
				that.data_merge += data.toString();
				//console.log(that.data_merge);
				that.handle_simcom_mqtt_mess(that.data_merge);

			// Merging mqtt message
			} else if (that.mqtt_mess_flag == true) {
				that.data_merge += data.toString();
				//console.log(that.data_merge);
			
			// Other simcom response message
			} else {
				that.handle_simcom_resp_mess(data.toString());
			}
		})		
	}

	handle_simcom_mqtt_mess(msg) {
		//console.log("handle_simcom_mqtt_mess: ", msg);
		this.eventEmmiter.emit('mqtt_message',msg);
	};

	handle_simcom_resp_mess(msg) {
		//console.log("handle_simcom_resp_mess: ", msg);
		this.eventEmmiter.emit('resp_message',msg);
	};

	send(msg) {
		this.port.write(msg, function(err) {
			//console.log('send:'+msg.toString());
			if (err) {
				console.log('Error on write: ', err.message)
			}


		})		
	};
}

let serialSimCom = new simTransport;

module.exports = serialSimCom;