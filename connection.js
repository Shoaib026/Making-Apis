const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/node', {
            useNewUrlParser: true,   
            useUnifiedTopology: true 
        })
        console.log("good job");
    } catch (err) {
        console.error("failed in connection", err);
    }
}

connect();
