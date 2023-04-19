// const fs = require("fs");
// const path = require("path");

// var db = {};
// fs.readdirSync(__dirname)
//   .filter(
//     (file) =>
//   {console.log(file);
//       return file.indexOf(".") !== 0 && file !== "index.js" && file !== "connection.js"
//   })
//   .forEach((file) => {
//     console.log(file, "forexh")
//     // db = {...db, file}
//     var model = path.join(__dirname, file);
//     db[file] = model;
//   });
// console.log(db)
// // Object.keys(db).forEach(function (modelName) {
// // //   if ("associate" in db[modelName]) {
// //     {Object.keys(modelName)};
// // //   }
// // //   return modelName
// // console.log(modelName, "name")
// // });
// db = {...Object.keys(db).values}
// console.log(db)
// module.exports = db;
const admin = require('./admin')

module.exports={
    admin,
}