// variables
let ruleObject = {}
// let rule = "RRULE:FREQ=MONTHLY;BYMONTHDAY=2;COUNT=3;INTERVAL=4";
// let rule = "RRULE:FREQ=WEEKLY;BYDAY=SU,MO,FR;COUNT=5;";
// let rule ="RRULE:FREQ=DAILY;WKST=MO;BYHOUR=15;BYMINUTE=30"



// dictionary for the output
const translate = {
  "DAILY": "day",
  "WEEKLY": "week",
  "MONTHLY": "month",
  "MO": "Monday",
  "TU": "Tuesday",
  "WE": "Wednesday",
  "TH": "Thursday",
  "FR": "Friday",
  "SA": "Saturday",
  "SU": "Sunday",
}

var daysArray = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

// check if multiple days and format either way
function translateDays(day){
  let result = "";

  if ( day === undefined ) {
    return;
  }

  if ( day.includes(",") ) {
    result = day.split(",");
    result = result.map(d => translate[d]);
    result = result.join(", ")
    return result;
  }
  return translate[day];
}

// convert to ordinal number
function ordinalSuffix(num) {
  var s = ["th", "st", "nd", "rd"];
  var v = num % 100;
  return num + (s[(v-20) % 10] || s[v] || s[0]);
}

// the convert function
const convertToWords = (rule) => {

  // remove the RRULE: from the string
  rule = rule.replace("RRULE:", "");

  // convert the rrule string to array
  ruleArray = rule.split(";");

  // convert the rrule string to object
  ruleArray.forEach(function(r){
    keyAndValue = r.split("=");
    const [key, value] = keyAndValue;
    ruleObject[key] = value;
  })

  // keys
  let freq = ruleObject["FREQ"];
  let byday = ruleObject["BYDAY"];
  let bymonthday = ruleObject["BYMONTHDAY"];
  let count = ruleObject["COUNT"];
  let interval = ruleObject["INTERVAL"];
  let output = "";

  // format
  if ( freq === "DAILY" ) {

      if ( ruleObject["BYMINUTE"] ) {
        output = `Every day at ${ruleObject["BYHOUR"]}:${ruleObject["BYMINUTE"]}`;
      } else {
        output = `Every day at ${ruleObject["BYHOUR"]}:00`;
      }

      if ( count ) {
        if ( count == "1" ) {
          output += ` for 1 time`;
        } else {
          output += ` for ${count} times`;
        }
      }

    return output;
  }

  if ( freq === "WEEKLY" ) {

    if ( interval && parseInt(interval) > 1 ) {
      output = `Every ${interval} ${translate[freq]}s on ${translateDays(byday)}`;
    } else {
      output = `Every ${translate[freq]} on ${translateDays(byday)}`;
    }

    if ( bymonthday ) {
      output += ` the ${ordinalSuffix(bymonthday)}`;
    }

    if ( count ) {
      if ( count == "1" ) {
        output += ` for 1 time`;
      } else {
        output += ` for ${count} times`;
      }
    }

    if ( !daysArray.includes(byday) ) {
      output = "";
      console.log(`Error: ${byday} is invalid day, use MO, TU, WE, TH, FR, SA or SU`);
    }

    return output;
   }

   if ( freq === "MONTHLY" ) {

     if ( interval && parseInt(interval) > 1 ) {
       output = `Every ${interval} ${translate[freq]}s on ${ordinalSuffix(bymonthday)}`;
     } else {
       output = `Every ${translate[freq]} on ${ordinalSuffix(bymonthday)}`;
     }

     if ( count ) {
       if ( count == "1" ) {
         output += ` for 1 time`;
       } else {
         output += ` for ${count} times`;
       }
     }
     return output;
    }

}

module.exports = convertToWords;
