const fs = require("fs").promises;

const adn = require("../index");

async function startCalendar() {
  const days = [
    "2019-11-08",
    "2019-11-09",
    "2019-11-10",
    "2019-11-11",
    "2019-11-12",
    "2019-11-13",
    "2019-11-14",
    "2019-11-15"
  ];
  const result = [];
  for await (let day of days) {
    const res = {
      episodes: await adn.getCalendarDay(day),
      date: day
    };
    result.push(res);
  }
  await fs.writeFile("./adn_calendar.json", JSON.stringify(result));
  console.log(`adn_calendar mis a jour !`);
}

async function catalog() {
  const result = await adn.getCatalog({ start: 0, end: 450 });
  await fs.writeFile("./adn_catalog.json", JSON.stringify(result));
  console.log("Catalog, done.");
}

async function testAllShows() {
  const id = 335;
  const shows = await adn.getAllEpisodes(id, { order: 1 });
  await fs.writeFile(`./adn_show${id}.json`, JSON.stringify(shows));
}

async function infos() {
  const infos = await adn.getInfos(335);
  console.log(infos);
}

infos();

//testAllShows();

//startCalendar();
