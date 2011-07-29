PoolTest = TestCase("poolTest");

PoolTest.prototype.testGetCount = function() {
	assertEquals(0, new Pool().getCount());
};

PoolTest.prototype.testIsEmpty = function() {
	var pool = new Pool();
	assertTrue(pool.isEmpty());
	pool.add(6);
	assertFalse(pool.isEmpty());
};

PoolTest.prototype.testAdd = function() {
	var pool = new Pool();
	pool.add(6);
	assertEquals(1, pool.getCount());
};

PoolTest.prototype.testPickAll_shouldBeEmptyAfter = function() {
	var pool = new Pool();
	pool.add(6);
	var all = pool.pickAll();
	assertEquals(1, all.length);
	assertEquals(6, all[0]);
	assertTrue(pool.isEmpty());
};

PoolTest.prototype.testPickOne = function() {
	var pool = new Pool();
	pool.add(6);
	assertEquals(6, pool.pickOne());
};

PoolTest.prototype.testAdd_checkFifoOrder = function() {
	var pool = new Pool();
	pool.add(6);
	pool.add(9);
	assertEquals(6, pool.pickOne());
	assertEquals(9, pool.pickOne());
};

PoolTest.prototype.testPickone_undefinedIfEmpty = function() {
	var pool = new Pool();
	assertUndefined(pool.pickOne());
};

PoolTest.prototype.testShake_inRevereseOrderWhenReverseScramblerIsUsed = function() {
	var pool = new Pool();
	pool.add(1);
	pool.add(2);
	pool.shake(new ReverseScrambler());
	assertEquals(2, pool.pickOne());
	assertEquals(1, pool.pickOne());
};
