function formatDuration(seconds) {
  var phrase = [];
  if (seconds === 0) {
    return "now";
  }
  if (seconds < 60) {
    secondsCounter(seconds);
  } else if (seconds >= 60 && seconds < 3600) {
    var secLeft = minutesCounter(seconds);
    secondsCounter(secLeft);
  } else if (seconds >= 3600 && seconds < 86400) {
    var minLeft = hoursCounter(seconds);
    var secLeft = minutesCounter(minLeft);
    secondsCounter(secLeft);
  } else if (seconds >= 86400 && seconds < 31536000) {
    var hoursLeft = daysCounter(seconds);
    var minLeft = hoursCounter(hoursLeft);
    var secLeft = minutesCounter(minLeft);
    secondsCounter(secLeft);
  } else if (seconds >= 31536000) {
    var daysLeft = yearsCounter(seconds);
    var hoursLeft = daysCounter(daysLeft);
    var minLeft = hoursCounter(hoursLeft);
    var secLeft = minutesCounter(minLeft);
    secondsCounter(secLeft);
    console.log(daysLeft, hoursLeft, minLeft, secLeft);
  }

  function secondsCounter(num) {
    num > 1
      ? phrase.push(`${num} seconds`)
      : num !== 0
      ? phrase.push(`${num} second`)
      : null;
  }

  function minutesCounter(num) {
    var minutes = 0;

    while (num >= 60) {
      minutes += 1;
      num -= 60;
    }

    minutes > 1
      ? phrase.push(`${minutes} minutes`)
      : minutes !== 0
      ? phrase.push(`${minutes} minute`)
      : null;

    return num;
  }

  function hoursCounter(num) {
    var hours = 0;

    while (num >= 3600) {
      hours += 1;
      num -= 3600;
    }

    hours > 1
      ? phrase.push(`${hours} hours`)
      : hours !== 0
      ? phrase.push(`${hours} hour`)
      : null;

    return num;
  }

  function daysCounter(num) {
    var days = 0;

    while (num >= 86400) {
      days += 1;
      num -= 86400;
    }

    days > 1
      ? phrase.push(`${days} days`)
      : days !== 0
      ? phrase.push(`${days} day`)
      : null;

    return num;
  }

  function yearsCounter(num) {
    var years = 0;

    while (num >= 31536000) {
      years += 1;
      num -= 31536000;
    }

    years > 1
      ? phrase.push(`${years} years`)
      : years !== 0
      ? phrase.push(`${years} year`)
      : null;

    return num;
  }

  if (phrase.length > 1) {
    for (let i = 0; i < phrase.length; i++) {
      if (i === phrase.length - 2) {
        phrase[i] = phrase[i] + " and";
      } else {
        phrase[i] = phrase[i] + ",";
      }
    }
    return phrase.join(" ").slice(0, -1);
  }
  return phrase.join("");
}

console.log(formatDuration(60)); // "1 minute and 2 seconds"

// ${num > 0 ? ", " : ""}
// ${num > 0 ? "and " : ""}
