var fileNames = ['./CustomDieTest.js', './PoolTest.js', './RandomScramblerTest.js', './ZombieDieTest.js', './ZombieDicePoolTest.js', './TurnTest.js'];
var testCount = 0;
for (var i = 0; i < fileNames.length; i++) {
    var testFile = require(fileNames[i]);
    console.log(fileNames[i] + ':');
    for (var key in testFile) {
        console.log('    ' + key);
        testFile[key]();
        testCount++;
    }
}
console.log("All done, executed", testCount, "tests in", fileNames.length, "files");