import * as adn from "../../src/index";

describe("catalog adn", () => {
  it("should return a valid catalog", async () => {
    const res = await adn.getCatalog({ offset: 0, limit: 20 });
    expect(res).toBeTruthy();
    expect(res.length).toBe(20);
    for (let anime of res) {
      expect(anime).toHaveProperty("title");
      expect(anime).toHaveProperty("url");
      expect(anime).toHaveProperty("image");
    }
  });

  it("should return a valid catalog even without options", async () => {
    const res = await adn.getCatalog();
    expect(res).toBeTruthy();
    expect(res.length).toBe(20);
    for (let anime of res) {
      expect(anime).toHaveProperty("title");
      expect(anime).toHaveProperty("url");
      expect(anime).toHaveProperty("image");
    }
  });
});
