import mongoose from "mongoose";


async function makeconnection() {
    mongoose.connect('mongodb+srv://Admin:QBUbpjBzRE5tCYv@cluster0.l000n.mongodb.net/sample_analytics?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'sample_analytics'
        }
    );

    const database = mongoose.connection;
    database.on("error", console.error.bind(console, "connection error: "));
    database.once("open", function () {
        console.log("Connected successfully");
        })
};

makeconnection()



export {makeconnection}








