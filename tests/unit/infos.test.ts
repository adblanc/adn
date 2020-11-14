import * as adn from "../../src/index";
import { testShow } from "./utils";

describe("infos adn", () => {
  jest.setTimeout(30000);
  it("should return anime infos", async () => {
    const catalog = await adn.getCatalog({ offset: 0, limit: 20 });
    for (let anime of catalog) {
      const res = await adn.getInfos(anime.reference);
      testShow(res);
    }
  });
});
