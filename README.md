# Adn module wrapper

![package](https://img.shields.io/npm/v/@ablanc/adn)
![build](https://img.shields.io/travis/adblanc/adn)
![coverage](https://img.shields.io/coveralls/github/adblanc/adn)

<br/>

## Description

Node.js module wrapper to access adn api (animedigitalnetwork.fr).

## Installation

```sh
# with yarn
yarn add @ablanc/adn

# or with npm
npm install @ablanc/adn
```

## Examples

```javascript
const adn = require("@ablanc/adn");
// import adn from "@ablanc/adn"; // Typescript

const mondayEpisodes = await adn.getCalendarDay("2019-11-04");
const catalog = await adn.getCatalog({ offset: 0, limit: 50 });
const episodes = await adn.getEpisodes({ showId: 355 });
const infos = await adn.getInfos("bleach");
```

## Tests

Tests are run using Jest framework. <br/>

```sh
# with yarn
yarn test

# or with npm
npm run test
```
