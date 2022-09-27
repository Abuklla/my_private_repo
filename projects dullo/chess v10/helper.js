var startPos = {
  "1":{
    "1":{
      "piece":"Rook",
      "color":"white"
    },
    "2":{
      "piece":"Knight",
      "color":"white"
    },
    "3":{
      "piece":"Bishop",
      "color":"white"
    },
    "4":{
      "piece":"Queen",
      "color":"white"
    },
    "5":{
      "piece":"King",
      "color":"white"
    },
    "6":{
      "piece":"Bishop",
      "color":"white"
    },
    "7":{
        "piece":"Knight",
        "color":"white"
    },
    "8":{
        "piece":"Rook",
        "color":"white"
    }
  },
  "2":{
    "1":{
      "piece":"Pawn",
      "color":"white"
    },
    "2":{
      "piece":"Pawn",
      "color":"white"
    },
    "3":{
      "piece":"Pawn",
      "color":"white"
    },
    "4":{
      "piece":"Pawn",
      "color":"white"
    },
    "5":{
      "piece":"Pawn",
      "color":"white"
    },
    "6":{
      "piece":"Pawn",
      "color":"white"
    },
    "7":{
      "piece":"Pawn",
      "color":"white"
    },
    "8":{
      "piece":"Pawn",
      "color":"white"
    }
  },
  "3":{
    "1":{
      "piece":null,
      "color":null
    },
    "2":{
      "piece":null,
      "color":null
    },
    "3":{
      "piece":null,
      "color":null
    },
    "4":{
      "piece":null,
      "color":null
    },
    "5":{
      "piece":null,
      "color":null
    },
    "6":{
      "piece":null,
      "color":null
    },
    "7":{
      "piece":null,
      "color":null
    },
    "8":{
      "piece":null,
      "color":null
    }
  },
  "4":{
    "1":{
      "piece":null,
      "color":null
    },
    "2":{
      "piece":null,
      "color":null
    },
    "3":{
      "piece":null,
      "color":null
    },
    "4":{
      "piece":null,
      "color":null
    },
    "5":{
      "piece":null,
      "color":null
    },
    "6":{
      "piece":null,
      "color":null
    },
    "7":{
      "piece":null,
      "color":null
    },
    "8":{
      "piece":null,
      "color":null
    }
  },
  "5":{
    "1":{
      "piece":null,
      "color":null
    },
    "2":{
      "piece":null,
      "color":null
    },
    "3":{
      "piece":null,
      "color":null
    },
    "4":{
      "piece":null,
      "color":null
    },
    "5":{
      "piece":null,
      "color":null
    },
    "6":{
      "piece":null,
      "color":null
    },
    "7":{
      "piece":null,
      "color":null
    },
    "8":{
      "piece":null,
      "color":null
    }
  },
  "6":{
    "1":{
      "piece":null,
      "color":null
    },
    "2":{
      "piece":null,
      "color":null
    },
    "3":{
      "piece":null,
      "color":null
    },
    "4":{
      "piece":null,
      "color":null
    },
    "5":{
      "piece":null,
      "color":null
    },
    "6":{
      "piece":null,
      "color":null
    },
    "7":{
      "piece":null,
      "color":null
    },
    "8":{
      "piece":null,
      "color":null
    }
  },
  "7":{
    "1":{
      "piece":"Pawn",
      "color":"black"
    },
    "2":{
      "piece":"Pawn",
      "color":"black"
    },
    "3":{
      "piece":"Pawn",
      "color":"black"
    },
    "4":{
      "piece":"Pawn",
      "color":"black"
    },
    "5":{
      "piece":"Pawn",
      "color":"black"
    },
    "6":{
      "piece":"Pawn",
      "color":"black"
    },
    "7":{
      "piece":"Pawn",
      "color":"black"
    },
    "8":{
      "piece":"Pawn",
      "color":"black"
    }
  },
  "8":{
    "1":{
      "piece":"Rook",
      "color":"black"
    },
    "2":{
      "piece":"Knight",
      "color":"black"
    },
    "3":{
      "piece":"Bishop",
      "color":"black"
    },
    "4":{
      "piece":"Queen",
      "color":"black"
    },
    "5":{
      "piece":"King",
      "color":"black"
    },
    "6":{
      "piece":"Bishop",
      "color":"black"
    },
    "7":{
        "piece":"Knight",
        "color":"black"
    },
    "8":{
        "piece":"Rook",
        "color":"black"
    }
  },
}
var pieceRules ={
  "Pawn":{
    "start":{
      "y":2,
      "x":0
    },
    "notStart":{
      "y":1,
      "x":0
    },
    "captures":{
      "y":1,
      "x":1
    }
  },
  "Knight":{
    "1":{
      "y":2,
      "x":1
    },
    "2":{
      "y":1,
      "x":2
    }
  },
  "Bishop":{
    "1":{
      "y":1,
      "x":1,
      "length":8
    }
  }
}


