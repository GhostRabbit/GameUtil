ZombieDicePool.prototype = new Pool();
ZombieDicePool.prototype.Constructor = ZombieDicePool; 
function ZombieDicePool() {
	var dieFactory = new ZombieDieFactory();
	this.list = new Array();
	this.add(dieFactory.redZombieDie());
	this.add(dieFactory.redZombieDie());
	this.add(dieFactory.redZombieDie());

	this.add(dieFactory.yellowZombieDie());
	this.add(dieFactory.yellowZombieDie());
	this.add(dieFactory.yellowZombieDie());
	this.add(dieFactory.yellowZombieDie());

	this.add(dieFactory.greenZombieDie());
	this.add(dieFactory.greenZombieDie());
	this.add(dieFactory.greenZombieDie());
	this.add(dieFactory.greenZombieDie());
	this.add(dieFactory.greenZombieDie());
}; 