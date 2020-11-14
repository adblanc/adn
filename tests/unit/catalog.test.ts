import * as adn from "../../src/index";
import { testShow } from "./utils";

describe("catalog adn", () => {
  it("should return a valid catalog", async () => {
    const res = await adn.getCatalog({ offset: 0, limit: 20 });
    expect(res).toBeTruthy();
    expect(res.length).toBe(20);

    res.forEach((show) => testShow(show));
  });

  it("should return a valid catalog even without options", async () => {
    const res = await adn.getCatalog();
    expect(res).toBeTruthy();
    expect(res.length).toBe(20);

    res.forEach((show) => testShow(show));
  });

  it("should throw if limit > 100", async () => {
    try {
      await adn.getCatalog({ limit: 101 });

      expect(false).toBe(true);
    } catch (ex) {
      expect(true).toBe(true);
    }
  });
});
