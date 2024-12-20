// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-firefox-launcher'),
        require('karma-chrome-launcher'),
        require('karma-junit-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      files: [
        { pattern: './src/assets/**', watched: false, included:false, nocache:false, served:true }
      ],
      proxies: {
        '/assets/': '/base/src/assets/'
      },
      client: {
        jasmine: {
          timeoutInterval: 1000 * 60,
        },
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      captureTimeout: 1000 * 60 * 4,
      browserDisconnectTolerance: 3,
      browserDisconnectTimeout: 1000 * 60 * 4,
      browserNoActivityTimeout: 1000 * 60 * 4,
      junitReporter: {
        outputDir: 'Results', // results will be saved as $outputDir/$browserName.xml
        outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
        suite: '', // suite will become the package name attribute in xml testsuite element
        useBrowserName: true, // add browser name to report and classes names
        nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
        classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
        properties: {}, // key value pair of properties to add to the <properties> section of the report
        xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
      },
      reporters: ['progress', 'junit'],
      browsers: ['FirefoxHeadless', "ChromeHeadless"],
      customLaunchers: {
        'FirefoxHeadless': {
            base: 'Firefox',
            flags: [
                '-headless',
            ],
        }
      },
      singleRun: true
    });
  };
  