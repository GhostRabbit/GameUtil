var testFiles = [require('./CustomDieTest.js')];

var count = 0;
for (var i = 0; i < testFiles.length; i++) {
    var testFile = testFiles[i];
    for (var key in testFile) {
        console.log(key);
        testFile[key]();
        count++;
    }
}

console.log("All done, executed ", count);
