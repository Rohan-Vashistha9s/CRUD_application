import mongoose from "mongoose";

const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@cluster0.p8ljahc.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("database successfully connected");
    }
    catch (error) {
        console.log("error while connecting with the database", error);
    }
}


export default Connection;