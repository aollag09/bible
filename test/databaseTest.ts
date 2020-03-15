var assert = require('assert');

import { Database } from "../back/database";

describe('Database', function () {

  // Database connection
  describe('#isConnected()', function () {
    it('Check database connection', function () {
      var database: Database = new Database();
      assert.equal(database.isConnected(), true);
    });
  });

  // Database deconnection
  describe('#isConnected()', function () {
    it('Check database connection', function () {
      var database: Database = new Database();
      database.end();
      assert.equal(database.isConnected(), false);
    });
  });

});
