"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function isLeapYear(year) {
  return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0;
}

function getMaxDay(year, month) {
  year = parseFloat(year);
  month = parseFloat(month);
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
}

function getYears(startDate, endDate) {
  var startYear = startDate.getFullYear();
  var endYear = endDate.getFullYear();
  var rs = [];
  while (startYear <= endYear) {
    rs.push(startYear);
    startYear++;
  }
  return {
    minYear: rs[0],
    maxYear: rs[rs.length - 1]
  };
}

function getMonths(startDate, endDate, year) {
  var startYear = startDate.getFullYear();
  var endYear = endDate.getFullYear();
  var startMonth = startDate.getMonth() + 1;
  var endMonth = endDate.getMonth() + 1;
  var start = 1;
  var end = 12;
  if (year === startYear) {
    start = startMonth;
  }
  if (year === endYear) {
    end = endMonth;
  }
  return {
    minMonth: start,
    maxMonth: end
  };
}

function getDays(startDate, endDate, year, month) {
  var startYear = startDate.getFullYear();
  var endYear = endDate.getFullYear();
  var startMonth = startDate.getMonth() + 1;
  var endMonth = endDate.getMonth() + 1;
  var startDay = startDate.getDate();
  var endDay = endDate.getDate();

  var start = 1;
  var end = getMaxDay(year, month);

  if (year === startYear && month === startMonth) {
    start = startDay;
  }
  if (year === endYear && month === endMonth) {
    end = endDay;
  }
  return {
    minDay: start,
    maxDay: end
  };
}

exports.getYears = getYears;
exports.getMonths = getMonths;
exports.getDays = getDays;