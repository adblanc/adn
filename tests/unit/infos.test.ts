import * as adn from "../../src/index";

describe("infos adn", () => {
  jest.setTimeout(30000);
  it("should return anime infos", async () => {
    const catalog = await adn.getCatalog({ start: 0, end: 20 });
    for (let anime of catalog) {
      const res = await adn.getInfos({ showId: anime.id });
      if (!res) return;
      expect(Object.keys(res)).toEqual(
        expect.arrayContaining([
          "episode_count",
          "rating",
          "rating_count",
          "genres",
          "ref",
          "id",
          "title",
          "type",
          "free",
          "summary",
          "simulcast",
          "copyright",
          "age",
          "original_title",
          "hd",
          "versions",
          "image_url",
          "image2x_url",
          "url",
          "url_path",
        ])
      );
    }
  });
});
