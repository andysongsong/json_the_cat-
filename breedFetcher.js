const breedname = process.argv.slice(2);
const request = require("request");

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`;
request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error); // Print error if error
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log("The breed doesn't exist");
  }
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);
});
