ZombieDicePoolTest = TestCase("zombieDicePoolTest");

ZombieDicePoolTest.prototype.testPoolsShouldBeSeperate = function() {
	var pool1 = new ZombieDicePool();
	var pool2 = new ZombieDicePool();
	
	assertEquals(12, pool1.getCount());
	assertEquals(12, pool2.getCount());
};
