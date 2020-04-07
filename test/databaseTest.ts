var assert = require('assert');

import { Database } from "../back/database/database";
import { Schema } from "../back/database/schema";

describe('Database', function () {

  describe('#isConnected()', function () {
    it('Check database connection', function () {
      var database: Database = new Database();
      assert.equal(database.isConnected(), true);
    });
  });

  // Simple Query
  describe('#query()', function () {
    it('Run simple query', function () {
      var database: Database = new Database();
      database.query("SELECT * FROM " + Schema.TABLE_VERSION);
    });
  });

});
