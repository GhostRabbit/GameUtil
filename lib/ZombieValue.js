var BackBone = require('backbone');
var ZombieValue = BackBone.Model.extend({
    values: {BRAIN:0, FOOTPRINTS:1, SHOOTGUN:2}
});
module.exports = ZombieValue;
