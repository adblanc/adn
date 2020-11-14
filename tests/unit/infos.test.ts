import * as adn from "../../src/index";

describe("infos adn", () => {
  jest.setTimeout(30000);
  it("should return anime infos", async () => {
    const catalog = await adn.getCatalog({ offset: 0, limit: 20 });
    for (let anime of catalog) {
      const res = await adn.getInfos(anime.reference);
      expect(Object.keys(res)).toEqual(
        expect.arrayContaining([
          "id",
          "title",
          "type",
          "originalTitle",
          "shortTitle",
          "reference",
          "age",
          "languages",
          "summary",
          "image",
          "image2x",
          "url",
          "urlPath",
          "episodeCount",
          "genres",
          "copyright",
          "rating",
          "ratingsCount",
          "commentsCount",
          "qualities",
          "simulcast",
          "free",
          "download",
          "nextVideoReleaseDate",
        ])
      );
    }
  });
});
