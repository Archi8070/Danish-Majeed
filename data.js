var APP_DATA = {
  "scenes": [
    {
      "id": "0-formal-living",
      "name": "FORMAL LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.454836775036557,
          "pitch": 0.30937330000412544,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.31752598897504214,
          "pitch": -0.058999464300743654,
          "rotation": 0,
          "target": "5-stair-case"
        },
        {
          "yaw": 1.6787964287988526,
          "pitch": 0.11603765569714497,
          "rotation": 0,
          "target": "3-dinning"
        },
        {
          "yaw": -1.691303737229223,
          "pitch": 0.19986471696496722,
          "rotation": 0,
          "target": "0-formal-living"
        },
        {
          "yaw": -2.5871171210330566,
          "pitch": 0.22498090331069598,
          "rotation": 0,
          "target": "2-wash-basin"
        },
        {
          "yaw": 2.3310920145325316,
          "pitch": 0.23147118435611347,
          "rotation": 7.0685834705770345,
          "target": "10-bedroom---a"
        },
        {
          "yaw": -0.6433251938867546,
          "pitch": 0.1529153743277174,
          "rotation": 5.497787143782138,
          "target": "11-bedroom---b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-basin",
      "name": "WASH BASIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.889861914496823,
          "pitch": 0.11191572167252417,
          "rotation": 0,
          "target": "3-dinning"
        },
        {
          "yaw": 2.4360254970650663,
          "pitch": 0.08746328339518783,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dinning",
      "name": "DINNING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.19725339586543633,
          "pitch": 0.11704825940107888,
          "rotation": 0,
          "target": "2-wash-basin"
        },
        {
          "yaw": 1.4343375073167444,
          "pitch": 0.23713644332267592,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9807407552561775,
          "pitch": 0.1863310830007876,
          "rotation": 1.5707963267948966,
          "target": "3-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stair-case",
      "name": "STAIR CASE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.34911800103757074,
          "pitch": 0.5688481781968022,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -0.43431989303041263,
          "pitch": -0.13299468034842477,
          "rotation": 0,
          "target": "6-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-hall",
      "name": "UPPER HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0767313811076207,
          "pitch": 0.2556209516591412,
          "rotation": 0.7853981633974483,
          "target": "7-second-floor-stair"
        },
        {
          "yaw": 1.6358987847033895,
          "pitch": 0.4823342455660171,
          "rotation": 13.351768777756625,
          "target": "8-office-passage"
        },
        {
          "yaw": -1.1896306459371147,
          "pitch": 0.457024483916074,
          "rotation": 2.356194490192345,
          "target": "5-stair-case"
        },
        {
          "yaw": 0.8945450510821136,
          "pitch": 0.2603899350746488,
          "rotation": 11.780972450961727,
          "target": "12-bedroom---c"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-second-floor-stair",
      "name": "SECOND FLOOR STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0044411324413005104,
          "pitch": -0.15853818283748033,
          "rotation": 4.71238898038469,
          "target": "13-bedroom---d"
        },
        {
          "yaw": -2.104632923667598,
          "pitch": 0.7356813483438245,
          "rotation": 2.356194490192345,
          "target": "8-office-passage"
        },
        {
          "yaw": 2.1998689100702924,
          "pitch": 0.4865559413916998,
          "rotation": 0,
          "target": "6-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-office-passage",
      "name": "OFFICE PASSAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3528122416393522,
          "pitch": 0.36470913883889367,
          "rotation": 5.497787143782138,
          "target": "9-office-room"
        },
        {
          "yaw": 0.16694193814262626,
          "pitch": 0.10727643787570784,
          "rotation": 0,
          "target": "6-upper-hall"
        },
        {
          "yaw": -0.5916120417556048,
          "pitch": 0.03117795574307003,
          "rotation": 4.71238898038469,
          "target": "7-second-floor-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-office-room",
      "name": "OFFICE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom---a",
      "name": "BEDROOM - A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5841117742610722,
          "pitch": 0.1190610089487869,
          "rotation": 5.497787143782138,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom---b",
      "name": "BEDROOM - B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9466612957475284,
          "pitch": 0.09333793454720052,
          "rotation": 7.0685834705770345,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom---c",
      "name": "BEDROOM - C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9033767476185641,
          "pitch": 0.030353378997265423,
          "rotation": 5.497787143782138,
          "target": "6-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom---d",
      "name": "BEDROOM - D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9123144702309016,
          "pitch": 0.058570975216818866,
          "rotation": 2.356194490192345,
          "target": "7-second-floor-stair"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mr.Danish Majeed",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
