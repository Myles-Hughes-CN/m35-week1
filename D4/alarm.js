let alarm = "";
let day = "Sunday";

const alarmClock = {
  weekendAlarm: "No alarm needed",
  weekdayAlarm: "Get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
  alarm = alarmClock.weekendAlarm;
  console.log(`Hello Myles: ${alarm}`)
} else {
  alarm = alarmClock.weekdayAlarm;
  console.log(`Hello Myles: ${alarm}`)
}