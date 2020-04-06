var assert = require('assert');

import { Database } from "../back/database/database";
import { Schema } from "../back/database/schema";

describe('Database', function () {

  describe('#isConnected()', function () {
    it('Check database connection', function () {
      var database: Database = new Database();
      assert.equal(database.isConnected(), true);
    });

    it('Check database deconnection', function () {
      var database: Database = new Database();
      assert.equal(database.isConnected(), true);
      database.end();
      assert.equal(database.isConnected(), false);
    });

    it('Check database reconnection', function () {
      var database: Database = new Database();
      assert.equal(database.isConnected(), true);
      database.end();
      assert.equal(database.isConnected(), false);
      database.connect();
      assert.equal(database.isConnected(), true);
    });
  });

  // Simple Query
  describe('#query()', function () {
    it('Run simple query', function () {
      var database: Database = new Database();
      database.run("SELECT * FROM " + Schema.TABLE_VERSION);
    });
  });

});
