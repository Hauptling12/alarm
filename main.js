var spawn = require("child_process").spawn;
var test = require(db_file);
var music = "/home/" + process.env.USER + "/.local/share/alarm/alarm.wav"
var db_file = "/home/" + process.env.USER + "/.local/share/alarm/alarms.json"
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

switch (process.argv[2]) {
    case '-h':
        console.log("-h help");
        break;
    case '-v':
        console.log('0.0.1');
        break;
    case '-a':
        spawn(process.env.EDITOR, [db_file]);
        break;
    case '-l':
        console.table(test);
        break;
    default:
        while (true) {
    const d = new Date();
    let ho = addZero(d.getHours());
    let mi = addZero(d.getMinutes());
    let se = addZero(d.getSeconds());
    let ye = addZero(d.getFullYear());
    let da = addZero(d.getDate());
    let mo = addZero(d.getMonth() +1 );
        let timewq = ye + "/" + mo + "/" + da + ":" + ho + ":" + mi + ":" + se;
        if (test.some(item => item.time === timewq)===true) break;
        }
        spawn('mpv', [music]);
}
