AWS.config.update({
  region: "us-east-1",
  // The endpoint should point to the local or remote computer where DynamoDB (downloadable) is running.
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
  /*
    accessKeyId and secretAccessKey defaults can be used while using the downloadable version of DynamoDB.
    For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  */
  accessKeyId: "AKIAZ3JOYZXEEURI4S7C",
  secretAccessKey: "q9wpTpTKtYiWIsuBya7iH/BoUcZoFHQ4umiNSeFa"
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

var datumVal = new Date() - 86400000*30;


    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal
        }
    };




/*
RETRIEVING DATA FROM THE DHT22 SENSOR
*/
///// 24h Records
var datumVal24h = new Date() - 86400000;

function scanTime24hd() {
    document.getElementById('textareadht').innerHTML = "";
    document.getElementById('textareadht').innerHTML += "Scanning for the sensor data during the last 24 hours." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal24h
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareadht').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareadht').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareadht').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareadht').innerHTML += "\n " + sensor.payload.temperature1 + " , " + sensor.payload.humidity1 + " , " + sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 3 days Records
var datumVal3d = new Date() - 86400000*3;

function scanTime3ldd() {
    document.getElementById('textareadht').innerHTML = "";
    document.getElementById('textareadht').innerHTML += "Scanning for the sensor data during the last 3 days." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal3d
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareadht').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareadht').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareadht').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareadht').innerHTML += "\n " + sensor.payload.temperature1 + " , " + sensor.payload.humidity1 + " , " + sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 7 days Records
var datumVal7d = new Date() - 86400000*7;

function scanTime7ldd() {
    document.getElementById('textareadht').innerHTML = "";
    document.getElementById('textareadht').innerHTML += "Scanning for the sensor data during the last 7 days." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal7d
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareadht').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareadht').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareadht').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareadht').innerHTML += "\n " + sensor.payload.temperature1 + " , " + sensor.payload.humidity1 + " , " + sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 2 weeks
var datumVal2w = new Date() - 86400000*14;

function scanTime2wd() {
    document.getElementById('textareadht').innerHTML = "";
    document.getElementById('textareadht').innerHTML += "Scanning for the sensor data during the last 2 weeks." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal2w
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareadht').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareadht').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareadht').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareadht').innerHTML += "\n " + sensor.payload.temperature1 + " , " + sensor.payload.humidity1 + " , " + sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 3 weeks
var datumVal3w = new Date() - 86400000*21;

function scanTime3wd() {
    document.getElementById('textareadht').innerHTML = "";
    document.getElementById('textareadht').innerHTML += "Scanning for the sensor data during the last 3 weeks." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal3w
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareadht').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareadht').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareadht').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareadht').innerHTML += "\n " + sensor.payload.temperature1 + " , " + sensor.payload.humidity1 + " , " + sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last Month
var datumVallm = new Date() - 86400000*31;

function scanTimelmd() {
    document.getElementById('textareadht').innerHTML = "";
    document.getElementById('textareadht').innerHTML += "Scanning for the sensor data during the last Month." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVallm
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareadht').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareadht').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareadht').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareadht').innerHTML += "\n " + sensor.payload.temperature1 + " , " + sensor.payload.humidity1 + " , " + sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// All records
var datumVallr = new Date() - 86400000*365;

function scanTimelrd() {
    document.getElementById('textareadht').innerHTML = "";
    document.getElementById('textareadht').innerHTML += "Scanning for the sensor data. All records since today." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVallr
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareadht').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareadht').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareadht').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareadht').innerHTML += "\n " + sensor.payload.temperature1 + " , " + sensor.payload.humidity1 + " , " + sensor.payload.timestamp;
            });
        }
    }
}
////////////////
/*
END OF RETRIEVING DATA FROM THE DHT22 SENSOR
*/


/*
RETRIEVING DATA FROM THE BME680 SENSOR
*/
///// 24h Records
var datumVal24hb = new Date() - 86400000;

function scanTime24hb() {
    document.getElementById('textareabme').innerHTML = "";
    document.getElementById('textareabme').innerHTML += "Scanning for the sensor data during the last 24 hours." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal24hb
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareabme').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareabme').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareabme').innerHTML += "\n" + "Temperatura (ºC) " + " , " + "Humedad (HR)" + " , " + "Presión (hPa)" + " , "+"Calidad del aire (Ohms)" + " , "+ "Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareabme').innerHTML += "\n " +
                 sensor.payload.temperature1 + " , " +
                 sensor.payload.humidity1 + " , " +
                 sensor.payload.pressure + " , " +
                 sensor.payload.airQuality + " , " +
                 sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 3 days Records
var datumVal3db = new Date() - 86400000*3;

function scanTime3ldb() {
    document.getElementById('textareabme').innerHTML = "";
    document.getElementById('textareabme').innerHTML += "Scanning for the sensor data during the last 3 days." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal3db
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareabme').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareabme').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareabme').innerHTML += "\n" + "Temperatura (ºC) " + "," + "Humedad (HR)" + "," + "Presión (hPa)" + ","+"Calidad del aire (Ohms)" + "                        "+ "     Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareabme').innerHTML += "\n " +
                 sensor.payload.temperature1 + "," +
                 sensor.payload.humidity1 + "," +
                 sensor.payload.pressure + "," +
                 sensor.payload.airQuality + "," +
                 sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 7 days Records
var datumVal7b = new Date() - 86400000*7;

function scanTime7ldb() {
    document.getElementById('textareabme').innerHTML = "";
    document.getElementById('textareabme').innerHTML += "Scanning for the sensor data during the last 7 days." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal7b
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareabme').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareabme').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareabme').innerHTML += "\n" + "Temperatura (ºC) " + "," + "Humedad (HR)" + "," + "Presión (hPa)" + ","+"Calidad del aire (Ohms)" + "                        "+ "     Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareabme').innerHTML += "\n " +
                 sensor.payload.temperature1 + "," +
                 sensor.payload.humidity1 + "," +
                 sensor.payload.pressure + "," +
                 sensor.payload.airQuality + "," +
                 sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 2 weeks
var datumVal2wb = new Date() - 86400000*14;

function scanTime2wb() {
    document.getElementById('textareabme').innerHTML = "";
    document.getElementById('textareabme').innerHTML += "Scanning for the sensor data during the last 2 weeks." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal2wb
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareabme').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareabme').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareabme').innerHTML += "\n" + "Temperatura (ºC) " + "," + "Humedad (HR)" + "," + "Presión (hPa)" + ","+"Calidad del aire (Ohms)" + "                        "+ "     Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareabme').innerHTML += "\n " +
                 sensor.payload.temperature1 + "," +
                 sensor.payload.humidity1 + "," +
                 sensor.payload.pressure + "," +
                 sensor.payload.airQuality + "," +
                 sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last 3 weeks
var datumVal3wb = new Date() - 86400000*21;

function scanTime3wb() {
    document.getElementById('textareabme').innerHTML = "";
    document.getElementById('textareabme').innerHTML += "Scanning for the sensor data during the last 3 weeks." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVal3wb
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareabme').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareabme').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareabme').innerHTML += "\n" + "Temperatura (ºC) " + "," + "Humedad (HR)" + "," + "Presión (hPa)" + ","+"Calidad del aire (Ohms)" + "                        "+ "     Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareabme').innerHTML += "\n " +
                 sensor.payload.temperature1 + "," +
                 sensor.payload.humidity1 + "," +
                 sensor.payload.pressure + "," +
                 sensor.payload.airQuality + "," +
                 sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// Last Month
var datumVallmb = new Date() - 86400000*31;

function scanTimelmb() {
    document.getElementById('textareabme').innerHTML = "";
    document.getElementById('textareabme').innerHTML += "Scanning for the sensor data during the last Month." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVallmb
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareabme').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareabme').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareabme').innerHTML += "\n" + "Temperatura (ºC) " + "," + "Humedad (HR)" + "," + "Presión (hPa)" + ","+"Calidad del aire (Ohms)" + "                        "+ "     Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareabme').innerHTML += "\n " +
                 sensor.payload.temperature1 + "," +
                 sensor.payload.humidity1 + "," +
                 sensor.payload.pressure + "," +
                 sensor.payload.airQuality + "," +
                 sensor.payload.timestamp;
            });
        }
    }
}
////////////////

///// All records
var datumVallrb = new Date() - 86400000*365;

function scanTimelrb() {
    document.getElementById('textareabme').innerHTML = "";
    document.getElementById('textareabme').innerHTML += "Scanning for the sensor data. All records since today." + "\n";

    var params = {
        TableName: "more_sensortable",
        KeyConditionExpression: "#id = :iotTopic AND #ts >= :datum",
        ExpressionAttributeNames: {
            "#id": "id",
            "#ts": "timestamp"
        },
        ExpressionAttributeValues: {
            ":iotTopic": "thing02/data",
            ":datum":  datumVallrb
        }
    };

    docClient.query(params, onScan);

    function onScan(err, data) {
        if (err) {
            document.getElementById('textareabme').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            // Print all the data sensor
            document.getElementById('textareabme').innerHTML += "Scan succeeded: " + "\n";
            document.getElementById('textareabme').innerHTML += "\n" + "Temperatura (ºC) " + "," + "Humedad (HR)" + "," + "Presión (hPa)" + ","+"Calidad del aire (Ohms)" + "                        "+ "     Tiempo";
            data.Items.forEach(function(sensor) {
                document.getElementById('textareabme').innerHTML += "\n " +
                 sensor.payload.temperature1 + "," +
                 sensor.payload.humidity1 + "," +
                 sensor.payload.pressure + "," +
                 sensor.payload.airQuality + "," +
                 sensor.payload.timestamp;
            });
        }
    }
}
////////////////
/*
END OF RETRIEVING DATA FROM THE DHT22 SENSOR
*/



var tctx1 = $("#temperaturegraph1").get(0).getContext("2d");
var hctx1 = $("#humiditygraph1").get(0).getContext("2d");

var tctx2 = $("#temperaturegraph2").get(0).getContext("2d");
var hctx2 = $("#humiditygraph2").get(0).getContext("2d");

var actx = $("#airqualitygraph").get(0).getContext("2d");
var pctx = $("#pressuregraph").get(0).getContext("2d");


var options = {
    responsive: true,
    showLines: true,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            display: true
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};


var tinit1 = {
    labels: [],
    datasets: [
        {
            label: "Temperature1 °C",
            backgroundColor: 'rgba(204,229,255,0.5)',
            borderColor: "#3e95cd",
            data: []
        }
    ]
};

var hinit1 = {
    labels: [],
    datasets: [
        {
            label: "Humidity1 %",
            backgroundColor: 'rgba(229,204,255,0.5)',
            borderColor: "#3e95cd",
            data: []
        }
    ]
};


var tinit2 = {
    labels: [],
    datasets: [
        {
            label: "Temperature2 °C",
            backgroundColor: 'rgba(204,229,255,0.5)',
            borderColor: "#3e95cd",
            data: []
        }
    ]
};

var hinit2 = {
    labels: [],
    datasets: [
        {
            label: "Humidity2 %",
            backgroundColor: 'rgba(229,204,255,0.5)',
            borderColor: "#3e95cd",
            data: []
        }
    ]
};


var ainit = {
    labels: [],
    datasets: [
        {
            label: "Air Quality (Ohms)",
            backgroundColor: 'rgba(204,229,255,0.5)',
            borderColor: "#3e95cd",
            data: []
        }
    ]
};

var pinit = {
    labels: [],
    datasets: [
        {
            label: "Pressure hPa",
            backgroundColor: 'rgba(229,204,255,0.5)',
            borderColor: "#3e95cd",
            data: []
        }
    ]
};

var temperaturegraph1 = new Chart.Line(tctx1, {data: tinit1, options: options});
var humiditygraph1 = new Chart.Line(hctx1, {data: hinit1, options: options});

var temperaturegraph2 = new Chart.Line(tctx2, {data: tinit2, options: options});
var humiditygraph2 = new Chart.Line(hctx2, {data: hinit2, options: options});

var airqualitygraph = new Chart.Line(actx, {data: ainit, options: options});
var pressuregraph = new Chart.Line(pctx, {data: pinit, options: options});


$(function() {
    getData();
    //$.ajaxSetup({ cache: false });
    setInterval(getData, 500);
});


function getData() {
    docClient.query(params, function(err, data) {
        if (err) {
            console.log(err);
            return null;
        } else {
        var temperatureValues1 = [];
        var humidityValues1 = [];

        var temperatureValues2 = [];
        var humidityValues2 = [];

        var airqualityValues = [];
        var pressureValues = [];
        //var timeValues = [];
        var labelValues = [];

        var temperatureRead1 = 0.0;
        var humidityRead1 = 0.0;

        var temperatureRead2 = 0.0;
        var humidityRead2 = 0.0;

        var airqualityRead = 0.0;
        var pressureRead = 0.0;
        //timeRead = "";

        for (var i in data['Items']) {
            temperatureRead1 = parseFloat(data['Items'][i]['payload']['temperature1']);
            humidityRead1 = parseFloat(data['Items'][i]['payload']['humidity1']);

            temperatureRead2 = parseFloat(data['Items'][i]['payload']['temperature2']);
            humidityRead2 = parseFloat(data['Items'][i]['payload']['humidity2']);

            airqualityRead = parseFloat(data['Items'][i]['payload']['airQuality']);
            pressureRead = parseFloat(data['Items'][i]['payload']['pressure']);
            //timeRead = new Date(data['Items'][i]['timestamp']);
            timeRead = data['Items'][i]['payload']['timestamp'];

            temperatureValues1.push(temperatureRead1);
            humidityValues1.push(humidityRead1);

            temperatureValues2.push(temperatureRead2);
            humidityValues2.push(humidityRead2);

            airqualityValues.push(airqualityRead);
            pressureValues.push(pressureRead);

            labelValues.push(timeRead);
            }
        }
        temperaturegraph1.data.labels = labelValues;
        temperaturegraph1.data.datasets[0].data = temperatureValues1;
        humiditygraph1.data.labels = labelValues;
        humiditygraph1.data.datasets[0].data = humidityValues1;

        temperaturegraph2.data.labels = labelValues;
        temperaturegraph2.data.datasets[0].data = temperatureValues2;
        humiditygraph2.data.labels = labelValues;
        humiditygraph2.data.datasets[0].data = humidityValues2;

        airqualitygraph.data.labels = labelValues;
        airqualitygraph.data.datasets[0].data = airqualityValues;
        pressuregraph.data.labels = labelValues;
        pressuregraph.data.datasets[0].data = pressureValues;

        temperaturegraph1.update();
        humiditygraph1.update();

        temperaturegraph2.update();
        humiditygraph2.update();

        airqualitygraph.update();
        pressuregraph.update();
    });
}



