AWS.config.update({
  region: "us-east-1",
  // The endpoint should point to the local or remote computer where DynamoDB (downloadable) is running.
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
  /*
    accessKeyId and secretAccessKey defaults can be used while using the downloadable version of DynamoDB.
    For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  */
  accessKeyId: "AKIAZ3JOYZXEGDTOJE66",
  secretAccessKey: "2aJucWh73cPCSs+ylgD8pXTJ72L+DARa+Z6orLi/"
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



