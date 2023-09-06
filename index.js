var StravaApiV3 = require('strava-v3');
console.log("StravaApiV3.ApiClient", StravaApiV3)



var api = new StravaApiV3.AthletesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLoggedInAthlete(callback);