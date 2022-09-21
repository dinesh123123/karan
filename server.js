
// import to modules
const http =require('http');
const app = require('./app');//import node_project file here
const sever = http.createServer(app);
const mongoose =require('mongoose');

//connect mongodb with localhost
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dineshkumar:rauniyar@cluster0.wzymbcm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// connect to browser
const port = process.env.port ||3016;
sever.listen(port, function(error){
	if(error){
		console.log(error)
	}else{
		console.log("The server is running at port 3016");
	}
});











