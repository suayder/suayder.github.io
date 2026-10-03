const fs = require('fs');
const date = new Date();
const buildData = {
  year: date.getFullYear(),
  month: date.getMonth(),
};
fs.writeFileSync('./src/data/build.json', JSON.stringify(buildData, null, 2));
