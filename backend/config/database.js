const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");

const adapter = new JSONFile("database/db.json");

const db = new Low(adapter, {
  users: [],
  students: [],
  teachers: [],
  classes: [],
  subjects: [],
  attendance: [],
  homework: [],
  results: [],
  fees: [],
  notices: []
});

async function initDB() {
  await db.read();
  db.data ||= {
    users: [],
    students: [],
    teachers: [],
    classes: [],
    subjects: [],
    attendance: [],
    homework: [],
    results: [],
    fees: [],
    notices: []
  };
  await db.write();
}

module.exports = {
  db,
  initDB
};
