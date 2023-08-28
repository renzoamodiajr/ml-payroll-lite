require("dotenv").config();

module.exports = {
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  dialectOptions: {
    dateStrings: true,
    typeCast: function (field, next) {
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "+08:00",
};
