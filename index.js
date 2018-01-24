const express = require('express');
const app = express();
const moment = require('moment');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

let field = {
  "fieldId": "rd9mnqg",
  "fieldName": "Test",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00",
  "soilInformations": {
    "clay": 0.3,
    "silt": 0.4,
    "sand": 0.4,
    "depth": 5,
    "reserveMax": 10
  },
  "centroid": "POINT (-0.07930756 43.68080066)",
  "modelResult": {
    "modelStatus": null,
    "currentStep": "SOWING",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00",
        "value": "EMERGENCE"
      }, {
        "date": "2017-04-25T00:00:00",
        "value": "TEN_TO_FOURTEEN"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-29T00:00:00",
        "value": "EMERGENCE"
      }, {
        "date": "2017-04-30T00:00:00",
        "value": "TEN_TO_FOURTEEN"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00",
        "value": 14
      }]
    },
    "noHeatUnitFromSowing": 50,
    "noHeatUnitFromYesterday": 3,
    "noHeatUnitToFlowering": 4,
    "noHeatUnitTo45Humidity": 24
  },
  "irrigationCampaign": {
    "initialReserve": 50,
    "remainingReserve": 25,
    "waterTurnPlanned": 2,
    "waterTurnPast": 1
  },
  "water": {
    "irrigation": [{
      "date": "2017-04-25T00:00:00",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

app.delete('/fields/:id/rainfalls/:date', function (req, res) {
  res.sendStatus(204)
})

app.put('/fields/:id/rainfalls/:date', function (req, res) {
  res.sendStatus(200)
})

app.get('/fields/:id/rainfalls', function (req, res) {
  let payload = [{
    "date": "2017-04-25T00:00:00",
    "value": 0.5,
    "isOverride": true
  }, {
    "date": "2017-04-26T00:00:00",
    "value": 0.4,
    "isOverride": false
  }]

  res.send(payload)
})

app.delete('/fields/:id/irrigations/:date', function (req, res) {
  res.sendStatus(204)
})

app.put('/fields/:id/irrigations/:date', function (req, res) {
  res.sendStatus(200)
})

app.get('/fields/:id/irrigations', function (req, res) {
  let payload = [{
    "date": "2017-04-25T00:00:00",
    "value": 0.5
  }, {
    "date": "2017-04-26T00:00:00",
    "value": 0.4
  }]

  res.send(payload)
})

app.get('/fields/:id', function (req, res) {
  res.send(field)
})

app.get('/fields', function (req, res) {

  let payload = [];
  payload.push(field);
  res.send(payload);
})


app.use('/static', express.static('public'))

app.listen(3009, function () {
  console.log('Maiseo (Mock) server listening on port 3009 !')
})