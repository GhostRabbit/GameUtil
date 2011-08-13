var startTime = new Date();
var fileNames = ['./CustomDieTest.js', './PoolTest.js', './RandomScramblerTest.js', './ZombieDieTest.js', './ZombieDicePoolTest.js', './TurnTest.js'];
var testCount = 0;
for (var i = 0; i < fileNames.length; i++) {
    var testFile = require(fileNames[i]);
    console.log(require.resolve(fileNames[i]) + ':');
    beforetests();
    tests();
    aftertests();
}
var duration = new Date() - startTime;
console.log("Success, executed", testCount, "tests in", fileNames.length, "files. Took", duration, "ms.");

function beforetests() {
    executeIfExists(testFile.beforetests);
}

function setup() {
    executeIfExists(testFile.setup);
}

function tests() {
    for (var key in testFile) {
        if (0 > ['beforetests', 'setup', 'teardown', 'aftertests'].indexOf(key)) {
            console.log('    ' + key);
            setup();
            testFile[key]();
            teardown();
            testCount++;
        }
    }
}

function teardown() {
    executeIfExists(testFile.teardown);
}

function aftertests() {
    executeIfExists(testFile.aftertests);
}

function executeIfExists(f) {
    if (typeof f == 'function') {
        f();
    }
}
