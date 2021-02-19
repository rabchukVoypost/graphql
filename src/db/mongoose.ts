export {};
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

const connectDB = async () => {
    try {
        mongoose.connect(process.env["mongo_uri"],
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        console.log("dbconected")
    } catch (e) {
        console.error(e.massage)
        process.exit(1)
    }
}

module.exports = connectDB