const CompanyReviews = require("../models/CompanyReviews");

function handle_request(msg, callback) {
  console.log("Message is : ", msg);
  CompanyReviews.find({ companyId: msg }, (error, result) => {
    if (error) {
      callback(error, "Error");
    }
    if (result) {
      console.log("Result Found ", result);
      callback(null, result);
    } else {
      console.log("Result is ", result);
      callback(null, result);
    }
  });
}

exports.handle_request = handle_request;
