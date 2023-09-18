const mongoose = require("mongoose")

const ENV = process.env.NODE_ENV || "development"

require("dotenv").config({path: `${__dirname}/../.env.${ENV}`})

const {URL} = process.env

if (!URL) {
  throw new Error("no URL env variable set")
}

mongoose.connect(URL)

module.exports = mongoose