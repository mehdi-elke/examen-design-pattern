const comic = require("./books/comic");
const novel = require("./books/novel");
const journal = require("./books/journal");


class Factory {
    create(id, name, author, number, date) {
        if (number == null && date == null) {
            return new novel(id, name, author);
        } else if(number != null && date == null){
            return new comic(id, name, number, author);
        } else{
            return new journal(id, name, number, date)
        }
    }
}

const factory = new Factory();
Object.freeze(factory);

module.exports = factory;