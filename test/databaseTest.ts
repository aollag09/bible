var assert = require('assert');

import { Database } from "../back/database";

describe('Database', function () {
  describe('#isConnected()', function () {
    it('Check database connection', function () {
      var database: Database = new Database();
      assert.equal(database.isConnected(), true);
    });
  });
});
