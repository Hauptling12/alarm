# ALPHA SOFTWARE
mange alarms in the cli
### man page
+ `-v` shows version
+ `-h` shows help page
+ `-l` lists alarms
#### how to add alarms
open `~/.local/share/alarm/alarm.json` with your text editor
and add time json ex "time":"2022/06/26:13:18:20"
an example alarm.json
```json
[
  {
    "time":"2022/06/26:13:18:20",
    "name":"name"
  },
  {
    "time":"2022/06/26:07:18:00",
    "name":"another name"
  }
]
```
