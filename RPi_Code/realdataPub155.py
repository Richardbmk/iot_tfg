import Adafruit_DHT
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
from time import sleep
from datetime import date, datetime
import bme680
import time


# AWS IoT certificate based connection
myMQTTClient = AWSIoTMQTTClient("")
myMQTTClient.configureEndpoint("a3v600sq9kqevf-ats.iot.us-east-1.amazonaws.com", 8883)
myMQTTClient.configureCredentials("certs/x590_root.crt", "certs/d68c299b76-private.pem.key",
                                  "certs/d68c299b76-certificate.pem.crt")
myMQTTClient.configureOfflinePublishQueueing(-1)  # Infinite offline Publish queueing
myMQTTClient.configureDrainingFrequency(2)  # Draining: 2 Hz
myMQTTClient.configureConnectDisconnectTimeout(10)  # 10 sec
myMQTTClient.configureMQTTOperationTimeout(5)  # 5 sec

# connect and publish
myMQTTClient.connect()
myMQTTClient.publish("thing02/info", "connected", 0)


sensor1 = Adafruit_DHT.DHT22
pin = 17 # GPIO 17

####### BME680 NEW SENSOR ############################
try:
    sensor = bme680.BME680(bme680.I2C_ADDR_PRIMARY)
except IOError:
    sensor = bme680.BME680(bme680.I2C_ADDR_SECONDARY)

sensor.set_humidity_oversample(bme680.OS_2X)
sensor.set_pressure_oversample(bme680.OS_4X)
sensor.set_temperature_oversample(bme680.OS_8X)
sensor.set_filter(bme680.FILTER_SIZE_3)
sensor.set_gas_status(bme680.ENABLE_GAS_MEAS)

sensor.set_gas_heater_temperature(320)
sensor.set_gas_heater_duration(150)
sensor.select_gas_heater_profile(0)


######################################################

# loop and publish sensor reading
while 1:
    now = datetime.utcnow()
    now_str = now.strftime('%Y-%m-%dT%H:%M:%SZ')  # e.g. 2016-04-18T06:12:25.877Z
    humidity, temperature = Adafruit_DHT.read_retry(sensor1, pin)
    if humidity is not None and temperature is not None:
        sensor.get_sensor_data()
        payload = '{ "timestamp": "' + now_str + '","temperature1": ' + str(temperature) + ',"humidity1": ' + str(humidity) + ',"temperature2": ' + str(sensor.data.temperature) + ',"humidity2": ' + str(sensor.data.humidity) + ',"pressure": ' + str(sensor.data.pressure) + ',"airQuality": ' + str(sensor.data.gas_resistance) + ' }'
        print(payload)
        myMQTTClient.publish("thing02/data", payload, 0)
        sleep(4)
    else:
        print(".")
        sleep(1)