const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/catalog.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS catalog (id INTEGER PRIMARY KEY, name TEXT, description TEXT, price REAL)");
});

module.exports = db;