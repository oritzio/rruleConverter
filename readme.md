rrule converter - convert rrule string to words
=====================================

## Install

```sh
npm install rruleconverter
```

## Usage

```js
// import
import rruleToWords from "rruleconverter";

// call the function and pass the rrule as a string
rruleToWords("RRULE:FREQ=WEEKLY;BYDAY=TH")

// output for this example
Every week on Thursday

```


## Output Examples

```
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=11")  // Every day at 11:00
rruleToWords("RRULE:FREQ=DAILY;BYHOUR=13;BYMINUTE=30;COUNT=5")  // Every day at 13:30 for 5 times
rruleToWords("RRULE:FREQ=WEEKLY;BYDAY=30;INTERVAL=2;COUNT=3")  // Every 2 weeks on Monday for 3 times
rruleToWords("RRULE:FREQ=MONTHLY;BYMONTHDAY=2")  // Every month on the 2nd
rruleToWords("RRULE:FREQ=MONTHLY;BYMONTHDAY=23;COUNT=6")  // Every month on 23rd for 6 times
```



*Author [Maor Tzabari](https://oritzio.com/)*
