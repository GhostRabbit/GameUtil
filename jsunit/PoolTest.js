/**
 * 
 */

PoolTest = TestCase("poolTest");

PoolTest.prototype.testGetCount = function() {
	assertEquals(0, new myapp.Pool().getCount());
};

PoolTest.prototype.testIsEmpty = function() {
	var pool = new myapp.Pool();
	assertTrue(pool.isEmpty());
	pool.add(6);
	assertFalse(pool.isEmpty());
};

PoolTest.prototype.testAdd = function() {
	var pool = new myapp.Pool();
	pool.add(6);
	assertEquals(1, pool.getCount());
}

PoolTest.prototype.testPickOne = function() {
	var pool = new myapp.Pool();
	pool.add(6);
	assertEquals(6, pool.pickOne());
};

PoolTest.prototype.testAdd_checkFifoOrder = function() {
	var pool = new myapp.Pool();
	pool.add(6);
	pool.add(9);
	assertEquals(6, pool.pickOne());
	assertEquals(9, pool.pickOne());
};

PoolTest.prototype.testPickone_undefinedIfEmpty = function() {
	var pool = new myapp.Pool();
	assertUndefined(pool.pickOne());
};
