const adn = require("../../index");

describe("catalog adn", () => {
  it("should return a valid catalog", async () => {
    const res = await adn.getCatalog({ start: 0, end: 20 });
    expect(res).toBeTruthy();
    expect(res.playlists).toBeTruthy();
    expect(res.number).toBe(20);
    for (let anime of res.playlists) {
      expect(anime).toHaveProperty("name");
      expect(anime).toHaveProperty("link");
      expect(anime).toHaveProperty("image");
      expect(anime).toHaveProperty("ref");
      expect(anime.ref).toBe("adn");
    }
  });
});
