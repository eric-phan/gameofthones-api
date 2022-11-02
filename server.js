const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;
// so you dont have to constantly invoke express

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abrahan-Joseph",
    birthLocation: "London, England",
  },
  "rich brian": {
    age: 29,
    birthName: "Brian Imanuel Soewarno",
    birthLocation: "Jakarta, Indonesia",
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
  const rapperName = request.params.name.toLocaleLowerCase();
  //   use bracket notation because we have spaces in our objects, otherwise use dot notation
  if (rappers[rapperName]) {
    // if rapperName is in object rappers, respond with that rapperNames' properties
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(
    `The server is now running on port ${PORT}! Better go catch it c:`
  );
});


// procfile tells heroku to start up the server.js