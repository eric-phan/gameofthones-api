const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

// so you dont have to constantly invoke express

app.use(cors());

const locations = {
  crownlands:
    "https://i.pinimg.com/originals/8a/9b/f6/8a9bf6569c7204ddbf8d2b145cd8b147.jpg",
  north: "https://wallpaperaccess.com/full/808181.jpg",
  stormlands:
    "https://qph.fs.quoracdn.net/main-qimg-d951a8d2323cb546f50d2e641f3a6168.webp",
  westerlands:
    "https://qph.fs.quoracdn.net/main-qimg-c44a4aae12dfcc2ea55dd225a49897d5.webp",
  vale: "http://fourthwallgames.wdfiles.com/local--files/game-of-thrones:the-vale/The-Vale.jpg",
  riverlands:
    "http://fourthwallgames.wdfiles.com/local--files/game-of-thrones:the-riverlands/The-Riverlands.png",
  ironislands:
    "https://awoiaf.westeros.org/images/thumb/d/db/Great_wyk_a_game_of_thrones_tcg_by_jcbarquet.jpg/350px-Great_wyk_a_game_of_thrones_tcg_by_jcbarquet.jpg",
  reach:
    "http://fourthwallgames.wdfiles.com/local--files/game-of-thrones:the-reach/The-Reach.jpg",
  dorne:
    "http://fourthwallgames.wdfiles.com/local--files/game-of-thrones:dorne/Dorne.jpg",
};

const greatHouses = {
  targaryen: {
    id: 1,
    name: "Targaryen",
    location: "Crownlands",
    locationpic: locations.crownlands,
    blazon: "A red three-headed dragon, breathing flame on black",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/1200px-House_Targaryen.svg.png",
  },

  stark: {
    id: 2,
    name: "Stark",
    location: "North",
    locationpic: locations.north,
    blazon: "A running grey direwolf, on an ice-white field",
    emblempic:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Coat_of_arms_of_House_Stark_of_Winterfell.svg/1864px-Coat_of_arms_of_House_Stark_of_Winterfell.svg.png",
  },

  baratheon: {
    id: 3,
    name: "Baratheon",
    location: "Stormlands",
    locationpic: locations.stormlands,
    blazon: "A crowned stag black on a golden field",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/2/2d/House_Baratheon.svg/1200px-House_Baratheon.svg.png",
  },
  lannister: {
    id: 4,
    name: "Lannister",
    location: "Westerlands",
    locationpic: locations.westerlands,
    blazon: "A roaring lion, gold on crimson",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/1200px-House_Lannister.svg.png",
  },

  arryn: {
    id: 5,
    name: "Arryn",
    location: "Vale",
    locationpic: locations.vale,
    blazon: "A sky-blue falcon soaring against a white moon, on sky-blue",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/b/b4/House_Arryn.svg/1200px-House_Arryn.svg.png",
  },

  tully: {
    id: 6,
    name: "Tully",
    location: "Riverlands",
    locationpic: locations.riverlands,
    blazon: "A leaping trout, silver, against a rippling blue-and-red field",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/6/61/House_Tully.svg/1200px-House_Tully.svg.png",
  },

  greyjoy: {
    id: 7,
    name: "Greyjoy",
    location: "Iron Islands",
    locationpic: locations.ironislands,
    blazon: "A golden kraken on black",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/1200px-House_Greyjoy.svg.png",
  },

  tyrell: {
    id: 8,
    name: "Tyrell",
    location: "Reach",
    locationpic: locations.reach,
    blazon: "A golden rose on green",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/3/31/House_Tyrell.svg/1200px-House_Tyrell.svg.png",
  },

  martell: {
    id: 9,
    name: "Martell",
    location: "Dorne",
    locationpic: locations.dorne,
    blazon: "A red sun pierced by a golden spear on orange",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/6/60/House_Martell.svg/1200px-House_Martell.svg.png",
  },

  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

// if you want to deploy an rng-based freature, would have to add id: number to allow for math.random()
const normalHouses = {
  algood: {
    id: 10,
    name: "Algood",
    location: "Westerlands",
    locationpic: locations.westerlands,
    blazon: "A golden wreath on blue, a gold border",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/b/b3/House_Algood.svg/1200px-House_Algood.svg.png",
  },
  blackfyre: {
    id: 10,
    name: "Blackfyre",
    location: "Crownlands",
    locationpic: locations.crownlands,
    blazon: "A black three-headed dragon, breathing black fire on red",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/a/a3/House_Blackfyre_2.svg/1200px-House_Blackfyre_2.svg.png",
  },
  dayne: {
    id: 11,
    name: "Dayne",
    location: "Dorne",
    locationpic: locations.dorne,
    blazon: "A white sword and falling star crossed on lilac",
    emblempic:
      "https://awoiaf.westeros.org/images/thumb/9/95/House_Dayne.svg/1200px-House_Dayne.svg.png",
  },

  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

//  main route is always forward slash. Looks like an event listener but it is a network request

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
  // look in the main directory for this index.html, that what __dirname combo does!
  // 'go to the directory where the server is running and get this...
});

// use query parameter with :name after the /api
app.get("/api/:name", (request, response) => {
  const houseName = request.params.name.toLocaleLowerCase();
  //   use bracket notation because we have spaces in our objects, otherwise use dot notation
  if (greatHouses[houseName]) {
    // if houseName is in object greatHouses, respond with that rapperNames' properties
    response.json(greatHouses[houseName]);
  } else if (normalHouses[houseName]) {
    // if houseName is in object houses, respond with that rapperNames' properties
    response.json(normalHouses[houseName]);
  } else {
    response.json(normalHouses["unknown"]);
  }
});

// the process.env.PORT uses whatever heroku is using, if not, use your own PORT
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}.`);
});

// procfile tells heroku to start up the server.js
// console.log(locations.crownlands);
