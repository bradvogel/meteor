Package.describe({
  summary: "Moved to the 'mongo' package",
  version: '1.0.6-rc.0'
});

Package.on_use(function (api) {
  api.imply("mongo");
});
