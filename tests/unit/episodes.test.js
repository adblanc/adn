const adn = require("../../index");

describe("episodes adn", () => {
  it("should return anime episodes", async () => {
    const { playlists: catalog } = await adn.getCatalog({ start: 0, end: 5 });
    for (let anime of catalog) {
      const res = await adn.getAllEpisodes(anime.id);
      expect(res).toBeTruthy();
      for (let ep of res) {
        expect(Object.keys(ep)).toEqual(
          expect.arrayContaining([
            "id",
            "name",
            "reference",
            "type",
            "price",
            "price_reference",
            "number",
            "order",
            "image",
            "image_2x",
            "summary",
            "release_date",
            "duration",
            "stoptime",
            "watch_date",
            "url",
            "url_path",
            "embedded_url",
            "serie"
          ])
        );
      }
    }
  });
});
