import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";


async function connect(){
     mongoose.set('strictQuery',true)
     const db = await mongoose.connect("mongodb+srv://anshithbodala2931:0dM42rfHsl43X1n8@cluster1.fcdr9fg.mongodb.net/?authMechanism=SCRAM-SHA-1&authSource=Cluster1/dbconnect");
     console.log("Database Connected");
     return db;
}

export default connect;