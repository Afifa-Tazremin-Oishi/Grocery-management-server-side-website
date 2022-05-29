const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
	connectDB: (cb) => {
		MongoClient.connect(
			
			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fhbhv.mongodb.net/?retryWrites=true&w=majority`
		)
			.then((client) => {
				dbConnection = client.db("warehouseManagement");
				return cb();
			})
			.catch((error) => {
				console.log(error);
				return cb(error);
			});
	},
	getDb: () => dbConnection,
};



