rrule converter - convert rrule string to words
=====================================

## Install

```sh
npm install rruleconverter
```

## Demo

Convert rrule
```
"RRULE:FREQ=WEEKLY;BYDAY=TH;COUNT=3"
```
To
```
Every week on Thursday for 3 times
```

## Usage

```js
// import
import rruleToWords from "rruleconverter";
or
const rruleToWords = require('rruleconverter')

// call the function and pass the rrule as a string
rruleToWords("RRULE:FREQ=WEEKLY;BYDAY=TH")

// output for this example
// Every week on Thursday

```


## Output Examples

```js
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=11")  // Every day at 11:00
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=13;BYMINUTE=30;COUNT=5")  // Every day at 13:30 for 5 times
rruleToWords("RRULE:FREQ=WEEKLY;BYDAY=MO;INTERVAL=2;COUNT=3")  // Every 2 weeks on Monday for 3 times
rruleToWords("RRULE:FREQ=MONTHLY;BYMONTHDAY=2")  // Every month on the 2nd
rruleToWords("RRULE:FREQ=MONTHLY;BYMONTHDAY=23;COUNT=6")  // Every month on 23rd for 6 times
```

## Options

```js
rruleToWords(rrule, timeformat)

// arguments
1. rrule - "RRULE:FREQ=DAILY;BYHOUR=11"
2. timeformat - "12HM", "12M" (optional)
```

The second argument is optional and for defining the time format.
If not specified it will show the time as 24-Hour format

```js
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=15")  // Every day at 15:00
```
#### Customize the time format to 12-Hour format


```js
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=11", "12HM")  // Every day at 11:00 AM
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=18;BYMINUTE=30", "12HM")  // Every day at 6:30 PM
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=20;BYMINUTE=30", "12H")  // Every day at 8PM
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=13;BYMINUTE=30;COUNT=5", "12H")  // Every day at 1PM for 5 times
```



*Author [Maor Tzabari](https://oritzio.com/)*
