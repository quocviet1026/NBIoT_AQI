var config = {
    MQTT_BROKER_LOCAL_PORT: 1883,
    MQTT_BROKER_LOCAL_ADDRESS: '127.0.0.1',

    MQTT_TOPIC_APP_TO_AGENT_TELEMETRY: "Application_To_Agent_TELEMETRY",
    MQTT_TOPIC_APP_TO_AGENT_STATUS: "Application_To_Agent_STATUS",
    MQTT_TOPIC_APP_TO_AGENT_RESPONSE: "Application_To_Agent_RESPONSE",

    MQTT_TOPIC_AGENT_TO_APP: "Agent_To_Application",

    DefaultUT: 60000,

    Hour: 23,
    Minute: 59,
    ArrDayOfWeek: [0, 1, 2, 3, 4, 5, 6],

    GoodAtmosphere: {
        Temp: [20, 30],
        Humi: [40, 60],
        Press: [300, 1000],
        CO: [0, 9],
        NO2: [0, 10],
        SO2: [0, 7],
        O3: [2, 5],
        PM2_5: [0, 50],
        PM10: [0, 50],
        AQIS: [0, 50]
    },

    BadAtmosphere: {
        Temp: [40, 50],
        Humi: [40, 60],
        Press: [300, 1000],
        CO: [100, 300],
        NO2: [50, 100],
        SO2: [8, 20],
        O3: [20, 100],
        PM2_5: [101, 300],
        PM10: [101, 300],
        AQIS: [101, 300]
    },

    AQIConditionGood: false,
};

module.exports = config;