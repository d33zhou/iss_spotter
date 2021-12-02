const { nextISSTimesForMyLocation } = require('./iss_promised');

/* fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((body) => console.log(body)); */

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datePass = new Date(pass.risetime * 1000).toUTCString();
    console.log(`Next pass at ${datePass} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((response) => {
    printPassTimes(response);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });