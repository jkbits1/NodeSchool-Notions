/**
 * Created by jk on 02/04/14.
 */

"use strict";

var q = require('q');

var defer = q.defer();

defer.promise.then(console.log);

setTimeout(defer.resolve, 300, "RESOLVED!");
