var moment = require('moment-timezone');

function test(name) {
  let zone = moment.tz.zone(name);
  for (let i = 0; i < 1317731928000; i += 24 * 3600 * 1000) {
    let d = new Date();
    d.setTime(i);
    let local_offset = d.getTimezoneOffset();
    let zone_offset = zone.offset(i);

    if (local_offset != zone_offset) {
      return false;
    }
  }

  return true;
}

function getMatchingTimezones() {
  let r = [];
  for (let name of moment.tz.names()) {
    if (test(name)) {
      r.push(name);
    }
  }
  return r;
}

console.log("possible timezones:");
console.log(getMatchingTimezones().join("\n"));
