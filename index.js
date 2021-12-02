const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datePass = new Date(pass.risetime * 1000).toUTCString();
    console.log(`Next pass at ${datePass} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  printPassTimes(passTimes);
});