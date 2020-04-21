import { Database } from "../database";
import { Schema } from "../schema";

var assert = require('assert');

describe('Database', function () {

  describe('#isConnected()', function () {
    it('Check database connection', function () {
      var database: Database = Database.get();
      assert.equal(database.isConnected(), true);
    });
  });

  // Simple Query
  describe('#query()', function () {
    it('Run simple query', function () {
      var database: Database = Database.get();
      database.query("SELECT * FROM " + Schema.TABLE_VERSION);
    });
  });

});
