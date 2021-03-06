var selftest = require('../selftest.js');
var Sandbox = selftest.Sandbox;
var files = require('../files.js');

selftest.define("add cordova platforms", function () {
  var s = new Sandbox();
  var run;

  // Starting a run
  s.createApp("myapp", "package-tests");
  s.cd("myapp");
  s.set("METEOR_TEST_TMP", files.mkdtemp());

  run = s.run("run", "android");
  run.matchErr("Platform is not added");
  run.match("meteor add-platform android");
  run.expectExit(1);

  run = s.run("add-platform", "android");
  run.match("Do you agree");
  run.write("Y\n");
  run.extraTime = 90; // Huge download
  run.match("added");

  run = s.run("remove-platform", "foo");
  run.match("foo is not");

  run = s.run("remove-platform", "android");
  run.match("removed");
  run = s.run("run", "android");
  run.matchErr("Platform is not added");
  run.match("meteor add-platform android");
  run.expectExit(1);
});
