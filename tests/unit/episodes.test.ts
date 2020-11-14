import * as adn from "../../src/index";

describe("episodes adn", () => {
  jest.setTimeout(30000);
  it("should return anime episodes", async () => {
    const catalog = await adn.getCatalog({ offset: 0, limit: 5 });
    for (let anime of catalog) {
      const res = await adn.getEpisodes({
        showId: anime.id,
      });
      expect(res).toBeTruthy();
      for (let ep of res) {
        expect(Object.keys(ep)).toEqual(
          expect.arrayContaining([
            "id",
            "name",
            "number",
            "shortNumber",
            "season",
            "reference",
            "type",
            "order",
            "image",
            "image2x",
            "summary",
            "releaseDate",
            "duration",
            "url",
            "urlPath",
            "embeddedUrl",
            "languages",
            "qualities",
            "rating",
            "ratingsCount",
            "commentsCount",
            "available",
            "download",
            "free",
            "freeWithAds",
            "show",
          ])
        );
      }
    }
  });
});
