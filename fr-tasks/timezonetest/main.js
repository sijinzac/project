var jpDays = {
    Monday: '月',
    Tuesday: '火',
    Wednesday: '水',
    Thursday: '木',
    Friday: '金',
    Saturday: '土',
    Sunday: '日'
};

var enDays = {
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Wed',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat',
    Sunday: 'Sun'
};

function returnDay(inputDate, region) {
var moment = require('moment-timezone');
var recDate = moment(inputDate);
var convertedDay;
if (region === "ja") {
  convertedDay = recDate.tz("Japan").format('dddd');
  console.log(jpDays[convertedDay]);
}
else if(region === "en") {
  convertedDay = recDate.tz("US/Pacific").format('dddd');
  console.log(enDays[convertedDay]);
}
console.log(convertedDay);
}
returnDay("20160715", "en");


