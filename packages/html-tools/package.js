Package.describe({
  summary: "Standards-compliant HTML tools",
  version: '1.0.2-rc.0'
});

Package.on_use(function (api) {
  api.use('htmljs');
  api.imply('htmljs');

  api.export('HTMLTools');

  api.add_files(['utils.js',
                 'scanner.js',
                 'charref.js',
                 'tokenize.js',
                 'templatetag.js',
                 'parse.js']);
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.use('html-tools');
  api.use('underscore');
  api.use('htmljs');
  api.use('blaze-tools'); // for `toJS`
  api.add_files(['charref_tests.js',
                 'tokenize_tests.js',
                 'parse_tests.js']);
});
