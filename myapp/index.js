var addDays = require("date-fns/addDays");
function date(num_of_days) {
  const result = addDays(new Date(2020, 07, 22), num_of_days);
  return result;
}
const num_of_days = 5;
console.log(date(num_of_days));
