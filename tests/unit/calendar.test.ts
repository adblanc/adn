import * as adn from "../../src/index";
import { testEpisode } from "./utils";

describe("calendar adn", () => {
  it("should return a valid calendar day", async () => {
    const res = await adn.getCalendarDay("2019-12-23");
    expect(res).toBeTruthy();

    res.forEach((ep) => testEpisode(ep));
  });
});
