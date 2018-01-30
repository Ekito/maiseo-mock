const express = require('express');
const app = express();
const moment = require('moment');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

let field_1 = {
  "fieldId": "rd9mnqg",
  "fieldName": "Test",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
        "date": "2017-04-25T00:00:00.000Z",
        "value": "EMERGENCE"
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": "TEN_TO_FOURTEEN"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-29T00:00:00.000Z",
        "value": "EMERGENCE"
      }, {
        "date": "2017-04-30T00:00:00.000Z",
        "value": "TEN_TO_FOURTEEN"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

let field_2 = {
  "fieldId": "bb9mnqg",
  "fieldName": "Test 2",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "EMERGENCE",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "TWO_TO_NINE"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-30T00:00:00.000Z",
        "value": "TWO_TO_NINE"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

let field_3 = {
  "fieldId": "cc9mnqg",
  "fieldName": "Test 3",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "TWO_TO_NINE",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "TEN_TO_FOURTEEN"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-30T00:00:00.000Z",
        "value": "TEN_TO_FOURTEEN"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

let field_4 = {
  "fieldId": "dd9mnqg",
  "fieldName": "Test 4",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "TEN_TO_FOURTEEN",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "FIFTEEN_TO_TASSELING"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-30T00:00:00.000Z",
        "value": "FIFTEEN_TO_TASSELING"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

let field_5 = {
  "fieldId": "ee9mnqg",
  "fieldName": "Test 5",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "FIFTEEN_TO_TASSELING",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "FLOWERING"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-30T00:00:00.000Z",
        "value": "FLOWERING"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

let field_6 = {
  "fieldId": "ff9mnqg",
  "fieldName": "Test 6",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "FLOWERING",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "SLAG"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-30T00:00:00.000Z",
        "value": "SLAG"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}


let field_7 = {
  "fieldId": "gg9mnqg",
  "fieldName": "Test 7",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "SLAG",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "GRAIN45"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-30T00:00:00.000Z",
        "value": "GRAIN45"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 0
      }, {
        "date": "2017-04-26T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

let field_8 = {
  "fieldId": "hh9mnqg",
  "fieldName": "Test 8",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "GRAIN45",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "PHYSIOLOGICAL_MATURITY"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": 14
      }]
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [{
        "date": "2017-04-25T00:00:00.000Z",
        "value": "PHYSIOLOGICAL_MATURITY"
      }],
      "nextLeaves": [{
        "date": "2017-04-25T00:00:00.000Z",
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
      "temperatureMin": 10.2,
      "temperatureMax": 20.1,
      "rainfall": 2.5,
      "etp": 5.3
    }]
  }
}

let field_9 = {
  "fieldId": "ii9mnqg",
  "fieldName": "Test 9",
  "variety": "MAS51G",
  "sowingDate": "2017-04-24T00:00:00.000Z",
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
    "currentStep": "PHYSIOLOGICAL_MATURITY",
    "noLeafsOut": 3,
    "hydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [],
      "nextLeaves": []
    },
    "pessimisticHydricStress": {
      "noDaysToStress": 2,
      "reserve": 23.4,
      "criticalLevel": 12.3,
      "nextSteps": [],
      "nextLeaves": []
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
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4
    }],
    "rainfall": [{
      "date": "2017-04-25T00:00:00.000Z",
      "value": 0.5,
      "isOverride": true
    }, {
      "date": "2017-04-26T00:00:00.000Z",
      "value": 0.4,
      "isOverride": false
    }]
  },
  "weather": {
    "days": [{
      "date": "2017-04-25T00:00:00.000Z",
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
    "date": "2017-04-25T00:00:00.000Z",
    "value": 0.5,
    "isOverride": true
  }, {
    "date": "2017-04-26T00:00:00.000Z",
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
    "date": "2017-04-25T00:00:00.000Z",
    "value": 0.5
  }, {
    "date": "2017-04-26T00:00:00.000Z",
    "value": 0.4
  }]

  res.send(payload)
})

app.get('/fields/:id', function (req, res) {
  
  if (req.params.id === "rd9mnqg") {
    res.send(field_1)
  } else if (req.params.id === "bb9mnqg") {
    res.send(field_2)
  } else if (req.params.id === "cc9mnqg") {
    res.send(field_3)
  } else if (req.params.id === "dd9mnqg") {
    res.send(field_4)
  } else if (req.params.id === "ee9mnqg") {
    res.send(field_5)
  } else if (req.params.id === "ff9mnqg") {
    res.send(field_6)
  } else if (req.params.id === "gg9mnqg") {
    res.send(field_7)
  } else if (req.params.id === "hh9mnqg") {
    res.send(field_8)
  } else if (req.params.id === "ii9mnqg") {
    res.send(field_9)
  } else {
    res.sendStatus(404)
  }

})

app.get('/fields', function (req, res) {

  let payload = [];
  payload.push(field_1);
  payload.push(field_2);
  payload.push(field_3);
  payload.push(field_4);
  payload.push(field_5);
  payload.push(field_6);
  payload.push(field_7);
  payload.push(field_8);
  payload.push(field_9);
  res.send(payload);
})


app.get('/account/profile', function (req, res) {
  let payload = {
    "Avatar": null,
    "Login": "user_maiseo",
    "UserType": "Grower",
    "UserTypeCode": "GROWER",
    "CustomerLogoBytes": null,
    "Address": null,
    "City": null,
    "CompanyName": "Test Patrice Galaup",
    "CountryCode": "FRA",
    "Customer": "MAISEO_MOBILE",
    "CustomerCode": "MAISEO_MOBILE",
    "Email": null,
    "Firstname": "Patrice",
    "Language": "fr-FR",
    "Lastname": "GALAUP",
    "Phone": null,
    "PostCode": null,
    "Uid": "5b9wd2z"
  };

  res.send(payload);
})

app.use('/static', express.static('public'))

app.listen(3009, function () {
  console.log('Maiseo (Mock) server listening on port 3009 !')
})