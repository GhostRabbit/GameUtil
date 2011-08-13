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
// There seems to be a race condition in cloud9ide where the last file ran will output to the console.
// This timeout makes sure the test suite grabs the console after all other open files have been checked for valid syntax.
// Otherwise, the test suite console may no longer appear and I can not see my results.
// However, this is not foolproof. The race condition is still on.
setTimeout(printSuccess, 500);

function printSuccess() {
    console.log("Success, executed", testCount, "tests in", fileNames.length, "files. Took", duration, "ms.");
}

function beforetests() {
    executeIfExists(testFile.beforetests);
}

function tests() {
    for (var key in testFile) {
        if (isTest(key)) {
            runTest(key);
        }
    }
}

function aftertests() {
    executeIfExists(testFile.aftertests);
}

function runTest(test) {
    console.log('    ' + test);
    setup();
    testFile[test]();
    teardown();
    testCount++;
}

function setup() {
    executeIfExists(testFile.setup);
}

function teardown() {
    executeIfExists(testFile.teardown);
}

function executeIfExists(f) {
    if (typeof f == 'function') {
        f();
    }
}

function isTest(f) {
    return (0 > ['beforetests', 'setup', 'teardown', 'aftertests'].indexOf(f));
}
