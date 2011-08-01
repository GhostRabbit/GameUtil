var startTime = new Date();
var fileNames = ['./CustomDieTest.js', './PoolTest.js', './RandomScramblerTest.js', './ZombieDieTest.js', './ZombieDicePoolTest.js', './TurnTest.js'];
var testCount = 0;
for (var i = 0; i < fileNames.length; i++) {
    var testFile = require(fileNames[i]);
    console.log(require.resolve(fileNames[i]) + ':');
    for (var key in testFile) {
        console.log('    ' + key);
        testFile[key]();
        testCount++;
    }
}
var duration = new Date() - startTime;
console.log("Success, executed", testCount, "tests in", fileNames.length, "files. Took", duration, "ms.");
