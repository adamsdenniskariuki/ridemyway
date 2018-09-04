const mongoose = require('mongoose');
const config = require('../config');

class Database {

    contructor(){
        this.connect();
    }

    connect(){
        mongoose.connect(`mongodb://${config.RMW_DATABASE_URL}/${config.RMW_DATABASE_NAME}`, { useNewUrlParser: true })
            .then(() => {
                console.log('mongo db connected');
            })
            .catch((err) => {
                console.error(`connection error: ${err}`);
            });
    }
}

module.exports = new Database();