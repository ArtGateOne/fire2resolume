//fire2resolume by ArtGateOne v1.0

const easymidi = require("easymidi");
//const input = new easymidi.Input("resolume2fire");
//const output = new easymidi.Output("FL STUDIO FIRE");

const midi_in = "resolume2fire"; //set correct midi in device name
const midi_out = "FL STUDIO FIRE"; //set correct midi out device name

//display info
console.log("Resolume to Akai Fire");
console.log(" ");

//display all midi devices
console.log("Midi IN");
console.log(easymidi.getInputs());
console.log("Midi OUT");
console.log(easymidi.getOutputs());

console.log(" ");

console.log("Connecting to midi device " + midi_in);

console.log(" ");

const availableInputs = easymidi.getInputs();
const availableOutputs = easymidi.getOutputs();

if (!availableInputs.includes(midi_in)) {
  console.error(
    `❌ MIDI IN "${midi_in}" not found. Available:`,
    availableInputs
  );
  process.exit(1);
}

if (!availableOutputs.includes(midi_out)) {
  console.error(
    `❌ MIDI OUT "${midiName}" not found. Available:`,
    availableInputs
  );
  process.exit(1);
}

//open midi device
var input = new easymidi.Input(midi_in);
var output = new easymidi.Output(midi_out);

//clearPads();
//setAllPadsColor(0, 0, 0); // wyczyść wszystkie pady
//turnOffAllFunctionLeds();
//midiclear();


console.log(`
                                                                                                                                                                                  
                                    .+#######################++
                                   .+##########################+
                                   +###########################+.
                                  -#############################+
                                 .+##############################-
                                 -################################.
                                .#################################+
                                #################+#################.
                               -#################.+################+
                              .+################-  #################+
                              +#################-  +#################.
                             .##################   .#################+
                             +#################-    +#################.
                            -##################     +##################
                            +##########################################+
                           -###########################################+.
                           #############################################-
                          +##############################################
                         .+##################++++++++++##################+
                         -##################+         .###################.
                         ###################.          ###################+
                        -##################+           -##################+

-+###########.
+##-.        +#.
-#+           +#.      ..........    ................     ..         ......        .............
 ##-           +#.     -##########-  -################    .+#.  ++#########+       +############+.
.################.     -##           -#+           +#+    .+#.+##-       ##+                  .#+.
.##-..........-+#.     -##           -#+    .....-+#+.    .+##+.         ##+       .......    .#+.
.##.           +#.     -##           -#+    .++++++.      .+#+           ##+     -##++++++    .#+.
.##.           +#.     -##           -#+                  .+#.           ##+    +##-          .#+.
.##.           +#.     -##           -#+-----------       .+#.           ##+    ###-----------+#+.
 --            --.     .--           .-------------       .--            ---    -----------------
                                                         +
   -+#########+                                          +
  +###########+     ++...  -+----++   ++..... -+....-+   +  .+     #-  + ++-.++.++-.+   ++----++
  +###########+     +-     -.  +++     .+     +-     +   +  .+    .#-  ++    -+.    +   +.  +++
  +###########-     +-     -+----   -----#-   ++-----+   +  .+---+.#-  +     -+     +   ++----.
  -----------.                                                                                                                                      
 
`);


/*
const velocityColors = {//akai mk2 colors
  0: [0, 0, 0],
  1: [14, 14, 14],
  2: [63, 63, 63],
  3: [127, 127, 127],
  4: [127, 37, 37],
  5: [127, 0, 0],
  6: [44, 0, 0],
  7: [12, 0, 0],
  8: [94, 94, 53],
  9: [127, 41, 0],
  10: [44, 14, 0],
  11: [19, 13, 0],
  12: [127, 127, 37],
  13: [127, 127, 0],
  14: [44, 44, 0],
  15: [12, 12, 0],
  16: [67, 127, 37],
  17: [41, 127, 0],
  18: [14, 44, 0],
  19: [9, 21, 0],
  20: [37, 127, 37],
  21: [0, 127, 0],
  22: [0, 44, 0],
  23: [0, 12, 0],
  24: [37, 127, 46],
  25: [0, 127, 12],
  26: [0, 44, 6],
  27: [0, 12, 0],
  28: [37, 127, 67],
  29: [0, 127, 27],
  30: [0, 44, 14],
  31: [0, 15, 5],
  32: [37, 127, 88],
  33: [0, 127, 49],
  34: [0, 44, 17],
  35: [0, 12, 5],
  36: [37, 97, 127],
  37: [0, 54, 127],
  38: [0, 20, 25],
  39: [0, 5, 9],
  40: [37, 67, 127],
  41: [0, 27, 127],
  42: [0, 13, 29],
  43: [0, 3, 9],
  44: [37, 37, 127],
  45: [0, 0, 127],
  46: [0, 0, 29],
  47: [0, 0, 9],
  48: [67, 37, 127],
  49: [27, 0, 127],
  50: [9, 0, 31],
  51: [7, 0, 14],
  52: [127, 37, 127],
  53: [127, 0, 127],
  54: [44, 0, 29],
  55: [12, 0, 9],
  56: [127, 37, 67],
  57: [127, 0, 27],
  58: [44, 0, 14],
  59: [16, 0, 6],
  60: [127, 7, 0],
  61: [76, 17, 0],
  62: [62, 25, 0],
  63: [21, 31, 0],
  64: [1, 19, 0],
  65: [0, 27, 17],
  66: [0, 26, 63],
  67: [0, 0, 127],
  68: [0, 34, 39],
  69: [18, 0, 101],
  70: [63, 63, 63],
  71: [15, 15, 15],
  72: [127, 0, 0],
  73: [94, 127, 22],
  74: [87, 118, 2],
  75: [31, 127, 4],
  76: [7, 43, 0],
  77: [0, 127, 43],
  78: [0, 54, 127],
  79: [0, 20, 127],
  80: [31, 0, 127],
  81: [61, 0, 127],
  82: [88, 12, 62],
  83: [31, 16, 0],
  84: [127, 36, 0],
  85: [67, 112, 3],
  86: [61, 127, 7],
  87: [0, 127, 0],
  88: [30, 127, 12],
  89: [29, 127, 35],
  90: [18, 127, 102],
  91: [44, 127, 127],
  92: [15, 40, 99],
  93: [67, 63, 116],
  94: [104, 14, 127],
  95: [127, 0, 46],
  96: [127, 63, 0],
  97: [92, 87, 0],
  98: [71, 127, 0],
  99: [65, 46, 3],
  100: [28, 21, 0],
  101: [9, 37, 4],
  102: [6, 39, 17],
  103: [10, 10, 20],
  104: [10, 15, 44],
  105: [52, 30, 13],
  106: [83, 0, 4],
  107: [110, 40, 30],
  108: [107, 53, 13],
  109: [127, 112, 18],
  110: [78, 112, 22],
  111: [33, 57, 7],
  112: [14, 14, 23],
  113: [110, 127, 52],
  114: [63, 127, 94],
  115: [76, 76, 127],
  116: [70, 32, 127],
  117: [31, 31, 31],
  118: [60, 60, 60],
  119: [111, 127, 127],
  120: [49, 0, 0],
  121: [26, 0, 0],
  122: [13, 127, 0],
  123: [2, 32, 0],
  124: [92, 87, 0],
  125: [31, 24, 0],
  126: [88, 47, 0],
  127: [36, 10, 0]
};
*/

const velocityColors = {//my colors
  0:   [0, 0, 0],       // empty
  1:   [1, 1, 1],
  2:   [16, 16, 16],
  3:   [32, 32, 32],
  4:   [64, 64, 64],
  5:   [127, 127, 127],
  6:   [64, 0, 0],
  7:   [64, 4, 0],
  8:   [64, 8, 0],
  9:   [64, 12, 0],
  10:  [64, 16, 0],
  11:  [64, 20, 0],
  12:  [64, 24, 0],
  13:  [64, 28, 0],
  14:  [64, 32, 0],
  15:  [64, 36, 0],
  16:  [64, 40, 0],
  17:  [64, 48, 0],
  18:  [64, 52, 0],
  19:  [64, 56, 0],
  20:  [64, 60, 0],
  21:  [64, 64, 0],
  22:  [60, 64, 0],
  23:  [56, 64, 0],
  24:  [52, 64, 0],
  25:  [48, 64, 0],
  26:  [44, 64, 0],
  27:  [40, 64, 0],
  28:  [36, 64, 0],
  29:  [32, 64, 0],
  30:  [48, 64, 0],
  31:  [44, 64, 0],
  32:  [0, 51, 38],     // Disconnected
  33:  [40, 64, 0],
  34:  [36, 64, 0],
  35:  [32, 64, 0],
  36:  [28, 64, 0],
  37:  [24, 64, 0],
  38:  [20, 64, 0],
  39:  [16, 64, 0],
  40:  [12, 64, 0],
  41:  [8, 64, 4],
  42:  [4, 64, 8],
  43:  [0, 64, 12],
  44:  [0, 64, 16],
  45:  [0, 64, 20],
  46:  [0, 64, 24],
  47:  [0, 64, 28],
  48:  [0, 64, 32],
  49:  [0, 64, 36],
  50:  [0, 64, 40],
  51:  [0, 64, 44],
  52:  [0, 64, 48],
  53:  [0, 64, 52],
  54:  [0, 64, 56],
  55:  [0, 64, 60],
  56:  [0, 64, 64],
  57:  [0, 60, 64],
  58:  [0, 56, 64],
  59:  [0, 52, 64],
  60:  [0, 48, 64],
  61:  [0, 44, 64],
  62:  [0, 40, 64],
  63:  [0, 36, 64],
  64:  [0, 6, 0],      // Previewing
  65:  [0, 32, 64],
  66:  [0, 48, 64],
  67:  [0, 44, 64],
  68:  [0, 40, 64],
  69:  [0, 36, 64],
  70:  [0, 32, 64],
  71:  [0, 28, 64],
  72:  [0, 24, 64],
  73:  [0, 20, 64],
  74:  [0, 16, 64],
  75:  [0, 12, 64],
  76:  [0, 8, 64],
  77:  [0, 4, 64],
  78:  [0, 0, 64],
  79:  [4, 0, 64],
  80:  [8, 0, 64],
  81:  [12, 0, 64],
  82:  [16, 0, 64],
  83:  [20, 0, 64],
  84:  [24, 0, 64],
  85:  [28, 0, 64],
  86:  [32, 0, 64],
  87:  [36, 0, 64],
  88:  [40, 0, 64],
  89:  [44, 0, 64],
  90:  [48, 0, 64],
  91:  [52, 0, 64],
  92:  [56, 0, 64],
  93:  [60, 0, 64],
  94:  [64, 0, 64],
  95:  [30, 0, 17],     // Connected
  96:  [64, 0, 60],
  97:  [64, 0, 56],
  98:  [64, 0, 52],
  99:  [64, 0, 48],
  100: [64, 0, 44],
  101: [64, 0, 40],
  102: [64, 0, 36],
  103: [64, 0, 32],
  104: [64, 0, 28],
  105: [64, 0, 24],
  106: [64, 0, 20],
  107: [64, 0, 16],
  108: [64, 0, 12],
  109: [64, 0, 8],
  110: [64, 0, 4],
  111: [127, 0, 0],
  112: [127, 64, 0],
  113: [127, 127, 0],
  114: [64, 127, 0],
  115: [0, 127, 0],
  116: [0, 127, 64],
  117: [0, 127, 127],
  118: [0, 64, 127],
  119: [0, 0, 127],
  120: [64, 0, 127],
  121: [127, 0, 127],
  122: [127, 0, 64],
  123: [64, 127, 127],
  124: [127, 64, 127],
  125: [127, 127, 64],
  126: [6, 6, 6],
  127: [14, 5, 0]      // Connected & previewing
};

/*
function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatyczne
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [
    Math.round(r * 64),
    Math.round(g * 64),
    Math.round(b * 64)
  ];
}

const velocityColors = {
  0:   [0, 0, 0],       // empty
  32:  [0, 64, 64],     // Disconnected
  64:  [0, 0, 32],      // Previewing
  95:  [64, 0, 32],     // Connected
  127: [32, 16, 0]      // Connected & previewing
};

// Automatyczne generowanie kolorów dla pozostałych velocity
for (let v = 1; v < 127; v++) {
  if (velocityColors[v]) continue;

  // Rozkład barw w HSL: hue od 0 do 360, stała jasność i nasycenie
  const hue = (v / 127) * 360;
  const saturation = 100;
  const lightness = 50;

  velocityColors[v] = hslToRgb(hue, saturation, lightness);
}
*/


input.on("noteon", function (msg) {
  if (msg.note >= 54 && msg.note <= 117) {//color pads
    const index = msg.note - 54;
    const color = velocityColors[msg.velocity];
    if (color) {
      setPadColor(index, ...color);
    }
  } else {
    output.send('cc', {//buttons
      controller: msg.note,
      value: msg.velocity,
      channel: 0
    });
    //console.log(msg.note, msg.velocity);
  }
});


input.on("cc", function (msg) {
  if (msg.controller >= 120 && msg.controller <= 123) {
    if (msg.controller == 123 && msg.channel == 0) {
      midiclear();
    }
  } else {
    console.log(msg.controller, msg.value);
  }
});


function setPadColor(index, r, g, b) {
    const len = 4
    const lenH = (len >> 7) & 0x7F
    const lenL = len & 0x7F

    const syx = [
      0xF0, 0x47, 0x7F, 0x43, 0x65,
      lenH, lenL,
      index & 0x7F, r & 0x7F, g & 0x7F, b & 0x7F,
      0xF7
    ]
    output.send('sysex', syx)
  }

  function clearPads() {
    for (let i = 0; i < 64; i++) {
      setPadColor(i, 0, 0, 0)
    }
  }


  function setAllPadsColor(r, g, b) {
  const padCount = 64;
  const payload = [];

  for (let i = 0; i < padCount; i++) {
    payload.push(i & 0x7F, r & 0x7F, g & 0x7F, b & 0x7F);
  }

  const len = payload.length;
  const lenH = (len >> 7) & 0x7F;
  const lenL = len & 0x7F;

  const syx = [
    0xF0,       // SysEx start
    0x47,       // Akai manufacturer ID
    0x7F,       // All-call device ID
    0x43,       // Product ID (Fire)
    0x65,       // Command: Write Pad Array
    lenH, lenL, // Payload length
    ...payload, // Pad data
    0xF7        // SysEx end
  ];

  output.send('sysex', syx);
}

function turnOffAllFunctionLeds() {
  for (let cc = 0; cc <= 127; cc++) {
    output.send('cc', {
      controller: cc,
      value: 0,
      channel: 0
    });
  }
}

function midiclear() {
  setAllPadsColor(0, 0, 0); // set all pads to black
  turnOffAllFunctionLeds();
}

process.on("SIGINT", () => {
  interval_on = 0;
  console.log("CTRL+C -> awaryjne wyjście");
  midiclear();
  input.close();
  output.close();
  process.exit(1); // kod błędu
});

process.on("SIGHUP", () => {
  interval_on = 0;
  console.log("CTRL+C -> awaryjne wyjście");
  midiclear();
  input.close();
  output.close();
  process.exit(1); // kod błędu
});

process.on("SIGTERM", () => {
  interval_on = 0;
  console.log("CTRL+C -> awaryjne wyjście");
  midiclear();
  input.close();
  output.close();
  process.exit(1); // kod błędu
});

process.on("uncaughtException", (err) => {
  console.error("Nieobsłużony wyjątek:", err.message);
  // Możesz tu np. spróbować ponownie połączyć z kontrolerem
});

