import generateFormattedTime from "./formatted-time";

describe("#generateFormattedTime", () => {
  describe("현재 시간과의 차이가 1분 미만인 시간이 있음", () => {
    let lessThanOneMinute: string;

    beforeEach(() => {
      const now = new Date();
      lessThanOneMinute = new Date(new Date().setSeconds(now.getSeconds() - 59)).toString();
    });

    it("몇 초 전인지 확인할 수 있어야 한다.", () => {
      const result = generateFormattedTime(lessThanOneMinute);
      expect(result).toBe("59초 전");
    });
  });

  describe("현재 시간과의 차이가 1시간 미만인 시간이 있음", () => {
    let lessThanOneHour: string;

    beforeEach(() => {
      const now = new Date();
      lessThanOneHour = new Date(new Date().setMinutes(now.getMinutes() - 59)).toString();
    });

    it("몇 분 전인지 확인할 수 있어야 한다.", () => {
      const result = generateFormattedTime(lessThanOneHour);
      expect(result).toBe("59분 전");
    });
  });

  describe("현재 시간과의 차이가 1일 미민의 시간이 있음", () => {
    let lessThanOneDay: string;

    beforeEach(() => {
      const now = new Date();
      lessThanOneDay = new Date(new Date().setHours(now.getHours() - 23)).toString();
    });

    it("몇 시간 전인지 확인할 수 있어야 한다.", () => {
      const result = generateFormattedTime(lessThanOneDay);
      expect(result).toBe("23시간 전");
    });
  });

  describe("현재 시간과의 차이가 1달 미만의 시간이 있음", () => {
    let lessThanOneMoth: string;

    beforeEach(() => {
      const now = new Date();
      lessThanOneMoth = new Date(new Date().setDate(now.getDate() - 29)).toString();
    });

    it("몇 일 전인지 확인할 수 있어야 한다.", () => {
      const result = generateFormattedTime(lessThanOneMoth);
      expect(result).toBe("29일 전");
    });
  });

  describe("현재 시간과의 차이가 1달 이상의 시간이 있음", () => {
    let moreThanOneMonth: string;

    beforeEach(() => {
      moreThanOneMonth = new Date("2023-01-01").toString();
    });

    it("년/월/일로 시간을 확인할 수 있어야 한다.", () => {
      const result = generateFormattedTime(moreThanOneMonth);
      expect(result).toBe("2023년 1월 1일");
    });
  });
});
