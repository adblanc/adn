import * as adn from "../../index";

describe("calendar adn", () => {
  it("should return a valid calendar day", async () => {
    const res = await adn.getCalendarDay("2019-12-23");
    expect(res).toBeTruthy();
    for (let ep of res) {
      expect(ep).toHaveProperty("number");
      expect(ep).toHaveProperty("link");
      expect(ep).toHaveProperty("image");
      expect(ep).toHaveProperty("image2x");
      expect(ep).toHaveProperty("ref");
    }
  });
});
