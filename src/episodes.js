const fetch = require("node-fetch");

function checkOpt(opt) {
  opt = opt || {};
  opt.offset = opt.offset || 0;
  opt.limit = opt.limit || 100;
  opt.order = opt.order || -1;
  return opt;
}

async function getAllEpisodes(id, opt = {}) {
  try {
    checkOpt(opt);
    const { offset, limit, order } = opt;
    const url = `https://www.animedigitalnetwork.fr/index.php?option=com_vodapi&format=json&task=videolist.getJSON&cf_cache=1&show_id=${id}&offset=${offset}&limit=${limit}&order=${order}&season=`;
    let response = await fetch(url);
    response = await response.json();
    if (!response.length) return response;
    else {
      const next = await getAllEpisodes(id, {
        offset: opt.offset + 100,
        order: opt.order
      });
      if (next.length > 0) response = [...response, ...next];
    }
    return response;
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = getAllEpisodes;
