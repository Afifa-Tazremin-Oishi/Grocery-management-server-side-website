const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const { connectDB, getDb } = require("./db");
const { ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

const app = express();

// Database

let db;
connectDB((err) => {
	if (!err) {
		app.listen(port, () => console.log(`Server is running on port ${port}`));

		db = getDb();
	}
});


