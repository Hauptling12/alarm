var spawn = require("child_process").spawn;
const readline = require('readline');
// var array = ["2021-12-1:10:20:00","2221-10-1:10:20:00"]
// var inc = array.includes('2021-12-1:10:20:00')
// console.log(inc);
var test = require('./array.json');
var db_file = "/home/" + process.env.USER + "/.local/share/alarm/alarms.json"
var out = test.some(item => item.time === '2021-12-1:10:20:00');
// var result = test.filter(x => x.time === "2021-12-1:10:20:00");
// console.log(result);
const date = new Date();
// Function to convert
// single digit input
// to two digits
const formatData = (input) => {
  if (input > 9) {
    return input;
  } else return `0${input}`;
};

// Function to convert
// 24 Hour to 12 Hour clock
const formatHour = (input) => {
  if (input > 12) {
    return input - 12;
  }
  return input;
};

const format = {
  dd: formatData(date.getDate()),
  mm: formatData(date.getMonth() + 1),
  yyyy: date.getFullYear(),
  HH: formatData(date.getHours()),
  hh: formatData(formatHour(date.getHours())),
  MM: formatData(date.getMinutes()),
  SS: formatData(date.getSeconds()),
};
switch (process.argv[2]) {
    case '-h':
        console.log("-h help");
        break;
    case '-a':
        spawn(process.env.EDITOR, [db_file]);
        break;
    case '-l':
        console.table(test);
        break;
    default:
        const format24Hour = ({ dd, mm, yyyy, HH, MM, SS }) => {
            console.log(`${mm}/${dd}/${yyyy}-${HH}:${MM}:${SS}`);
        };
        format24Hour(format);
        console.log(out);
        var ou = console.log(out === "true");
        console.log(ou)
        // readline.emitKeypressEvents(process.stdin);
        // process.stdin.setRawMode(true);
        // process.stdin.on('keypress', (str, key) => {

    // // "Raw" mode so we must do our own kill switch
        //     if(key.sequence === '\u0003') {
        //         process.exit();
        //     }
        //     if(key.sequence === 'q') {
        //         process.exit();
        //     }

    // // User has triggered a keypress, now do whatever we want!
    // // ...
        // });
        // while (true) {
        //     if (out === true) {
        //         console.log("dsdsd");
        //         break;
        //     }
        // }
}
