var Pool = require('./Pool.js');
var ZombieDieFactory = require('./ZombieDieFactory.js');
var ZombieDicePool = Pool.extend({
    initialize: function() {
        var dieFactory = new ZombieDieFactory();
        this.list = []; // Need to call super constructor instead
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
        this.add(dieFactory.greenZombieDie());
    }
});
module.exports = ZombieDicePool;
