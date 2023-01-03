var config = {
    MQTT_BROKER_LOCAL_PORT      :   1883,
    MQTT_BROKER_LOCAL_ADDRESS   :   '127.0.0.1',

    MQTT_TOPIC_APP_TO_AGENT_TELEMETRY        : "Application_To_Agent_TELEMETRY",
    MQTT_TOPIC_APP_TO_AGENT_STATUS           : "Application_To_Agent_STATUS",
    MQTT_TOPIC_APP_TO_AGENT_RESPONSE         : "Application_To_Agent_RESPONSE",

    MQTT_TOPIC_AGENT_TO_APP                  : "Agent_To_Application",

    DefaultUT                                : 20000,
};

module.exports = config;