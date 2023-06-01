const checkTime = {
  isSecond: (time: number) => time < 60000,
  isMinute: (time: number) => time >= 60000 && time < 3600000,
  isHour: (time: number) => time >= 3600000 && time < 86400000,
  isDay: (time: number) => time >= 86400000 && time < 2592000000,
  isOverOneMonth: (time: number) => time >= 2592000000,
};

const calcTime = {
  second: (time: number) => Math.floor(time / 1000),
  minute: (time: number) => Math.floor(time / 60000),
  hour: (time: number) => Math.floor(time / 3600000),
  day: (time: number) => Math.floor(time / 86400000),
};

const generateFormattedTime = (time: string, lang = "ko") => {
  const formatter = new Intl.RelativeTimeFormat(lang, {
    numeric: "always",
  });
  const passed = new Date().getTime() - new Date(time).getTime();
  if (checkTime.isSecond(passed)) {
    // 초 단위
    return formatter.format(-calcTime.second(passed), "second");
  }
  if (checkTime.isMinute(passed)) {
    // 분 단위
    return formatter.format(-calcTime.minute(passed), "minute");
  }
  if (checkTime.isHour(passed)) {
    // 시간 단위
    return formatter.format(-calcTime.hour(passed), "hour");
  }
  if (checkTime.isDay(passed)) {
    // 일 단위
    return formatter.format(-calcTime.day(passed), "day");
  }
  if (checkTime.isOverOneMonth(passed)) {
    // yyyy년 mm월 dd일
    return new Intl.DateTimeFormat(lang, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(time));
  }
  return "";
};

export default generateFormattedTime;
